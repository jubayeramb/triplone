import { BookingSummary } from "./components/booking-summary";
import { BookingsList } from "./components/bookings-list";
import { bookingSummary, bookings } from "./lib";

export default function BookingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-500 text-sm font-medium">Track and manage your travel bookings</p>
        </div>

        <BookingSummary {...bookingSummary} />
        <BookingsList bookings={bookings} />
      </div>
    </div>
  );
}
