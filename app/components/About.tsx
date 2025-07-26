"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Users, Lightbulb, Award } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
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

  const values = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Every project begins with deep strategic thinking to ensure maximum impact.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work closely with our clients as partners in their success journey.",
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Pushing boundaries with fresh ideas and cutting-edge design solutions.",
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description: "Committed to delivering exceptional quality in every project we undertake.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8">
              ABOUT <span className="text-blue-500">US</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              We are a team of passionate creatives, strategists, and technologists dedicated to transforming businesses
              through exceptional digital experiences. Our mission is to bridge the gap between creativity and
              technology, delivering solutions that not only look stunning but drive real business results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group p-6 md:p-8 rounded-2xl hover:bg-black transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-slate-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <value.icon className="w-10 h-10 md:w-12 md:h-12 text-blue-500 group-hover:text-green-400 transition-colors duration-300 mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-sm md:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
              <div className="group text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-500 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  150+
                </div>
                <div className="text-lg md:text-xl font-semibold">Projects Completed</div>
              </div>
              <div className="group text-center">
                <div className="text-4xl md:text-5xl font-black text-green-400 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-lg md:text-xl font-semibold">Happy Clients</div>
              </div>
              <div className="group text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-500 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  5+
                </div>
                <div className="text-lg md:text-xl font-semibold">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
