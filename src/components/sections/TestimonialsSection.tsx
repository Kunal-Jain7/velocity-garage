'use client'

import { useEffect, useRef } from 'react'
import { TESTIMONIALS } from '@/lib/data'

export default function TestimonialsSection() {
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
      id="testimonials"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: 'var(--deep)', padding: '120px 60px' }}
    >
      <div className="section-label" data-reveal>
        Client Voices
      </div>

      <h2
        data-reveal
        className="font-display"
        style={{
          fontSize: 'clamp(40px, 5vw, 68px)',
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
          marginBottom: '64px',
        }}
      >
        What Our Clients{' '}
        <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Experience</em>
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2px',
        }}
      >
        {TESTIMONIALS.map((testimonial, i) => (
          <div
            key={testimonial.id}
            data-reveal
            data-delay={String(i)}
            /* CSS class handles hover — no inline onMouseEnter needed */
            className="testimonial-card-hover"
            style={{
              padding: '56px 48px',
              border: '1px solid rgba(255,255,255,0.08)',
              borderTop: i === 0 ? '3px solid var(--gold)' : '1px solid rgba(255,255,255,0.08)',
              cursor: 'none',
            }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonial.rating }).map((_, j) => (
                <span key={j} style={{ color: 'var(--gold)', fontSize: '14px' }}>★</span>
              ))}
            </div>

            {/* Quote mark */}
            <span
              className="font-display block"
              style={{
                fontSize: '120px',
                color: 'rgba(201,168,76,0.08)',
                lineHeight: 0.5,
                marginBottom: '24px',
                fontStyle: 'italic',
              }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Quote text */}
            <p
              className="font-display"
              style={{
                fontSize: '22px',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: 'var(--text-primary)',
                marginBottom: '40px',
              }}
            >
              {testimonial.text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-5">
              <div
                className="flex items-center justify-center font-condensed font-semibold flex-shrink-0"
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, var(--gold-dim), var(--gold))',
                  color: 'var(--void)',
                  fontSize: '16px',
                }}
              >
                {testimonial.author.initials}
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className="font-condensed font-semibold"
                  style={{
                    fontSize: '14px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                  }}
                >
                  {testimonial.author.name}
                </span>
                <span
                  className="font-condensed"
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                  }}
                >
                  {testimonial.author.title} · {testimonial.author.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
