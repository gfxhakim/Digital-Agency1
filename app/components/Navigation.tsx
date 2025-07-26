"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 bg-transparent leading-8 flex-row md:h-16 justify-between w-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-black text-white">
              DIGITAL<span className="text-blue-500">AGENCY</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-blue-500"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              size="sm"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("#contact")}
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300 hover:bg-gray-800 rounded-md"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <Button
                  size="sm"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300"
                  onClick={() => scrollToSection("#contact")}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
