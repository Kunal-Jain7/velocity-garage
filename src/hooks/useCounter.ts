'use client'

import { useState, useEffect, useRef } from 'react'

export function useCounter(target: number, duration = 2000, decimals = 0) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = Math.min((now - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - elapsed, 3)
      setCount(parseFloat((target * ease).toFixed(decimals)))
      if (elapsed < 1) requestAnimationFrame(animate)
      else setCount(target)
    }

    requestAnimationFrame(animate)
  }, [started, target, duration, decimals])

  return { count, ref }
}
