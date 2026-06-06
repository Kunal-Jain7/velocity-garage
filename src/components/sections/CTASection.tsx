'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Phone } from 'lucide-react'

const LOCATIONS = [
  { city: 'Milano Showroom', address: 'Via Montenapoleone 12' },
  { city: 'Geneva Atelier', address: 'Rue du Rhône 88' },
  { city: 'Dubai Gallery', address: 'Dubai International Financial Centre' },
]

export default function CTASection() {
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
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden text-center"
      style={{ background: 'var(--void)', padding: '160px 60px' }}
    >
      {/* Concentric ring decorations */}
      {[700, 1000, 1300].map((size, i) => (
        <div
          key={size}
          className="absolute pointer-events-none"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            border: `1px solid rgba(201,168,76,${0.06 - i * 0.018})`,
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          aria-hidden="true"
        />
      ))}

      <div className="relative z-10">
        {/* Label */}
        <span
          data-reveal
          className="font-condensed block mb-7"
          style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}
        >
          Begin Your Journey
        </span>

        {/* Title */}
        <h2
          data-reveal
          data-delay="1"
          className="font-display"
          style={{
            fontSize: 'clamp(48px, 7vw, 96px)',
            fontWeight: 300,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            marginBottom: '24px',
          }}
        >
          Your Dream
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Awaits</em>
        </h2>

        {/* Subheading */}
        <p
          data-reveal
          data-delay="2"
          style={{
            fontSize: '16px',
            fontWeight: 300,
            color: 'var(--text-secondary)',
            marginBottom: '56px',
            maxWidth: '480px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.8,
          }}
        >
          Whether you seek a specific vehicle or wish to explore our curated collection, our specialists are available for a private consultation.
        </p>

        {/* Actions */}
        <div
          data-reveal
          data-delay="3"
          className="flex items-center justify-center gap-6 flex-wrap"
        >
          <button
            className="btn-base btn-gold"
            style={{ fontSize: '14px', padding: '18px 52px', cursor: 'none' }}
          >
            Private Consultation
            <ArrowRight size={16} />
          </button>
          <a
            href="tel:+390287450193"
            className="btn-base btn-outline flex items-center gap-3 no-underline"
            style={{ fontSize: '14px', padding: '17px 48px', cursor: 'none' }}
          >
            <Phone size={16} />
            +39 02 8745 0193
          </a>
        </div>

        {/* Location strip */}
        <div
          data-reveal
          data-delay="4"
          className="flex items-center justify-center flex-wrap gap-0 mt-20"
        >
          {LOCATIONS.map((loc, i) => (
            <div key={loc.city} className="flex items-center">
              <div className="text-center" style={{ padding: '0 40px' }}>
                <div
                  className="font-display"
                  style={{
                    fontSize: '13px',
                    fontWeight: 400,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {loc.city}
                </div>
                <div
                  className="font-condensed mt-1"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    opacity: 0.6,
                  }}
                >
                  {loc.address}
                </div>
              </div>
              {i < LOCATIONS.length - 1 && (
                <div
                  style={{
                    width: '1px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.08)',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
