import { Card } from "@triplone/ui/components/card";

interface BookingSummaryProps {
  completedTours: number;
  upcomingTours: number;
  totalSpent: number;
  destinationsVisited: number;
}

export function BookingSummary({
  completedTours,
  upcomingTours,
  totalSpent,
  destinationsVisited,
}: BookingSummaryProps) {
  return (
    <Card className="mb-8 p-6">
      <h2 className="text-lg font-semibold mb-6">Booking Summary</h2>
      <div className="grid grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-2xl font-semibold text-[#238F3E] mb-2">{completedTours}</div>
          <div className="text-sm text-gray-600">Completed Tours</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-[#238F3E] mb-2">{upcomingTours}</div>
          <div className="text-sm text-gray-600">Upcoming Tours</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-[#238F3E] mb-2">
            ৳{totalSpent.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Total Spent</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-[#238F3E] mb-2">{destinationsVisited}</div>
          <div className="text-sm text-gray-600">Destinations Visited</div>
        </div>
      </div>
    </Card>
  );
}
