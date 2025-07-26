"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackPortfolioView, trackButtonClick, trackUserInteraction } from "@/lib/analytics"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
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

  const projects = [
    {
      title: "TechFlow SaaS Platform",
      category: "UI/UX Design & Development",
      description:
        "Complete redesign of a B2B SaaS platform, resulting in 40% increase in user engagement and 25% boost in conversions.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["UI/UX", "React", "Dashboard", "SaaS"],
    },
    {
      title: "EcoVibe Brand Identity",
      category: "Branding & Marketing",
      description:
        "Sustainable fashion brand identity that captures eco-consciousness while maintaining premium appeal.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Branding", "Logo Design", "Sustainability", "Fashion"],
    },
    {
      title: "FinanceHub Mobile App",
      category: "Mobile App Design",
      description: "Intuitive financial management app with advanced analytics and seamless user experience.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Mobile", "Finance", "Analytics", "iOS/Android"],
    },
    {
      title: "ArtSpace Gallery Website",
      category: "Web Development",
      description: "Immersive digital gallery experience showcasing contemporary art with interactive features.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Web Dev", "Art", "Interactive", "Gallery"],
    },
    {
      title: "FoodieConnect Platform",
      category: "Full-Stack Development",
      description: "Social platform connecting food enthusiasts with local restaurants and culinary experiences.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Full-Stack", "Social", "Food", "Community"],
    },
    {
      title: "MindfulSpace Wellness App",
      category: "Product Design",
      description: "Meditation and wellness app designed to promote mental health and mindfulness practices.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Product Design", "Wellness", "Mental Health", "Mobile"],
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8">
              OUR <span className="text-blue-500">WORK</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Explore our portfolio of successful projects that showcase our expertise in creating impactful digital
              solutions across various industries and platforms.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => {
                  setHoveredProject(index)
                  trackUserInteraction("Portfolio Item Hover", "hover", "Portfolio")
                }}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => trackPortfolioView(project.title)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${hoveredProject === index ? "opacity-100" : "opacity-0"}`}
                  >
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button
                        size="sm"
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full text-xs md:text-sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          trackButtonClick("View Project", "Portfolio")
                        }}
                      >
                        View Project
                        <ExternalLink className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="text-xs md:text-sm text-blue-500 font-semibold mb-2">{project.category}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 md:px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => trackButtonClick("View All Projects", "Portfolio")}
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
