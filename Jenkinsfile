pipeline {
    agent any

    environment {
        APP_NAME = 'velocity-garage'
        APP_DIR = '/opt/velocity-garage'
        DEPLOY_USER = 'deployuser'
        APP_SERVER_HOST = credentials('app-server-host')
        DOCKER_COMPOSE = 'docker compose'
        NODE_VERSION = '20'
    }

    tools {
        nodejs "NodeJs-20"
    }

    options {
        timeout(time: 30, unit: 'MINUTES')
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from Git repository...'
                checkout scm
                sh 'git log --oneline -5'
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                sh 'npm install'
            }
        }
        stage('Quality Checks') {
            parallel {
                stage('Lint') {
                    steps {
                        echo 'Running ESLint check...'
                        sh 'npm run lint'
                    }
                }
                stage('Type Check') {
                    steps {
                        echo 'Running TypeScript type check...'
                        sh 'npm run type-check'
                    }
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh """
                    docker build -t ${APP_NAME}:${BUILD_NUMBER} -t ${APP_NAME}:latest -f Dockerfile .
                """
            }
        }
        stage('Transfer Files') {
            steps {
                echo 'Transferring Files to app Server...'
                sshagent(credentials: ['app-server-ssh-key']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${DEPLOY_USER}@${APP_SERVER_HOST}  "mkdir -p ${APP_DIR} && rm -rf ${APP_DIR}/*"
                        scp -o StrictHostKeyChecking=no docker-compose.yml Dockerfile Dockerfile.dev ${DEPLOY_USER}@${APP_SERVER_HOST}:${APP_DIR}/
                        scp -o StrictHostKeyChecking=no -r docker/ ${DEPLOY_USER}@${APP_SERVER_HOST}:${APP_DIR}/
                    """
                }
            }
        }
        stage('Transfer Docker Image') {
            steps {
                echo 'Transferring Docker Image to app Server...'
                sshagent(credentials: ['app-server-ssh-key']) {
                    sh """
                        # Save image to tar
                        docker save ${APP_NAME}:latest | gzip > /tmp/${APP_NAME}-latest.tar.gz
                        # Transfer tar to server
                        scp -o StrictHostKeyChecking=no /tmp/${APP_NAME}-latest.tar.gz ${DEPLOY_USER}@${APP_SERVER_HOST}:/tmp/
                        # Load image on server
                        ssh -o StrictHostKeyChecking=no ${DEPLOY_USER}@${APP_SERVER_HOST} "docker load -i /tmp/${APP_NAME}-latest.tar.gz && rm -f /tmp/${APP_NAME}-latest.tar.gz"
                        # Clean up local tar
                        rm -f /tmp/${APP_NAME}-latest.tar.gz
                    """
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application on app Server...'
                sshagent(credentials: ['app-server-ssh-key']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${DEPLOY_USER}@${APP_SERVER_HOST} bash << 'REMOTE'
                            set -e
                            cd ${APP_DIR}
                            echo "==> Stopping existing containers..."
                            docker compose --profile prod down --remove-orphans || true

                            echo "==> Starting new containers..."
                            docker compose --profile prod up -d

                            echo "==> Waiting for the application to be healthy..."
                            sleep 10

                            echo "==> Containers status:"
                            docker compose --profile prod ps

                            echo "==> Pruning unused Docker images..."
                            docker image prune -f
REMOTE
                    """
                }
            }
        }
        stage('Health Check') {
            steps {
                echo 'Running health check on deployed application...'
                sshagent(credentials: ['app-server-ssh-key']) {
                    sh """
                        # wait for application to be fully healthy
                        sleep 15
                        # Check http response from the application
                        ssh -o StrictHostKeyChecking=no ${DEPLOY_USER}@${APP_SERVER_HOST} "curl -sf http://localhost:3000 > /dev/null && echo 'Health Check Passed' || (echo 'Health check failed!' && exit 1)"
                    """
                }
            }
        }
    }
    post {
        success {
            echo """
            ╔══════════════════════════════════╗
            ║  ✅  DEPLOYMENT SUCCESSFUL       ║
            ║  Build: #${BUILD_NUMBER}         ║
            ║  App:   ${APP_NAME}              ║
            ╚══════════════════════════════════╝
            """
        }
        failure {
            echo """
            ╔══════════════════════════════════╗
            ║  ❌  DEPLOYMENT FAILED           ║
            ║  Build: #${BUILD_NUMBER}         ║
            ║  App:   ${APP_NAME}              ║
            ╚══════════════════════════════════╝
            """
        }
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
            sh 'docker image prune -f || true'
        }
    }
}
