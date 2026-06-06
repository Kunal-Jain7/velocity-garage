'use client'

const FOOTER_LINKS: Record<string, string[]> = {
  Collection: ['New Arrivals', 'Hypercars', 'Grand Tourers', 'Heritage & Classic', 'Track Editions'],
  Services: ['Bespoke Configuration', 'Private Viewings', 'Track Experiences', 'Global Delivery', 'Concierge Program'],
  About: ['Our Story', 'Our Team', 'Showrooms', 'Press', 'Careers'],
}

export default function Footer() {
  return (
    <>
      <footer
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '60px',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '60px',
        }}
      >
        {/* Brand column */}
        <div>
          <a
            href="#hero"
            className="inline-flex items-center gap-2.5 no-underline mb-5"
            style={{ cursor: 'none' }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                border: '1px solid var(--gold)',
                transform: 'rotate(45deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <div style={{ width: '14px', height: '14px', background: 'var(--gold)' }} />
            </div>
            <span
              className="font-display font-bold"
              style={{ fontSize: '22px', letterSpacing: '0.12em' }}
            >
              Velocity<span style={{ color: 'var(--gold)' }}>Garage</span>
            </span>
          </a>

          <p
            style={{
              fontSize: '14px',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              maxWidth: '280px',
              marginTop: '16px',
            }}
          >
            The world&apos;s most exclusive automotive concierge. Curating extraordinary machines for extraordinary people since 2009.
          </p>

          {/* Social icons — hover via CSS class */}
          <div className="flex gap-4 mt-8">
            {['IG', 'TW', 'YT', 'LI'].map((s) => (
              <a key={s} href="#" className="footer-social font-condensed">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title}>
            <div
              className="font-condensed font-semibold mb-6"
              style={{
                fontSize: '11px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
              }}
            >
              {title}
            </div>
            <ul className="list-none flex flex-col gap-3 p-0 m-0">
              {links.map((link) => (
                <li key={link}>
                  {/* CSS class handles hover — no JS handler needed */}
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>

      {/* Bottom bar */}
      <div
        style={{
          background: 'var(--void)',
          padding: '20px 60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <span
          className="font-condensed"
          style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--text-muted)' }}
        >
          © 2026 Velocity Garage S.r.l. — All Rights Reserved
        </span>
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Cookie Policy'].map((item) => (
            <a key={item} href="#" className="footer-policy font-condensed">
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
