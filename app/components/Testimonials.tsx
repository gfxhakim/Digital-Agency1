"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackTestimonialInteraction, trackUserInteraction } from "@/lib/analytics"

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechFlow Solutions",
      company: "TechFlow",
      content:
        "Working with this team was transformative for our business. They didn't just redesign our platform; they reimagined our entire user experience. The results speak for themselves - 40% increase in engagement and 25% boost in conversions.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Chen",
      position: "Founder, EcoVibe Fashion",
      company: "EcoVibe",
      content:
        "The brand identity they created perfectly captures our mission of sustainable fashion. Every element, from the logo to the color palette, tells our story of environmental consciousness while maintaining premium appeal.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager, FinanceHub",
      company: "FinanceHub",
      content:
        "Their mobile app design expertise is unmatched. They created an intuitive financial management experience that our users love. The attention to detail and user-centered approach made all the difference.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "David Thompson",
      position: "Director, ArtSpace Gallery",
      company: "ArtSpace",
      content:
        "They transformed our vision of a digital gallery into reality. The website is not just beautiful; it's an immersive experience that showcases art in ways we never thought possible online.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => {
      const next = (prev + 1) % testimonials.length
      trackTestimonialInteraction("next", next)
      return next
    })
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => {
      const next = (prev - 1 + testimonials.length) % testimonials.length
      trackTestimonialInteraction("previous", next)
      return next
    })
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8">
              CLIENT <span className="text-[rgba(0,108,243,1)]">LOVE</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Don't just take our word for it. Here's what our clients say about working with us and the impact we've
              made on their businesses.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
                    <div className="bg-gray-900 rounded-2xl p-6 md:p-8 lg:p-12 text-center relative">
                      <Quote className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-4 md:mb-6 text-[rgba(0,108,243,1)]" />

                      <div className="flex justify-center mb-4 md:mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 md:w-6 md:h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed italic">
                        "{testimonial.content}"
                      </blockquote>

                      <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                        />
                        <div className="text-center sm:text-left">
                          <div className="font-bold text-base md:text-lg text-white">{testimonial.name}</div>
                          <div className="font-medium text-sm md:text-base text-[rgba(0,108,243,1)]">{testimonial.position}</div>
                          <div className="text-gray-400 text-xs md:text-sm">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  prevTestimonial()
                  trackUserInteraction("Previous Testimonial", "click", "Testimonials")
                }}
                className="border-gray-600 text-white hover:bg-gray-800 rounded-full p-3 bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index)
                      trackTestimonialInteraction("dot_navigation", index)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? "bg-green-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  nextTestimonial()
                  trackUserInteraction("Next Testimonial", "click", "Testimonials")
                }}
                className="border-gray-600 text-white hover:bg-gray-800 rounded-full p-3 bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
