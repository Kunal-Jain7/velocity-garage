'use client'

export default function ExperienceStrip() {
  const items = [
    'Curated Excellence',
    'Bespoke Configuration',
    'White-Glove Delivery',
    'Global Concierge',
    'Track Experience',
    'Heritage Collection',
  ]

  return (
    <div
      className="overflow-hidden relative"
      style={{
        background: 'var(--gold)',
        padding: '28px 0',
      }}
    >
      {/* Duplicate for seamless loop */}
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-condensed font-semibold flex items-center gap-5"
            style={{
              fontSize: '13px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--void)',
              flexShrink: 0,
            }}
          >
            {item}
            <span style={{ fontSize: '8px' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
