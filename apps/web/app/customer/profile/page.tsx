import { Button } from "@triplone/ui/components/button";
import { Card } from "@triplone/ui/components/card";
import { Badge } from "@triplone/ui/components/badge";
import { Separator } from "@triplone/ui/components/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@triplone/ui/components/avatar";
import {
  MapPin,
  Mail,
  Phone,
  CalendarDays,
  Edit,
  Star,
  CheckCircle2,
  Camera,
  User,
} from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between pt-4">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">My Profile</h1>
            <p className="text-gray-500 text-sm font-medium">
              Manage your account information and preferences
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          {/* Main Profile Info */}
          <div className="space-y-6">
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
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/avatar.jpg" alt="Ahmed Rahman" />
                    <AvatarFallback className="bg-gray-300 text-white">
                      <User className="h-10 w-10" />
                    </AvatarFallback>
                  </Avatar>
                  <button className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-green-600 border-2 border-white flex items-center justify-center hover:bg-green-700 transition-colors">
                    <Camera className="h-4 w-4 text-white" />
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Ahmed Rahman</h3>
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
                    <p className="text-sm font-medium text-gray-900">
                      Dhanmondi, Dhaka, Bangladesh
                    </p>
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

              <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

            {/* Activity History */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Travel Preferences</h2>

              <div className="space-y-3">
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
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-colors"
                    >
                      <div className={`h-3 w-3 rounded-full flex-shrink-0 ${dotColor}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{activity.date}</p>
                      </div>
                      {activity.status && (
                        <Badge
                          variant="secondary"
                          className={`text-xs flex-shrink-0 ${
                            activity.status === "confirmed"
                              ? "bg-gray-800 text-white hover:bg-gray-800"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {activity.status}
                        </Badge>
                      )}
                      {activity.rating && (
                        <div className="flex items-center gap-1 text-yellow-500 flex-shrink-0">
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
        </div>
      </div>
    </div>
  );
}
