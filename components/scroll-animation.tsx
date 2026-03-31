"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  animation?: "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale" | "fadeIn"
  delay?: number
  duration?: number
  threshold?: number
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  const getInitialStyles = () => {
    switch (animation) {
      case "fadeUp":
        return { opacity: 0, transform: "translateY(40px)" }
      case "fadeDown":
        return { opacity: 0, transform: "translateY(-40px)" }
      case "fadeLeft":
        return { opacity: 0, transform: "translateX(-40px)" }
      case "fadeRight":
        return { opacity: 0, transform: "translateX(40px)" }
      case "scale":
        return { opacity: 0, transform: "scale(0.95)" }
      case "fadeIn":
        return { opacity: 0 }
      default:
        return { opacity: 0, transform: "translateY(40px)" }
    }
  }

  const getAnimatedStyles = () => {
    return {
      opacity: 1,
      transform: "translateY(0) translateX(0) scale(1)",
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(isVisible ? getAnimatedStyles() : getInitialStyles()),
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

export function StaggerChildren({
  children,
  className = "",
  staggerDelay = 0.1,
  animation = "fadeUp",
}: {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
  animation?: "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale" | "fadeIn"
}) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollAnimation key={index} animation={animation} delay={index * staggerDelay}>
          {child}
        </ScrollAnimation>
      ))}
    </div>
  )
}
