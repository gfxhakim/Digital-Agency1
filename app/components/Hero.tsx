"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Palette, Monitor, Smartphone, Globe, TrendingUp, Zap } from "lucide-react"
import { trackButtonClick } from "@/lib/analytics"
import { useAnalytics } from "@/hooks/useAnalytics"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  useAnalytics() // Add this line

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background elements with category icons */}
      <div className="absolute inset-0">
        {/* Original gradient blurs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating animated icons for different categories */}
        <div className="absolute top-20 left-10 animate-bounce delay-300">
          <Palette className="w-8 h-8 text-blue-400/60" />
        </div>

        <div className="absolute top-32 right-20 animate-pulse delay-700">
          <Monitor className="w-10 h-10 text-green-400/50" />
        </div>

        <div className="absolute bottom-40 left-20 animate-bounce delay-1000">
          <Smartphone className="w-6 h-6 text-blue-300/70" />
        </div>

        <div className="absolute top-40 left-1/3 animate-pulse delay-500">
          <Globe className="w-7 h-7 text-green-300/60" />
        </div>

        <div className="absolute bottom-32 right-32 animate-bounce delay-1200">
          <TrendingUp className="w-9 h-9 text-blue-500/50" />
        </div>

        <div className="absolute top-60 right-10 animate-pulse delay-900">
          <Zap className="w-8 h-8 text-green-500/60" />
        </div>

        {/* Additional floating elements for depth */}
        <div className="absolute top-1/3 right-1/3 animate-spin" style={{ animationDuration: "20s" }}>
          <div className="w-2 h-2 bg-blue-400/30 rounded-full"></div>
        </div>

        <div className="absolute bottom-1/3 left-1/2 animate-spin" style={{ animationDuration: "15s" }}>
          <div className="w-3 h-3 bg-green-400/40 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center mb-0">
            <Sparkles className="w-8 h-8 text-blue-500 mr-3 animate-spin" />
            <span className="text-blue-500 font-medium tracking-wider uppercase text-sm">Creative Digital Agency</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-none py-0 md:mb-0 xl:text-8xl tracking-wide">
            WE CREATE
            <span className="block bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
              DIGITAL
            </span>
            <span className="block">MAGIC</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 font-semibold font-sans tracking-wide">
            Transforming brands through innovative design, strategic thinking, and cutting-edge technology. We craft
            digital experiences that captivate, convert, and inspire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              onClick={() => trackButtonClick("Start Your Project", "Hero")}
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
              onClick={() => trackButtonClick("View Our Work", "Hero")}
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2"></div>
    </section>
  )
}
