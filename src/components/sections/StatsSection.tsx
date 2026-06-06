'use client'

import { useEffect, useRef, useState } from 'react'
import { STATS } from '@/lib/data'

function AnimatedStat({ value, suffix, label, subLabel }: {
  value: string
  suffix?: string
  label: string
  subLabel: string
}) {
  const [displayed, setDisplayed] = useState('0')
  const started = useRef(false)
  const elRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const isDecimal = value.includes('.')
          const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''))
          const prefix = value.replace(/[0-9.]/g, '')
          const duration = 2200
          const start = performance.now()
          const animate = (now: number) => {
            const elapsed = Math.min((now - start) / duration, 1)
            const ease = 1 - Math.pow(1 - elapsed, 3)
            const current = numericPart * ease
            setDisplayed(prefix + (isDecimal ? current.toFixed(1) : Math.floor(current).toString()))
            if (elapsed < 1) requestAnimationFrame(animate)
            else setDisplayed(value)
          }
          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div
      ref={elRef}
      /* CSS class handles hover — no inline onMouseEnter */
      className="stat-block stat-block-hover"
      style={{
        padding: '60px 40px',
        border: '1px solid rgba(255,255,255,0.08)',
        cursor: 'none',
        transition: 'background 0.4s',
      }}
    >
      <span
        className="font-display block"
        style={{
          fontSize: '72px',
          fontWeight: 300,
          lineHeight: 1,
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)',
        }}
      >
        <span style={{ color: 'var(--gold)' }}>{displayed}</span>
        {suffix}
      </span>
      <span
        className="font-condensed block mt-4"
        style={{
          fontSize: '12px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
        }}
      >
        {label}
        <br />
        <span style={{ opacity: 0.7 }}>{subLabel}</span>
      </span>
    </div>
  )
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('[data-reveal]')
    if (!els) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal-visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: 'var(--void)', padding: '120px 60px' }}
    >
      {/* Watermark text */}
      <div
        className="absolute pointer-events-none select-none font-display"
        style={{
          fontSize: '300px',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.015)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          whiteSpace: 'nowrap',
          letterSpacing: '-0.05em',
        }}
        aria-hidden="true"
      >
        VELOCITY
      </div>

      <div className="relative z-10">
        <div className="section-label" data-reveal>
          By the Numbers
        </div>

        <div
          data-reveal
          className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-20"
        >
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(40px, 5vw, 68px)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
            }}
          >
            Fifteen Years of
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Driven Excellence</em>
          </h2>

          <p
            className="hidden md:block"
            style={{
              maxWidth: '360px',
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--text-muted)',
              lineHeight: 1.8,
            }}
          >
            Our numbers tell the story of uncompromising standards and a client-first philosophy that sets us apart in the world of ultra-luxury automotive.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2px',
          }}
        >
          {STATS.map((stat) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              subLabel={stat.subLabel}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
