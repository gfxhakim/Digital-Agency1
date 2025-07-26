// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
  }
}

// Replace with your actual Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "GA_MEASUREMENT_ID"

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_title: title || document.title,
      page_location: url,
    })
  }
}

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track user interactions
export const trackUserInteraction = (element: string, action: string, section?: string) => {
  trackEvent(action, "User Interaction", `${section ? section + " - " : ""}${element}`)
}

// Track form submissions
export const trackFormSubmission = (formName: string, success = true) => {
  trackEvent("form_submit", "Form", formName, success ? 1 : 0)
}

// Track button clicks
export const trackButtonClick = (buttonName: string, section?: string) => {
  trackEvent("click", "Button", `${section ? section + " - " : ""}${buttonName}`)
}

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent("scroll", "Engagement", `${percentage}%`, percentage)
}

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  trackEvent("time_on_page", "Engagement", "seconds", seconds)
}

// Track portfolio item views
export const trackPortfolioView = (projectName: string) => {
  trackEvent("view_item", "Portfolio", projectName)
}

// Track service interest
export const trackServiceInterest = (serviceName: string) => {
  trackEvent("service_interest", "Services", serviceName)
}

// Track testimonial interactions
export const trackTestimonialInteraction = (action: string, testimonialIndex: number) => {
  trackEvent(action, "Testimonials", `Testimonial ${testimonialIndex + 1}`)
}
