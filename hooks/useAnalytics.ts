"use client"

import { useEffect, useRef } from "react"
import { trackScrollDepth, trackTimeOnPage } from "@/lib/analytics"

export const useAnalytics = () => {
  const startTimeRef = useRef<number>(Date.now())
  const scrollDepthRef = useRef<number>(0)

  useEffect(() => {
    // Track time on page
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000)
      trackTimeOnPage(timeSpent)
    }

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      // Track scroll milestones (25%, 50%, 75%, 100%)
      const milestones = [25, 50, 75, 100]
      const currentMilestone = milestones.find(
        (milestone) => scrollPercent >= milestone && scrollDepthRef.current < milestone,
      )

      if (currentMilestone) {
        scrollDepthRef.current = currentMilestone
        trackScrollDepth(currentMilestone)
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return {
    trackTimeSpent: () => {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000)
      trackTimeOnPage(timeSpent)
    },
  }
}
