'use client'

import { useEffect, useRef } from 'react'
import { BRANDS } from '@/lib/data'

export default function BrandsSection() {
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
      id="brands"
      ref={sectionRef}
      style={{ background: 'var(--surface)', padding: '120px 60px' }}
    >
      <div className="section-label" data-reveal>
        Our Partners
      </div>

      <div
        data-reveal
        className="flex flex-col md:flex-row md:justify-between md:items-end gap-8"
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
          The World&apos;s Finest
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Automotive Marques</em>
        </h2>

        <p
          className="hidden md:block"
          style={{
            maxWidth: '320px',
            fontSize: '15px',
            fontWeight: 300,
            color: 'var(--text-muted)',
            lineHeight: 1.8,
          }}
        >
          Authorized dealer and concierge partner for the most exclusive manufacturers on earth.
        </p>
      </div>

      <div
        data-reveal
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          marginTop: '64px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {BRANDS.map((brand) => (
          <BrandItem key={brand.id} name={brand.name} />
        ))}
      </div>
    </section>
  )
}

function BrandItem({ name }: { name: string }) {
  return (
    <div
      className="brand-item-cell"
      style={{
        borderRight: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '40px 24px',
        cursor: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.3s',
      }}
    >
      <span
        className="brand-item-text font-display"
        style={{
          fontSize: '20px',
          fontWeight: 600,
          color: 'var(--text-muted)',
          letterSpacing: '0.05em',
          transition: 'color 0.3s',
          textAlign: 'center',
        }}
      >
        {name}
      </span>
    </div>
  )
}
