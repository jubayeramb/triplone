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
    image: "/bookings/booking-1.png",
    company: "Bengal Tours",
    companyLogo: "/bookings/company-logo-1.png",
    title: "Cox's Bazar Beach Paradise - 3 Days",
    location: "Chittagong, Bangladesh",
    date: "18/01/2024",
    bookingId: "TB-2024-001234",
    people: 2,
    price: 17000,
    status: "upcoming",
    rating: null,
  },
  {
    id: "2",
    image: "/bookings/booking-2.png",
    company: "Bengal Tours",
    companyLogo: "/bookings/company-logo-1.png",
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
    image: "/bookings/booking-3.png",
    company: "Adventure Bangladesh",
    companyLogo: "/bookings/company-logo-2.png",
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
    image: "/bookings/booking-4.png",
    company: "Adventure Bangladesh",
    companyLogo: "/bookings/company-logo-2.png",
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
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-500 text-sm font-medium">Track and manage your travel bookings</p>
        </div>

        {/* Booking Summary */}
        <Card className="mb-8 p-6">
          <h2 className="text-lg font-semibold mb-6">Booking Summary</h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-semibold text-[#238F3E] mb-2">
                {bookingSummary.completedTours}
              </div>
              <div className="text-sm text-gray-600">Completed Tours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-[#238F3E] mb-2">
                {bookingSummary.upcomingTours}
              </div>
              <div className="text-sm text-gray-600">Upcoming Tours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-[#238F3E] mb-2">
                ৳{bookingSummary.totalSpent.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Spent</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-[#238F3E] mb-2">
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
              <div className="flex gap-4 p-4">
                {/* Image */}
                <div className="relative w-[250px] h-[200px] rounded-lg overflow-hidden flex-shrink-0">
                  <Image src={booking.image} alt={booking.title} fill className="object-cover" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col md:flex-row md:justify-between gap-4">
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="relative w-5 h-5 flex-shrink-0">
                            <Image
                              src={booking.companyLogo}
                              alt={booking.company}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span className="text-sm text-gray-500 font-medium">
                            {booking.company}
                          </span>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">{booking.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            <span className="text-xs">{booking.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span className="text-xs">{booking.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="w-4 h-4" />
                            <span className="text-xs">
                              {booking.people} {booking.people === 1 ? "person" : "people"}
                            </span>
                          </div>
                        </div>
                        {booking.bookingId && (
                          <div className="text-xs text-gray-500 mb-2">
                            Booking ID:{" "}
                            <span className="font-medium text-gray-900">{booking.bookingId}</span>
                          </div>
                        )}
                        {booking.status === "completed" && booking.rating && (
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs text-gray-500 font-medium">Your rating:</span>
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
                            <span className="text-sm text-gray-500">({booking.rating}/5)</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2.5">
                      <Button variant="outline" size="sm" className="h-9 px-4">
                        <Download className="w-4 h-4 mr-2" />
                        Download Voucher
                      </Button>
                      {booking.status === "upcoming" && (
                        <>
                          <Button variant="outline" size="sm" className="h-9 px-4">
                            <MapPin className="w-4 h-4 mr-2" />
                            Contact Agency
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-9 px-4 text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="w-4 h-4 mr-2" />
                            Cancel booking
                          </Button>
                        </>
                      )}
                      <Button variant="outline" size="sm" className="h-9 px-4">
                        View tour details
                      </Button>
                    </div>
                  </div>
                  <div className="my-auto">
                    <div className="text-2xl font-semibold text-gray-900">
                      ৳{booking.price.toLocaleString()}
                    </div>
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
