import { Button } from "@triplone/ui/components/button";
import { Card } from "@triplone/ui/components/card";
import { Calendar, Download, FileText, MapPin, Star, Users, X } from "lucide-react";
import Image from "next/image";

// Mock data - replace with actual data fetching
const bookingSummary = {
  completedTours: 3,
  upcomingTours: 1,
  totalSpent: 71000,
  destinationsVisited: 3,
};

const bookings = [
  {
    id: "1",
    image: "/bookings/beach.jpg",
    company: "Bengal Tours",
    title: "Cox's Bazar Beach Paradise - 3 Days",
    location: "Chittagong, Bangladesh",
    date: "18-2024-001234",
    people: 2,
    price: 17000,
    status: "upcoming",
    rating: null,
  },
  {
    id: "2",
    image: "/bookings/tea-garden.jpg",
    company: "Bengal Tours",
    title: "Sylhet Tea Garden Luxury Tour - 4 Days",
    location: "Sylhet, Bangladesh",
    date: "20/10/2024",
    bookingId: "TB-2024-001189",
    people: 1,
    price: 18000,
    status: "completed",
    rating: 4,
  },
  {
    id: "3",
    image: "/bookings/wildlife.jpg",
    company: "Adventure Bangladesh",
    title: "Sundarbans Wildlife Adventure - 2 Days",
    location: "Khulna, Bangladesh",
    date: "11/01/2024",
    bookingId: "TB-2024-001196",
    people: 2,
    price: 36000,
    status: "completed",
    rating: 4,
  },
  {
    id: "4",
    image: "/bookings/hill.jpg",
    company: "Adventure Bangladesh",
    title: "Bandarban Hill Trek - 5 Days",
    location: "Bandarban, Bangladesh",
    date: "24/12/2025",
    bookingId: "TB-2024-001180",
    people: 1,
    price: 24000,
    status: "completed",
    rating: 4,
  },
];

export default function BookingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-600">Track and manage your travel bookings</p>
        </div>

        {/* Booking Summary */}
        <Card className="mb-8 p-6">
          <h2 className="text-lg font-semibold mb-6">Booking Summary</h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-1">
                {bookingSummary.completedTours}
              </div>
              <div className="text-sm text-gray-600">Completed Tours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-1">
                {bookingSummary.upcomingTours}
              </div>
              <div className="text-sm text-gray-600">Upcoming Tours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-1">
                ৳{bookingSummary.totalSpent.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Spent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-1">
                {bookingSummary.destinationsVisited}
              </div>
              <div className="text-sm text-gray-600">Destinations Visited</div>
            </div>
          </div>
        </Card>

        {/* Bookings List */}
        <div className="space-y-4">
          {bookings.map((booking) => (
            <Card key={booking.id} className="overflow-hidden">
              <div className="flex gap-6 p-6">
                {/* Image */}
                <div className="relative w-48 h-36 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-teal-100 to-blue-100">
                  <div className="w-full h-full flex items-center justify-center text-teal-400">
                    <MapPin className="w-12 h-12" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-gray-500">🇧🇩 {booking.company}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{booking.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {booking.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {booking.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {booking.people} people
                        </div>
                      </div>
                      {booking.bookingId && (
                        <div className="text-sm text-gray-600">Booking ID: {booking.bookingId}</div>
                      )}
                      {booking.rating && (
                        <div className="flex items-center gap-1 mt-2">
                          <span className="text-sm text-gray-600">Tour rating:</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < booking.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">({booking.rating}/5)</span>
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        ৳{booking.price.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-4">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                      Download Voucher
                    </Button>
                    {booking.status === "upcoming" && (
                      <>
                        <Button variant="outline" size="sm">
                          Contact Agency
                        </Button>
                        <Button variant="destructive" size="sm">
                          <X className="w-4 h-4" />
                          Cancel Booking
                        </Button>
                      </>
                    )}
                    <Button variant="outline" size="sm">
                      View tour details
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
