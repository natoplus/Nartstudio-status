import { useEffect, useRef } from 'react'

export default function ParallaxAtmosphere() {
  const scene = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const element = scene.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const update = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => element.querySelectorAll<HTMLElement>('[data-depth]').forEach(layer => {
        const offset = Math.max(-105, Math.min(105, window.scrollY * Number(layer.dataset.depth)))
        layer.style.transform = `translate3d(0, ${offset}px, 0)`
      }))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => { window.removeEventListener('scroll', update); window.cancelAnimationFrame(frame) }
  }, [])
  return <div ref={scene} className="parallax-atmosphere" aria-hidden="true"><span data-depth="-0.12" /><span data-depth="0.08" /><span data-depth="-0.2" /></div>
}
