"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@triplone/ui/components/card";
import { Input } from "@triplone/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@triplone/ui/components/select";
import { Badge } from "@triplone/ui/components/badge";
import { Button } from "@triplone/ui/components/button";
import {
  Calendar,
  ChevronLeft,
  CheckCircle2,
  DollarSign,
  Users,
  Star,
  MapPin,
  Clock,
  Download,
} from "lucide-react";

interface Booking {
  id: string;
  tourName: string;
  destination: string;
  date: string;
  amount: number;
  travelers: number;
  status: "Completed" | "Upcoming" | "Cancelled";
  rating?: number;
  review?: string;
}

export default function CustomerBookingsPage() {
  const params = useParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data - in real app, fetch based on params.id
  const customerName = "Fatima Khan";
  
  const stats = [
    {
      title: "Total Bookings",
      value: "5",
      icon: Calendar,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "Completed",
      value: "4",
      icon: CheckCircle2,
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      title: "Total Revenue",
      value: "৳48,000",
      icon: DollarSign,
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-500",
    },
    {
      title: "Upcoming",
      value: "1",
      icon: Clock,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
    },
  ];

  const bookings: Booking[] = [
    {
      id: "1",
      tourName: "Cox's Bazar Beach Paradise",
      destination: "Cox's Bazar",
      date: "2024-02-15",
      amount: 12000,
      travelers: 2,
      status: "Completed",
      rating: 4.7,
      review: "Amazing experience! The beach was beautiful and the service was excellent.",
    },
    {
      id: "2",
      tourName: "Sundarbans Mangrove Safari",
      destination: "Sundarbans",
      date: "2024-01-20",
      amount: 15000,
      travelers: 3,
      status: "Completed",
    },
    {
      id: "3",
      tourName: "Sylhet Tea Garden Tour",
      destination: "Sylhet",
      date: "2023-12-10",
      amount: 8000,
      travelers: 2,
      status: "Completed",
    },
    {
      id: "4",
      tourName: "Bandarban Hill Trek",
      destination: "Bandarban",
      date: "2023-11-05",
      amount: 10000,
      travelers: 4,
      status: "Completed",
    },
    {
      id: "5",
      tourName: "Rangamati Lake Cruise",
      destination: "Rangamati",
      date: "2025-03-15",
      amount: 3000,
      travelers: 2,
      status: "Upcoming",
    },
  ];

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      searchQuery === "" ||
      booking.tourName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.destination.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === "all" || booking.status.toLowerCase() === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: Booking["status"]) => {
    const config = {
      Completed: "bg-green-100 text-green-700 hover:bg-green-100",
      Upcoming: "bg-blue-100 text-blue-700 hover:bg-blue-100",
      Cancelled: "bg-red-100 text-red-700 hover:bg-red-100",
    };

    return <Badge className={config[status]}>{status}</Badge>;
  };

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
            <h1 className="text-3xl font-bold text-blue-600">
              {customerName}'s Bookings
            </h1>
            <p className="text-muted-foreground mt-1">
              Complete booking history and details
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-lg`}>
                  <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search bookings by tour or destination..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="All Bookings" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Bookings</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="sm:w-auto">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Bookings List */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Transactions</CardTitle>
          <CardDescription>All payment transactions and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredBookings.map((booking) => (
              <Card key={booking.id} className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{booking.tourName}</h3>
                        {getStatusBadge(booking.status)}
                      </div>
                      {booking.rating && (
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= Math.floor(booking.rating!)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                            <span className="text-sm ml-1">{booking.rating}</span>
                          </div>
                        </div>
                      )}
                      {booking.review && (
                        <p className="text-sm text-muted-foreground italic">
                          "{booking.review}"
                        </p>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-blue-600 border-blue-600 hover:bg-blue-50"
                    >
                      View Details
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{booking.destination}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{booking.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{booking.travelers} travelers</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                      <DollarSign className="h-4 w-4" />
                      <span>৳{booking.amount.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredBookings.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>No bookings found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
