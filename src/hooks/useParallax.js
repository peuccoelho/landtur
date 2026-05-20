import { useReducedMotion, useScroll, useTransform } from 'framer-motion'

export function useParallax(distance = 140) {
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  return useTransform(scrollY, [0, 600], [0, shouldReduceMotion ? 0 : distance])
}
