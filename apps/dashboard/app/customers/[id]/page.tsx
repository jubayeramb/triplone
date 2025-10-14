"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@triplone/ui/components/card";
import { Badge } from "@triplone/ui/components/badge";
import { Avatar } from "@triplone/ui/components/avatar";
import { Button } from "@triplone/ui/components/button";
import {
  Star,
  Mail,
  Phone,
  MapPin,
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  ChevronLeft,
  MessageSquare,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

type TabType = "overview" | "contact" | "booking-history" | "preferences";

export default function CustomerProfilePage() {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  // Mock customer data - in real app, fetch based on params.id
  const customer = {
    id: params.id,
    name: "Fatima Khan",
    email: "fatima.khan@email.com",
    phone: "+880 1812-987654",
    location: "Chittagong",
    rating: 4.7,
    badge: "Regular",
    memberSince: "2023-06-15",
    totalBookings: 5,
    totalSpent: 45000,
    lastBooking: "2024-02-15",
    avgRating: 4.8,
    contactInfo: {
      email: "ahmed.rahman@email.com",
      whatsapp: "+880 1712-345678",
      phone: "+880 1712-345678",
      address: "House 123, Road 15, Dhanmondi, Dhaka-1205",
      emergencyContact: "+880 1812-345679",
    },
    bookingHistory: [
      {
        id: "1",
        name: "Cox's Bazar Beach Paradise",
        date: "2024-02-15",
        amount: 12000,
        status: "Completed",
      },
      {
        id: "2",
        name: "Sundarbans Mangrove Safari",
        date: "2024-01-20",
        amount: 15000,
        status: "Completed",
      },
      {
        id: "3",
        name: "Sylhet Tea Garden Tour",
        date: "2023-12-10",
        amount: 8000,
        status: "Completed",
      },
      {
        id: "4",
        name: "Bandarban Hill Trek",
        date: "2023-11-05",
        amount: 10000,
        status: "Completed",
      },
    ],
    preferences: {
      favoriteDestination: "Cox's Bazar",
      preferredTourTypes: ["Beach Tours", "Adventure", "Photography"],
    },
    recentActivity: [
      {
        id: "1",
        type: "booking",
        title: "Completed Cox's Bazar Beach Paradise",
        date: "2024-02-15",
      },
      {
        id: "2",
        type: "review",
        title: "Left a 5-star review",
        date: "2024-02-16",
      },
    ],
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "contact", label: "Contact Inf." },
    { id: "booking-history", label: "Booking history" },
    { id: "preferences", label: "Preferences" },
  ];

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Bookings</p>
                <p className="text-3xl font-bold mt-2">{customer.totalBookings}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Member Since</p>
                <p className="text-2xl font-bold mt-2">{customer.memberSince}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Spent</p>
                <p className="text-3xl font-bold mt-2">৳{customer.totalSpent.toLocaleString()}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
                <p className="text-3xl font-bold mt-2">{customer.avgRating}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {customer.recentActivity.map((activity) => (
              <div
                key={activity.id}
                className={`flex items-center gap-3 p-4 rounded-lg ${
                  activity.type === "booking" ? "bg-green-50" : "bg-blue-50"
                }`}
              >
                <div
                  className={`p-2 rounded-full ${
                    activity.type === "booking" ? "bg-green-100" : "bg-blue-100"
                  }`}
                >
                  {activity.type === "booking" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <Star className="h-5 w-5 text-blue-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContactTab = () => (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {/* Email */}
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">EMAIL ADDRESS</p>
                <p className="font-semibold">{customer.contactInfo.email}</p>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-100">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <MessageCircle className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">WHATSAPP</p>
                <p className="font-semibold">{customer.contactInfo.whatsapp}</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="p-4 rounded-lg bg-green-50 border border-green-100">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Phone className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">PHONE NUMBER</p>
                <p className="font-semibold">{customer.contactInfo.phone}</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="p-4 rounded-lg bg-purple-50 border border-purple-100">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <MapPin className="h-5 w-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">ADDRESS</p>
                <p className="font-semibold">{customer.contactInfo.address}</p>
              </div>
            </div>
          </div>

          {/* Emergency Contact - Full Width */}
          <div className="p-4 rounded-lg bg-red-50 border border-red-100 md:col-span-2">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <Phone className="h-5 w-5 text-red-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">EMERGENCY CONTACT</p>
                <p className="font-semibold">{customer.contactInfo.emergencyContact}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderBookingHistoryTab = () => (
    <Card>
      <CardHeader>
        <CardTitle>Booking History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {customer.bookingHistory.map((booking) => (
            <div
              key={booking.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1">
                <p className="font-semibold mb-1">{booking.name}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{booking.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    <span>৳{booking.amount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                {booking.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderPreferencesTab = () => (
    <Card>
      <CardHeader>
        <CardTitle>Travel Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Favorite Destination */}
        <div>
          <h3 className="font-semibold mb-3">Favorite Destination</h3>
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="font-medium">{customer.preferences.favoriteDestination}</span>
            </div>
          </div>
        </div>

        {/* Preferred Tour Types */}
        <div>
          <h3 className="font-semibold mb-3">Preferred Tour Types</h3>
          <div className="flex flex-wrap gap-2">
            {customer.preferences.preferredTourTypes.map((type, index) => (
              <Badge
                key={index}
                className="bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-2"
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/customers")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Back To Customer</span>
          </button>
          <div className="border-l h-6"></div>
          <div>
            <h1 className="text-3xl font-bold text-blue-600">{customer.name}</h1>
            <p className="text-muted-foreground mt-1">Customer Profile</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Link href={`/customers/${params.id}/message`}>
            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
              Message
            </Button>
          </Link>
          <Link href={`/customers/${params.id}/bookings`}>
            <Button className="bg-green-600 hover:bg-green-700">
              View Bookings
            </Button>
          </Link>
        </div>
      </div>

      {/* Customer Card */}
      <div className="grid gap-6 lg:grid-cols-[1fr,auto]">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                <div className="h-full w-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-semibold text-2xl">
                  {customer.name.charAt(0)}
                </div>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold">{customer.name}</h2>
                  <div className="flex items-center">
                    {[1, 2, 3, 4].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                    <span className="text-sm ml-1">{customer.rating}</span>
                  </div>
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                    {customer.badge}
                  </Badge>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{customer.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{customer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{customer.location}</span>
                  </div>
                  <div className="mt-2">
                    <span>Member since {customer.memberSince}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="bg-blue-50">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Total Spent</p>
                <p className="text-2xl font-bold text-blue-600">
                  ৳{customer.totalSpent.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Bookings</p>
                  <p className="text-2xl font-bold text-green-600">
                    {customer.totalBookings}
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t pt-4">
              <p className="text-sm text-muted-foreground">Last booking</p>
              <p className="font-semibold">{customer.lastBooking}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === tab.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "overview" && renderOverviewTab()}
        {activeTab === "contact" && renderContactTab()}
        {activeTab === "booking-history" && renderBookingHistoryTab()}
        {activeTab === "preferences" && renderPreferencesTab()}
      </div>
    </div>
  );
}
