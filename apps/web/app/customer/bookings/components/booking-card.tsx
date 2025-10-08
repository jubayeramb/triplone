import { Button } from "@triplone/ui/components/button";
import { Card } from "@triplone/ui/components/card";
import { Calendar, Download, MapPin, Star, Users, X } from "lucide-react";
import Image from "next/image";
import type { Booking } from "../lib";

interface BookingCardProps {
  booking: Booking;
}

export function BookingCard({ booking }: BookingCardProps) {
  return (
    <Card className="overflow-hidden">
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
                  <span className="text-sm text-gray-500 font-medium">{booking.company}</span>
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
                            i < booking.rating!
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
  );
}
