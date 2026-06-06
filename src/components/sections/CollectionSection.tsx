'use client'

import { ArrowRight } from 'lucide-react'
import { FEATURED_CARS } from '@/lib/data'
import CarCard from '@/components/ui/CarCard'
import { useEffect, useRef } from 'react'

export default function CollectionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const [featured, ...rest] = FEATURED_CARS

  return (
    <section
      id="collection"
      ref={sectionRef}
      style={{ background: 'var(--deep)', paddingTop: '100px', paddingBottom: 0 }}
    >
      {/* Header */}
      <div style={{ padding: '0 60px', marginBottom: '64px' }}>
        <div
          data-reveal
          className="flex justify-between items-end"
        >
          <div>
            <div className="section-label">Featured Collection</div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(40px, 5vw, 68px)',
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
              }}
            >
              The Art of{' '}
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Velocity</em>
            </h2>
          </div>

          <a
            href="#"
            className="hidden md:flex items-center gap-2.5 no-underline font-condensed font-semibold"
            style={{
              fontSize: '12px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              cursor: 'none',
            }}
          >
            View All 247 Vehicles
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Grid */}
      <div
        data-reveal
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '2px',
        }}
      >
        {/* Featured large card */}
        <div style={{ gridRow: 'span 2' }}>
          <CarCard car={featured} featured height="600px" />
        </div>

        {/* Smaller cards */}
        {rest.map((car) => (
          <CarCard key={car.id} car={car} height="296px" />
        ))}
      </div>

      {/* Mobile CTA */}
      <div
        className="flex md:hidden items-center justify-center"
        style={{ padding: '40px 24px' }}
      >
        <a
          href="#"
          className="btn-base btn-gold"
          style={{ fontSize: '13px', padding: '14px 36px', cursor: 'none' }}
        >
          View All Vehicles
          <ArrowRight size={14} />
        </a>
      </div>
    </section>
  )
}
