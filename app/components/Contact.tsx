"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, ArrowUp } from "lucide-react"
import { trackFormSubmission, trackButtonClick, trackUserInteraction } from "@/lib/analytics"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Handle form submission
      console.log("Form submitted:", formData)

      // Track successful form submission
      trackFormSubmission("Contact Form", true)

      // Track form completion with user details
      trackUserInteraction("Contact Form Completed", "submit", "Contact")

      // Reset form or show success message
      setFormData({ name: "", email: "", company: "", message: "" })
    } catch (error) {
      // Track failed form submission
      trackFormSubmission("Contact Form", false)
      console.error("Form submission error:", error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Main Contact Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8">
                LET'S <span className="text-blue-500">TALK</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
                Ready to transform your digital presence? Let's discuss your project and create something extraordinary
                together. We're here to bring your vision to life.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center space-x-3 md:space-x-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-green-400 transition-colors duration-300 flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm md:text-base">Email Us</div>
                    <div className="text-gray-300 text-sm md:text-base">hello@digitalagency.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 md:space-x-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-green-400 transition-colors duration-300 flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm md:text-base">Call Us</div>
                    <div className="text-gray-300 text-sm md:text-base">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 md:space-x-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-green-400 transition-colors duration-300 flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm md:text-base">Visit Us</div>
                    <div className="text-gray-300 text-sm md:text-base">123 Creative Street, Design City, DC 12345</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Start Your Project</h3>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => trackUserInteraction("Name Field", "focus", "Contact Form")}
                      className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => trackUserInteraction("Email Field", "focus", "Contact Form")}
                      className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <Input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => trackUserInteraction("Company Field", "focus", "Contact Form")}
                  className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                />

                <Textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => trackUserInteraction("Message Field", "focus", "Contact Form")}
                  rows={5}
                  className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                  required
                />

                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">© 2024 Digital Agency by Abdelhakim. All rights reserved.</div>

            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <Button
                onClick={() => {
                  scrollToTop()
                  trackButtonClick("Scroll to Top", "Footer")
                }}
                size="sm"
                className="bg-blue-500 hover:bg-blue-600 rounded-full p-2"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
