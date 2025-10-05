import { Button } from "@triplone/ui/components/button";
import { Card } from "@triplone/ui/components/card";
import { Badge } from "@triplone/ui/components/badge";
import { Separator } from "@triplone/ui/components/separator";
import { MapPin, Mail, Phone, CalendarDays, Edit, Star, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      {/* Header */}
      <div className="flex items-center justify-between pt-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
          <p className="text-sm text-gray-500">Manage your account information and preferences</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Main Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information Card */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
              <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700">
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AR</span>
                </div>
                <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-teal-500 border-2 border-white flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Ahmed Rahman</h3>
                <p className="text-sm text-gray-500">Member since 2023</p>
                <Badge variant="secondary" className="mt-2">
                  Gold member
                </Badge>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium text-gray-900">ahmed@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Address</p>
                  <p className="text-sm font-medium text-gray-900">Dhanmondi, Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm font-medium text-gray-900">+880-171-123456</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <CalendarDays className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Member Since</p>
                  <p className="text-sm font-medium text-gray-900">18 June 2023</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Travel Preferences Card */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Travel Preferences</h2>
              <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700">
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Favorite Destinations</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-sm">
                    Cox's Bazar
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Sylhet
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Sundarbans
                  </Badge>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Travel Style</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-sm">
                    Adventure
                  </Badge>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Budget Range</p>
                <p className="text-sm text-gray-600">৳10,000 - 25,000</p>
              </div>
            </div>
          </Card>

          {/* Travel Preferences Section (Activity History) */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Travel Preferences</h2>

            <div className="space-y-4">
              {[
                {
                  title: "Booked Cox's Bazar Beach Paradise",
                  date: "10/02/2024",
                  status: "confirmed",
                  color: "teal",
                },
                {
                  title: "Reviewed Sylhet Tea Garden Tour",
                  date: "28/01/2024",
                  rating: 5,
                  color: "yellow",
                },
                {
                  title: "Saved Bandarban Hill Trek",
                  date: "25/01/2024",
                  color: "blue",
                },
                {
                  title: "Completed Sundarbans Wildlife Adventure",
                  date: "20/01/2024",
                  status: "completed",
                  color: "teal",
                },
              ].map((activity, index) => {
                const dotColor =
                  activity.color === "teal"
                    ? "bg-teal-500"
                    : activity.color === "yellow"
                      ? "bg-yellow-500"
                      : "bg-blue-500";

                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`mt-1 h-2 w-2 rounded-full ${dotColor}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                    {activity.status && (
                      <Badge
                        variant="secondary"
                        className={`text-xs ${
                          activity.status === "confirmed"
                            ? "bg-teal-100 text-teal-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {activity.status}
                      </Badge>
                    )}
                    {activity.rating && (
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium">{activity.rating}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Right Column - Stats and Benefits */}
        <div className="space-y-6">
          {/* Travel Stats Card */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Travel Stats</h2>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Bookings</p>
                <p className="text-3xl font-bold text-teal-600">8</p>
              </div>

              <Separator />

              <div>
                <p className="text-sm text-gray-500 mb-1">Total Spent</p>
                <p className="text-3xl font-bold text-gray-900">৳125,000</p>
              </div>

              <Separator />

              <div>
                <p className="text-sm text-gray-500 mb-1">Destinations Visited</p>
                <p className="text-3xl font-bold text-teal-600">6</p>
              </div>
            </div>
          </Card>

          {/* Membership Benefits Card */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Membership Benefits</h2>

            <div className="space-y-3">
              {[
                { text: "Priority booking", icon: CheckCircle2 },
                { text: "10% discount on tours", icon: CheckCircle2 },
                { text: "Free cancellation", icon: CheckCircle2 },
                { text: "24/7 support", icon: CheckCircle2 },
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <benefit.icon className="h-4 w-4 text-teal-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
