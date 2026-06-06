'use client'

import { ArrowUpRight } from 'lucide-react'
import type { Car } from '@/types'

const BADGE_STYLES: Record<string, { color: string; bg: string; border: string }> = {
  available: { color: 'var(--gold)', bg: 'rgba(201,168,76,0.05)', border: 'rgba(201,168,76,0.4)' },
  preorder: { color: 'var(--gold)', bg: 'rgba(201,168,76,0.05)', border: 'rgba(201,168,76,0.3)' },
  'last-unit': { color: 'var(--red-accent)', bg: 'rgba(192,57,43,0.05)', border: 'rgba(192,57,43,0.4)' },
  bespoke: { color: 'var(--purple-accent)', bg: 'rgba(155,89,182,0.05)', border: 'rgba(155,89,182,0.4)' },
  sold: { color: 'var(--text-muted)', bg: 'transparent', border: 'rgba(74,72,69,0.4)' },
}

interface CarCardProps {
  car: Car
  featured?: boolean
  height?: string
}

export default function CarCard({ car, featured = false, height = '296px' }: CarCardProps) {
  const badge = BADGE_STYLES[car.badge.variant] || BADGE_STYLES.available

  return (
    <div className="car-card" style={{ height }}>
      {/* Arrow button — shown on hover via CSS .car-card:hover .car-action-btn */}
      <div className="car-action-btn">
        <ArrowUpRight size={16} color="var(--text-primary)" />
      </div>

      {/* Background visual */}
      <div
        className="w-full h-full relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${car.accentColor}08 0%, #0d0d0d 50%, ${car.accentColor}04 100%)`,
        }}
      >
        {/* Abstract car silhouette SVG per brand */}
        <CarSilhouette car={car} featured={featured} />

        {featured && (
          <div
            className="absolute font-condensed"
            style={{
              top: '30px',
              right: '30px',
              fontSize: '11px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: `${car.accentColor}99`,
              border: `1px solid ${car.accentColor}33`,
              padding: '6px 16px',
            }}
          >
            ULTRA EXCLUSIVE
          </div>
        )}
      </div>

      {/* Content overlay */}
      <div
        className="absolute z-20"
        style={{
          bottom: 0,
          left: 0,
          right: 0,
          padding: featured ? '48px' : '32px',
        }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 font-condensed mb-4"
          style={{
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: badge.color,
            border: `1px solid ${badge.border}`,
            padding: '5px 14px',
            background: badge.bg,
          }}
        >
          <span
            className="rounded-full"
            style={{ width: '6px', height: '6px', background: badge.color }}
          />
          {car.badge.text}
        </div>

        {/* Car name */}
        <span
          className="font-display block"
          style={{
            fontSize: featured ? '44px' : '28px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
          }}
        >
          {car.name}
        </span>

        {/* Specs */}
        <span
          className="font-condensed block mt-2"
          style={{ fontSize: '13px', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}
        >
          {car.specs.power} · {car.specs.acceleration} · {car.specs.engine}
        </span>

        {/* Price */}
        <div
          className="font-condensed flex items-center gap-2 mt-5"
          style={{ fontSize: '14px', fontWeight: 600, color: car.accentColor, letterSpacing: '0.1em' }}
        >
          <span
            className="flex-1 h-px"
            style={{
              background: `linear-gradient(90deg, rgba(255,255,255,0.08), transparent)`,
              maxWidth: '40px',
            }}
          />
          {car.priceDisplay}
        </div>
      </div>
    </div>
  )
}

function CarSilhouette({ car, featured }: { car: Car; featured: boolean }) {
  const color = car.accentColor

  if (featured) {
    return (
      <div className="absolute inset-0 flex items-center justify-center" style={{ padding: '40px' }}>
        <svg viewBox="0 0 500 200" style={{ width: '100%', opacity: 0.9 }}>
          <defs>
            <linearGradient id={`feat-${car.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.4" />
              <stop offset="100%" stopColor={color} stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path d="M60 140 Q80 155 140 162 L360 162 Q420 155 440 140 L430 130 L70 130 Z" fill="#1a1a1a" />
          <path d="M80 130 Q110 95 170 80 Q220 68 250 65 L310 65 Q350 70 380 88 Q410 105 425 128 L75 128 Z" fill="#151515" />
          <path d="M175 80 Q210 50 250 42 L310 42 Q340 52 340 80 Z" fill="#0f0f0f" stroke={color} strokeWidth="0.8" strokeOpacity="0.5" />
          <path d="M182 80 Q215 55 250 48 L270 45 L270 80 Z" fill={`url(#feat-${car.id})`} stroke={color} strokeWidth="0.5" strokeOpacity="0.6" />
          <path d="M340 80 L340 48 L310 45 L290 45 L290 80 Z" fill={`url(#feat-${car.id})`} stroke={color} strokeWidth="0.5" strokeOpacity="0.6" />
          <circle cx="370" cy="172" r="28" fill="#0a0a0a" stroke="#252525" strokeWidth="1.5" />
          <circle cx="370" cy="172" r="18" fill="none" stroke="#1e1e1e" strokeWidth="1" />
          <circle cx="370" cy="172" r="10" fill="#0d0d0d" stroke={color} strokeWidth="0.8" strokeOpacity="0.7" />
          <line x1="370" y1="154" x2="370" y2="190" stroke="#2a2a2a" strokeWidth="1.2" />
          <line x1="352" y1="172" x2="388" y2="172" stroke="#2a2a2a" strokeWidth="1.2" />
          <line x1="358" y1="160" x2="382" y2="184" stroke="#2a2a2a" strokeWidth="1.2" />
          <line x1="382" y1="160" x2="358" y2="184" stroke="#2a2a2a" strokeWidth="1.2" />
          <circle cx="130" cy="172" r="28" fill="#0a0a0a" stroke="#252525" strokeWidth="1.5" />
          <circle cx="130" cy="172" r="18" fill="none" stroke="#1e1e1e" strokeWidth="1" />
          <circle cx="130" cy="172" r="10" fill="#0d0d0d" stroke={color} strokeWidth="0.8" strokeOpacity="0.7" />
          <line x1="130" y1="154" x2="130" y2="190" stroke="#2a2a2a" strokeWidth="1.2" />
          <line x1="112" y1="172" x2="148" y2="172" stroke="#2a2a2a" strokeWidth="1.2" />
          <line x1="118" y1="160" x2="142" y2="184" stroke="#2a2a2a" strokeWidth="1.2" />
          <line x1="142" y1="160" x2="118" y2="184" stroke="#2a2a2a" strokeWidth="1.2" />
          <path d="M180 100 Q250 95 330 102" stroke={color} strokeWidth="0.8" fill="none" opacity="0.4" />
          <path d="M410 128 Q435 122 445 130" stroke={color} strokeWidth="1.5" fill="none" opacity="0.8" />
          <path d="M90 128 Q65 120 55 130" stroke="#8A2020" strokeWidth="1.5" fill="none" opacity="0.7" />
          <ellipse cx="250" cy="188" rx="200" ry="10" fill={color} fillOpacity="0.04" />
        </svg>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 300 140" style={{ width: '90%', opacity: 0.85 }}>
        <defs>
          <linearGradient id={`g-${car.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={`${color}22`} />
            <stop offset="100%" stopColor="#0d0d0d" />
          </linearGradient>
        </defs>
        <path d="M35 88 Q55 100 108 105 L198 105 Q248 100 265 88 L255 80 L45 80 Z" fill="#0f0f0f" />
        <path d="M45 80 Q68 54 112 42 Q148 33 155 31 L165 31 Q196 36 215 52 Q240 66 255 80 Z" fill={`url(#g-${car.id})`} />
        <path d="M112 42 Q140 22 155 20 L165 20 Q193 30 193 42 Z" fill="#0a0810" stroke={color} strokeWidth="0.8" strokeOpacity="0.5" />
        <path d="M115 42 Q141 25 155 22 L163 20 L163 42 Z" fill={color} fillOpacity="0.08" />
        <path d="M193 42 L193 22 L165 20 L178 20 L178 42 Z" fill={color} fillOpacity="0.08" />
        <circle cx="215" cy="112" r="22" fill="#0a0a0a" stroke="#1e1e1e" strokeWidth="1.2" />
        <circle cx="215" cy="112" r="13" fill="none" stroke="#181818" strokeWidth="1" />
        <circle cx="215" cy="112" r="7" fill="#0d0d0d" stroke={color} strokeWidth="0.8" strokeOpacity="0.6" />
        <line x1="215" y1="98" x2="215" y2="126" stroke="#252525" strokeWidth="1.2" />
        <line x1="201" y1="112" x2="229" y2="112" stroke="#252525" strokeWidth="1.2" />
        <line x1="205" y1="102" x2="225" y2="122" stroke="#252525" strokeWidth="1.2" />
        <line x1="225" y1="102" x2="205" y2="122" stroke="#252525" strokeWidth="1.2" />
        <circle cx="80" cy="112" r="22" fill="#0a0a0a" stroke="#1e1e1e" strokeWidth="1.2" />
        <circle cx="80" cy="112" r="13" fill="none" stroke="#181818" strokeWidth="1" />
        <circle cx="80" cy="112" r="7" fill="#0d0d0d" stroke={color} strokeWidth="0.8" strokeOpacity="0.6" />
        <line x1="80" y1="98" x2="80" y2="126" stroke="#252525" strokeWidth="1.2" />
        <line x1="66" y1="112" x2="94" y2="112" stroke="#252525" strokeWidth="1.2" />
        <line x1="70" y1="102" x2="90" y2="122" stroke="#252525" strokeWidth="1.2" />
        <line x1="90" y1="102" x2="70" y2="122" stroke="#252525" strokeWidth="1.2" />
        <path d="M238 82 Q258 78 265 88" stroke={color} strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M160 56 Q188 52 212 59" stroke={color} strokeWidth="0.8" fill="none" opacity="0.3" />
        <ellipse cx="148" cy="125" rx="110" ry="7" fill={color} fillOpacity="0.03" />
      </svg>
    </div>
  )
}
