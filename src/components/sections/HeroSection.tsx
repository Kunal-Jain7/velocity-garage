'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { HERO_STATS } from '@/lib/data'

function HeroCarSVG() {
  return (
    <svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" aria-label="Luxury car silhouette">
      <defs>
        <radialGradient id="bodyGlow" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="40%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.03" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Ground glow */}
      <ellipse cx="400" cy="295" rx="320" ry="18" fill="url(#bodyGlow)" opacity="0.6" />
      <ellipse cx="400" cy="298" rx="290" ry="10" fill="#000" opacity="0.7" />

      {/* Body lower */}
      <path d="M80 220 Q100 240 160 248 L640 248 Q700 240 720 220 L700 210 L100 210 Z" fill="url(#bodyGrad)" stroke="#3a3a3a" strokeWidth="0.5" />

      {/* Sill line */}
      <line x1="100" y1="215" x2="700" y2="215" stroke="#C9A84C" strokeWidth="1" opacity="0.4" />

      {/* Body main */}
      <path d="M120 210 Q160 165 220 148 Q280 130 340 125 L460 125 Q520 128 570 148 Q620 168 660 195 Q680 205 700 210 L100 210 Z" fill="url(#bodyGrad)" stroke="#333" strokeWidth="0.5" />

      {/* Roof */}
      <path d="M240 148 Q280 100 340 88 L460 88 Q520 98 540 148 Z" fill="#151515" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.4" />

      {/* Windshield */}
      <path d="M248 148 Q285 105 340 94 L380 90 L380 148 Z" fill="url(#glassGrad)" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.5" />

      {/* Rear glass */}
      <path d="M460 148 L460 90 L500 94 Q530 108 542 148 Z" fill="url(#glassGrad)" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.5" />

      {/* Side window */}
      <path d="M380 92 L460 92 L460 148 L380 148 Z" fill="url(#glassGrad)" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.4" />

      {/* Door line */}
      <line x1="380" y1="92" x2="380" y2="210" stroke="#3a3a3a" strokeWidth="0.8" />

      {/* Headlight */}
      <path d="M655 195 Q680 190 700 196 L700 210 Q680 208 658 205 Z" fill="#111" stroke="#C9A84C" strokeWidth="0.5" />
      <path d="M658 198 Q678 193 698 199" stroke="#C9A84C" strokeWidth="1.5" fill="none" filter="url(#glow)" opacity="0.9" />

      {/* Taillight */}
      <path d="M100 210 L80 205 Q75 200 80 195 L110 197 Z" fill="#111" stroke="#8A2020" strokeWidth="0.5" />
      <path d="M84 200 L106 201" stroke="#C0392B" strokeWidth="2" fill="none" filter="url(#glow)" opacity="0.8" />

      {/* Bumpers */}
      <path d="M680 220 Q720 225 730 240 L720 245 Q700 232 665 228 Z" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="0.5" />
      <path d="M70 220 Q50 228 48 242 L60 245 Q75 232 115 228 Z" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="0.5" />

      {/* Wheel arches */}
      <path d="M560 210 Q570 248 620 248 Q680 248 690 210" fill="none" stroke="#2a2a2a" strokeWidth="3" />
      <path d="M110 210 Q100 248 160 248 Q220 248 230 210" fill="none" stroke="#2a2a2a" strokeWidth="3" />

      {/* Front wheel */}
      <circle cx="620" cy="258" r="38" fill="#0a0a0a" stroke="#252525" strokeWidth="2" />
      <circle cx="620" cy="258" r="28" fill="none" stroke="#1e1e1e" strokeWidth="1" />
      <circle cx="620" cy="258" r="16" fill="#141414" stroke="#C9A84C" strokeWidth="1" opacity="0.6" />
      <line x1="620" y1="230" x2="620" y2="286" stroke="#252525" strokeWidth="1.5" />
      <line x1="592" y1="258" x2="648" y2="258" stroke="#252525" strokeWidth="1.5" />
      <line x1="600" y1="238" x2="640" y2="278" stroke="#252525" strokeWidth="1.5" />
      <line x1="640" y1="238" x2="600" y2="278" stroke="#252525" strokeWidth="1.5" />

      {/* Rear wheel */}
      <circle cx="160" cy="258" r="38" fill="#0a0a0a" stroke="#252525" strokeWidth="2" />
      <circle cx="160" cy="258" r="28" fill="none" stroke="#1e1e1e" strokeWidth="1" />
      <circle cx="160" cy="258" r="16" fill="#141414" stroke="#C9A84C" strokeWidth="1" opacity="0.6" />
      <line x1="160" y1="230" x2="160" y2="286" stroke="#252525" strokeWidth="1.5" />
      <line x1="132" y1="258" x2="188" y2="258" stroke="#252525" strokeWidth="1.5" />
      <line x1="140" y1="238" x2="180" y2="278" stroke="#252525" strokeWidth="1.5" />
      <line x1="180" y1="238" x2="140" y2="278" stroke="#252525" strokeWidth="1.5" />

      {/* Gold accent line */}
      <path d="M200 175 Q400 168 580 178" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.35" />

      {/* Badge */}
      <text x="400" y="175" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="11" fontWeight="600" fill="#C9A84C" opacity="0.6" letterSpacing="3">
        VELOCITY GARAGE
      </text>
    </svg>
  )
}

function StatCounter({ num, label }: { num: number; label: string }) {
  const elRef = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const duration = 2000
          const animate = (now: number) => {
            const elapsed = Math.min((now - start) / duration, 1)
            const ease = 1 - Math.pow(1 - elapsed, 3)
            el.textContent = Math.floor(num * ease).toString()
            if (elapsed < 1) requestAnimationFrame(animate)
            else el.textContent = num.toString()
          }
          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [num])

  return (
    <div className="text-center" style={{ padding: '20px 40px', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
      <span
        ref={elRef}
        className="font-display block"
        style={{ fontSize: '32px', fontWeight: 600, color: 'var(--gold)', letterSpacing: '-0.02em' }}
      >
        0
      </span>
      <span
        className="font-condensed block mt-0.5"
        style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-muted)' }}
      >
        {label}
      </span>
    </div>
  )
}

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden"
      style={{ height: '100vh', minHeight: '700px' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #050505 0%, #0d0d0d 40%, #080508 70%, #050505 100%)',
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg" style={{ opacity: 0.03 }} />

      {/* Glow orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '900px',
          height: '900px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          top: '-200px',
          right: '-200px',
          animation: 'pulseGlow 6s ease-in-out infinite',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,57,43,0.04) 0%, transparent 70%)',
          bottom: '-100px',
          left: '-100px',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 max-w-3xl"
        style={{ padding: '0 60px', paddingTop: '100px' }}
      >
        {/* Label */}
        <div
          className="section-label"
          style={{
            opacity: 0,
            animation: 'heroFadeUp 1s 0.3s forwards',
          }}
        >
          Est. 2009 &nbsp;·&nbsp; Milano &nbsp;·&nbsp; Curated Automotive Art
        </div>

        {/* Headline */}
        <h1
          className="font-display"
          style={{
            fontSize: 'clamp(56px, 8vw, 110px)',
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: '-0.01em',
            marginBottom: '32px',
          }}
        >
          {['Experience', 'Automotive', 'Excellence'].map((word, i) => (
            <span
              key={word}
              className="block overflow-hidden"
            >
              <span
                className="block"
                style={{
                  opacity: 0,
                  transform: 'translateY(100%)',
                  animation: `heroSlideUp 0.9s cubic-bezier(0.16,1,0.3,1) ${0.5 + i * 0.15}s forwards`,
                  fontStyle: i === 1 ? 'italic' : 'normal',
                  color: i === 1 ? 'var(--gold)' : 'inherit',
                }}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: '16px',
            fontWeight: 300,
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            maxWidth: '440px',
            marginBottom: '48px',
            letterSpacing: '0.02em',
            opacity: 0,
            animation: 'heroFadeUp 1s 0.9s forwards',
          }}
        >
          A curated sanctuary of the world&apos;s most extraordinary machines. Where engineering meets desire, and performance is a philosophy.
        </p>

        {/* Actions */}
        <div
          className="flex items-center gap-8"
          style={{ opacity: 0, animation: 'heroFadeUp 1s 1.1s forwards' }}
        >
          <button
            onClick={() => scrollTo('#collection')}
            className="btn-base btn-gold"
            style={{ fontSize: '13px', padding: '16px 40px', cursor: 'none' }}
          >
            Explore Collection
            <ArrowRight size={14} />
          </button>
          <button
            className="btn-base btn-outline"
            style={{ fontSize: '13px', padding: '15px 36px', cursor: 'none' }}
          >
            <Play size={14} />
            Watch Film
          </button>
        </div>
      </div>

      {/* Car Visual */}
      <div
        className="absolute right-0 hero-car-visual"
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          width: '55%',
          height: '80%',
          zIndex: 1,
          opacity: 0,
          animation: 'heroFadeIn 1.5s 0.8s forwards',
        }}
      >
        <div className="w-full h-full flex items-center justify-center" style={{ filter: 'drop-shadow(0 0 60px rgba(201,168,76,0.15))' }}>
          <HeroCarSVG />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute flex items-center gap-4"
        style={{
          bottom: '100px',
          left: '60px',
          opacity: 0,
          animation: 'heroFadeUp 1s 1.4s forwards',
        }}
      >
        <div
          style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(90deg, var(--text-muted), transparent)',
            animation: 'expandWidth 2s 2s both',
          }}
        />
        <span
          className="font-condensed"
          style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-muted)' }}
        >
          Scroll to Discover
        </span>
      </div>

      {/* Stats bar */}
      <div
        className="absolute left-0 right-0"
        style={{
          bottom: 0,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(10,10,10,0.8)',
          backdropFilter: 'blur(20px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          opacity: 0,
          animation: 'heroFadeUp 1s 1.5s forwards',
        }}
      >
        {HERO_STATS.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              borderRight: i < HERO_STATS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}
          >
            <StatCounter num={stat.num} label={stat.label} />
          </div>
        ))}
      </div>
    </section>
  )
}
