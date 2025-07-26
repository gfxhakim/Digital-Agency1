"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, MousePointer, Clock, TrendingUp, Eye } from "lucide-react"

interface AnalyticsData {
  pageViews: number
  uniqueVisitors: number
  avgTimeOnSite: string
  bounceRate: string
  topPages: Array<{ page: string; views: number }>
  userInteractions: Array<{ action: string; count: number }>
}

export default function AnalyticsDashboard() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching analytics data
    // In a real implementation, you would fetch this from Google Analytics API
    const fetchAnalyticsData = async () => {
      setIsLoading(true)

      // Simulated data - replace with actual Google Analytics API calls
      const mockData: AnalyticsData = {
        pageViews: 12543,
        uniqueVisitors: 8921,
        avgTimeOnSite: "3:42",
        bounceRate: "32.5%",
        topPages: [
          { page: "/", views: 5432 },
          { page: "/services", views: 2341 },
          { page: "/portfolio", views: 1876 },
          { page: "/about", views: 1234 },
          { page: "/contact", views: 987 },
        ],
        userInteractions: [
          { action: "CTA Button Clicks", count: 1543 },
          { action: "Portfolio Views", count: 876 },
          { action: "Service Interest", count: 654 },
          { action: "Form Submissions", count: 234 },
          { action: "Testimonial Navigation", count: 432 },
        ],
      }

      // Simulate API delay
      setTimeout(() => {
        setAnalyticsData(mockData)
        setIsLoading(false)
      }, 1000)
    }

    fetchAnalyticsData()
  }, [])

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!analyticsData) return null

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">Track user behavior and website performance</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Page Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.pageViews.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.uniqueVisitors.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Time on Site</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.avgTimeOnSite}</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.bounceRate}</div>
              <p className="text-xs text-muted-foreground">-5% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Pages */}
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
              <CardDescription>Most visited pages on your website</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">{page.page}</span>
                    </div>
                    <span className="text-sm text-gray-600">{page.views.toLocaleString()} views</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* User Interactions */}
          <Card>
            <CardHeader>
              <CardTitle>User Interactions</CardTitle>
              <CardDescription>Most common user actions on your site</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.userInteractions.map((interaction, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MousePointer className="w-4 h-4 text-green-500" />
                      <span className="font-medium">{interaction.action}</span>
                    </div>
                    <span className="text-sm text-gray-600">{interaction.count.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Export Options */}
        <div className="mt-8 flex justify-end space-x-4">
          <Button variant="outline">
            <BarChart3 className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button>View Full Analytics</Button>
        </div>
      </div>
    </div>
  )
}
