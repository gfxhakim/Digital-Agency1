"use client"

import { useEffect, useRef, useState } from "react"
import { Palette, Monitor, TrendingUp, Smartphone, Globe, Zap } from "lucide-react"
import { trackServiceInterest, trackUserInteraction } from "@/lib/analytics"

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description:
        "Complete brand development from logo design to comprehensive brand guidelines that tell your unique story.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
    },
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive, engaging, and conversion-focused digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that drive growth, engagement, and measurable business results.",
      features: ["SEO Strategy", "Content Marketing", "Social Media", "Analytics"],
    },
    {
      icon: Smartphone,
      title: "Mobile Design",
      description: "Native and responsive mobile experiences optimized for performance and user engagement.",
      features: ["App Design", "Responsive Web", "Mobile UX", "Cross-Platform"],
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["Frontend Development", "Backend Systems", "CMS Integration", "E-commerce"],
    },
    {
      icon: Zap,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation strategies that align technology with business objectives.",
      features: ["Digital Audit", "Technology Roadmap", "Process Optimization", "Innovation Consulting"],
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8">
              OUR <span className="text-[rgba(0,108,243,1)]">SERVICES</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              From concept to execution, we offer comprehensive digital solutions that drive growth, enhance user
              experience, and establish strong brand presence in the digital landscape.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group p-6 md:p-8 bg-gray-900 rounded-2xl hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-green-400/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-800 hover:border-blue-500/50 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => trackServiceInterest(service.title)}
                onMouseEnter={() => trackUserInteraction("Service Card Hover", "hover", "Services")}
              >
                <service.icon className="w-10 h-10 md:w-12 md:h-12 text-blue-500 group-hover:text-green-400 transition-colors duration-300 mb-4 md:mb-6" />

                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-green-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-green-400 transition-colors duration-300 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
