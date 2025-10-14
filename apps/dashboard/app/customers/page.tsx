"use client";

import { useState } from "react";
import Link from "next/link";
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
import { Avatar } from "@triplone/ui/components/avatar";
import { Button } from "@triplone/ui/components/button";
import {
  Users,
  TrendingUp,
  DollarSign,
  Star,
  Mail,
  Phone,
  MapPin,
  Calendar,
  MoreVertical,
} from "lucide-react";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  favoredTour: string;
  lastBooking: string;
  rating: number;
  badge: "Regular" | "VIP";
  totalBookings: number;
  totalSpent: number;
  avatar?: string;
}

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  const stats = [
    {
      title: "Total Customers",
      value: "4",
      icon: Users,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "VIP Customers",
      value: "2",
      icon: Users,
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      title: "Total Revenue",
      value: "৳160,000",
      icon: DollarSign,
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-500",
    },
    {
      title: "Avg Rating",
      value: "4.8",
      icon: Star,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
    },
  ];

  const customers: Customer[] = [
    {
      id: "1",
      name: "Fatima Khan",
      email: "fatima.khan@email.com",
      phone: "+880 1812-987654",
      location: "Chittagong",
      favoredTour: "Loves Sundarbans",
      lastBooking: "2024-02-10",
      rating: 4.7,
      badge: "Regular",
      totalBookings: 3,
      totalSpent: 128000,
    },
    {
      id: "2",
      name: "Ahmed Rahman",
      email: "ahmed.rahman@email.com",
      phone: "+880 1712-345678",
      location: "Dhaka",
      favoredTour: "Loves Cox's Bazar",
      lastBooking: "2024-02-15",
      rating: 4.7,
      badge: "VIP",
      totalBookings: 5,
      totalSpent: 160000,
    },
    {
      id: "3",
      name: "Rashida Begum",
      email: "rashida.begum@email.com",
      phone: "+880 1612-789012",
      location: "Rajshahi",
      favoredTour: "Loves Sylhet",
      lastBooking: "2024-05-28",
      rating: 4.7,
      badge: "Regular",
      totalBookings: 2,
      totalSpent: 115000,
    },
    {
      id: "4",
      name: "Mohammad Ali",
      email: "mohammad.ali@email.com",
      phone: "+880 1912-456789",
      location: "Sylhet",
      favoredTour: "Loves Bandarban",
      lastBooking: "2024-02-12",
      rating: 4.7,
      badge: "VIP",
      totalBookings: 8,
      totalSpent: 172000,
    },
  ];

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      searchQuery === "" ||
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterType === "all" ||
      (filterType === "vip" && customer.badge === "VIP") ||
      (filterType === "regular" && customer.badge === "Regular");

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-blue-600">Customer Management</h1>
        <p className="text-muted-foreground mt-1">
          Build lasting relationships with your travelers
        </p>
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

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search customers by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="All Customer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Customer</SelectItem>
            <SelectItem value="vip">VIP Only</SelectItem>
            <SelectItem value="regular">Regular Only</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Customer Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCustomers.map((customer) => (
          <Card key={customer.id} className="relative">
            <CardContent className="p-6">
              {/* Menu Button */}
              <button className="absolute top-4 right-4 p-1 hover:bg-muted rounded">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>

              {/* Customer Header */}
              <div className="flex items-start gap-3 mb-4">
                <Avatar className="h-12 w-12">
                  <div className="h-full w-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-semibold text-lg">
                    {customer.name.charAt(0)}
                  </div>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{customer.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-3 w-3 ${
                            star <= Math.floor(customer.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm ml-1">{customer.rating}</span>
                    </div>
                    <Badge
                      className={
                        customer.badge === "VIP"
                          ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                      }
                    >
                      {customer.badge}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Customer Details */}
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{customer.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{customer.location} • {customer.favoredTour}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Last booking: {customer.lastBooking}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">
                    {customer.totalBookings}
                  </p>
                  <p className="text-xs text-muted-foreground">Total Bookings</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">
                    ৳{customer.totalSpent.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">Total Spent</p>
                </div>
              </div>

              {/* Action Button */}
              <Link href={`/customers/${customer.id}`}>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  View Details
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCustomers.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p>No customers found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
