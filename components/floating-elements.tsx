"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
  blur: number
  color: string
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])
  const isMobile = useIsMobile()

  useEffect(() => {
    // Generate fewer elements on mobile for better performance
    const elementCount = isMobile ? 6 : 15
    const newElements: FloatingElement[] = []
    const colors = ["rose", "amber", "blue", "green", "purple"]

    for (let i = 0; i < elementCount; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 150 + 50,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.15 + 0.05,
        blur: Math.random() * 40 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    setElements(newElements)
  }, [isMobile])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((element) => (
        isMobile ? (
          <div
            key={element.id}
            className={`absolute rounded-full bg-${element.color}-500`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: element.size,
              height: element.size,
              opacity: element.opacity,
              filter: `blur(${element.blur}px)`,
            }}
          />
        ) : (
          <motion.div
            key={element.id}
            className={`absolute rounded-full bg-${element.color}-500`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: element.size,
              height: element.size,
              opacity: element.opacity,
              filter: `blur(${element.blur}px)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: element.duration,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: element.delay,
            }}
          />
        )
      ))}
    </div>
  )
}
