"use client"

import { useState, useEffect } from "react"
import { Sparkles } from "lucide-react"

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsVisible(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center mb-8">
          <Sparkles className="w-12 h-12 text-blue-500 animate-spin mr-4" />
          <h1 className="text-4xl md:text-6xl font-black text-white">
            DIGITAL<span className="text-blue-500">AGENCY</span>
          </h1>
        </div>

        <div className="w-64 md:w-80 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto mb-4">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-green-400 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-gray-400 text-sm md:text-base">Loading amazing experiences...</p>
      </div>
    </div>
  )
}
