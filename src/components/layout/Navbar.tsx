'use client'

import { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500`}
        style={{
          background: scrolled ? 'rgba(5,5,5,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          padding: scrolled ? '16px 60px' : '24px 60px',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
          className="flex items-center gap-2.5 no-underline"
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

        {/* Desktop nav — CSS class handles all hover */}
        <ul className="hidden md:flex gap-10 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="nav-link font-condensed"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo('#contact')}
          className="hidden md:block btn-base btn-gold font-condensed"
          style={{ fontSize: '12px', padding: '10px 24px', cursor: 'none', letterSpacing: '0.2em' }}
        >
          Configure Now
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none"
          style={{ cursor: 'none' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-px transition-all"
            style={{
              background: 'var(--text-primary)',
              transform: menuOpen ? 'rotate(45deg) translateY(4px)' : 'none',
            }}
          />
          <span
            className="block w-4 h-px transition-all"
            style={{ background: 'var(--gold)', opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-px transition-all"
            style={{
              background: 'var(--text-primary)',
              transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center"
          style={{ background: 'rgba(5,5,5,0.97)', backdropFilter: 'blur(24px)' }}
        >
          <ul className="flex flex-col items-center gap-8 list-none p-0 m-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="font-display bg-transparent border-none"
                  style={{
                    fontSize: '40px',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: 'var(--text-primary)',
                    cursor: 'none',
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-base btn-gold font-condensed mt-12"
            style={{ fontSize: '13px', padding: '16px 40px', cursor: 'none' }}
          >
            Configure Now
          </button>
        </div>
      )}
    </>
  )
}
