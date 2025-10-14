"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@triplone/ui/components/card";
import { Badge } from "@triplone/ui/components/badge";
import {
  Calendar,
  MapPin,
  DollarSign,
  Users,
  TrendingUp,
  Star,
} from "lucide-react";

export default function AnalyticsPage() {
  const stats = [
    {
      title: "Total Bookings",
      value: "156",
      change: "+13% This month",
      icon: Calendar,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "Active Tours",
      value: "24",
      change: "+3 This month",
      icon: MapPin,
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      title: "Total Revenue",
      value: "৳4,85,000",
      change: "+22% This month",
      icon: DollarSign,
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-500",
    },
    {
      title: "Active Customer",
      value: "89",
      change: "+8% This month",
      icon: Users,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
    },
  ];

  const tourCategories = [
    { name: "Beach Tour", percentage: 35, color: "bg-blue-500" },
    { name: "Pilgrimage", percentage: 25, color: "bg-gray-400" },
    { name: "Religious", percentage: 9, color: "bg-gray-300" },
    { name: "Adventure", percentage: 16, color: "bg-gray-200" },
    { name: "Cultural", percentage: 20, color: "bg-gray-100" },
    { name: "Wildlife", percentage: 28, color: "bg-gray-200" },
  ];

  const weeklyData = [
    { day: "Mon", bookings: 21 },
    { day: "Tue", bookings: 12 },
    { day: "Wed", bookings: 8 },
    { day: "Thu", bookings: 10 },
    { day: "Fri", bookings: 19 },
    { day: "Sat", bookings: 5 },
    { day: "Sun", bookings: 19 },
  ];

  const topTours = [
    { rank: "#1", name: "Cox's Bazar", bookings: 48, color: "bg-yellow-100" },
    {
      rank: "#2",
      name: "Sundarbans Wildlife",
      bookings: 38,
      color: "bg-purple-100",
    },
    { rank: "#3", name: "Sylhet Tea", bookings: 35, color: "bg-green-100" },
    { rank: "#4", name: "Bandarban Hill", bookings: 35, color: "bg-blue-100" },
    {
      rank: "#5",
      name: "Rangamati Lake",
      bookings: 18,
      color: "bg-orange-100",
    },
  ];

  const maxBookings = Math.max(...weeklyData.map((d) => d.bookings));

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Analytics & insights</h1>
        <p className="text-muted-foreground mt-1">
          Track your agency's performance with detailed analytics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">{stat.title}</p>
                  <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                  <p className="mt-2 flex items-center gap-1 text-xs text-green-600">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
                  </p>
                </div>
                <div className={`${stat.bgColor} rounded-lg p-3`}>
                  <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Revenue Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
            <CardDescription>
              Monthly revenue and booking performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative flex h-[300px] items-end justify-center gap-8">
              {/* Simple line chart visualization */}
              <div className="relative h-full flex-1">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 600 300"
                  preserveAspectRatio="none"
                >
                  {/* Grid lines */}
                  <line
                    x1="0"
                    y1="60"
                    x2="600"
                    y2="60"
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="120"
                    x2="600"
                    y2="120"
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="180"
                    x2="600"
                    y2="180"
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="240"
                    x2="600"
                    y2="240"
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />

                  {/* Area under curve */}
                  <defs>
                    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                      <stop
                        offset="100%"
                        stopColor="#3b82f6"
                        stopOpacity="0.05"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 0,150 L 100,120 L 200,140 L 300,80 L 400,90 L 500,100 L 600,85 L 600,300 L 0,300 Z"
                    fill="url(#gradient)"
                  />

                  {/* Line */}
                  <path
                    d="M 0,150 L 100,120 L 200,140 L 300,80 L 400,90 L 500,100 L 600,85"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                  />

                  {/* Data point at Feb */}
                  <circle cx="100" cy="120" r="5" fill="#3b82f6" />

                  {/* Tooltip indicator */}
                  <line
                    x1="100"
                    y1="0"
                    x2="100"
                    y2="300"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                  />
                </svg>

                {/* Tooltip */}
                <div className="absolute left-20 top-16 rounded-lg border bg-white px-3 py-2 text-sm shadow-md">
                  Revenue: 445000
                </div>

                {/* Month labels */}
                <div className="text-muted-foreground mt-2 flex justify-between text-xs">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tour Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Tour Categories</CardTitle>
            <CardDescription>
              Distribution of bookings by tour type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[300px] items-center justify-center">
              {/* Pie chart representation */}
              <div className="relative h-64 w-64">
                <svg viewBox="0 0 200 200" className="h-full w-full">
                  {/* Beach Tour - 35% (blue) */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="60"
                    strokeDasharray="175.93 502.65"
                    transform="rotate(-90 100 100)"
                  />
                  {/* Pilgrimage - 25% (gray) */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#9ca3af"
                    strokeWidth="60"
                    strokeDasharray="125.66 502.65"
                    strokeDashoffset="-175.93"
                    transform="rotate(-90 100 100)"
                  />
                  {/* Cultural - 20% (light gray) */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#d1d5db"
                    strokeWidth="60"
                    strokeDasharray="100.53 502.65"
                    strokeDashoffset="-301.59"
                    transform="rotate(-90 100 100)"
                  />
                  {/* Adventure - 16% (lighter gray) */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="60"
                    strokeDasharray="80.42 502.65"
                    strokeDashoffset="-402.12"
                    transform="rotate(-90 100 100)"
                  />
                  {/* Religious - 9% (very light gray) */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#f3f4f6"
                    strokeWidth="60"
                    strokeDasharray="22.62 502.65"
                    strokeDashoffset="-482.54"
                    transform="rotate(-90 100 100)"
                  />
                </svg>
              </div>

              {/* Legend */}
              <div className="ml-8 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-muted-foreground">Beach Tour</span>
                  <span className="ml-auto font-semibold">35%</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-gray-400"></div>
                  <span className="text-muted-foreground">Pilgrimage</span>
                  <span className="ml-auto font-semibold">25%</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                  <span className="text-muted-foreground">Cultural</span>
                  <span className="ml-auto font-semibold">20%</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-gray-200"></div>
                  <span className="text-muted-foreground">Adventure</span>
                  <span className="ml-auto font-semibold">16%</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-gray-100"></div>
                  <span className="text-muted-foreground">Religious</span>
                  <span className="ml-auto font-semibold">9%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Performance and Top Tours */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Weekly Performance */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Weekly Performance</CardTitle>
            <CardDescription>
              Daily revenue and booking this week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[300px] items-end justify-between gap-4 px-4">
              {weeklyData.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div className="group relative w-full">
                    <div
                      className="relative w-full cursor-pointer rounded-t-md bg-green-500 transition-all hover:bg-green-600"
                      style={{
                        height: `${(data.bookings / maxBookings) * 250}px`,
                      }}
                    >
                      {/* Tooltip on hover */}
                      {index === 2 && (
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white">
                          Booking: 18
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    {data.day}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Tours */}
        <Card>
          <CardHeader>
            <CardTitle>Top Tour</CardTitle>
            <CardDescription>Most Popular Packages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topTours.map((tour, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 rounded-lg p-3 ${tour.color}`}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/50 text-sm font-semibold">
                    {tour.rank}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{tour.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {tour.bookings} Bookings
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Customer Satisfaction */}
        <Card className="bg-green-500 text-white">
          <CardContent className="p-6">
            <h3 className="mb-2 text-lg font-semibold">
              Customer Satisfaction
            </h3>
            <div className="mb-2 text-5xl font-bold">4.8/5</div>
            <p className="mb-3 text-sm opacity-90">
              Average rating from 156 reviews
            </p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 fill-yellow-300 text-yellow-300"
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Booking Conversion */}
        <Card className="bg-blue-500 text-white">
          <CardContent className="p-6">
            <h3 className="mb-2 text-lg font-semibold">Booking Conversion</h3>
            <div className="mb-2 text-5xl font-bold">68%</div>
            <p className="mb-3 text-sm opacity-90">
              Visitors who complete booking
            </p>
            <div className="h-2 w-full rounded-full bg-white/20">
              <div
                className="h-2 rounded-full bg-white"
                style={{ width: "68%" }}
              ></div>
            </div>
          </CardContent>
        </Card>

        {/* Repeat Customers */}
        <Card className="bg-purple-500 text-white">
          <CardContent className="p-6">
            <h3 className="mb-2 text-lg font-semibold">Repeat Customers</h3>
            <div className="mb-2 text-5xl font-bold">34%</div>
            <p className="mb-3 text-sm opacity-90">Customers who book again</p>
            <div className="h-2 w-full rounded-full bg-white/20">
              <div
                className="h-2 rounded-full bg-white"
                style={{ width: "34%" }}
              ></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
