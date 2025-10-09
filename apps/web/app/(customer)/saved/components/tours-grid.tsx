import type { SavedTour } from "../lib";
import { TourCard } from "./tour-card";

interface ToursGridProps {
  tours: SavedTour[];
}

export function ToursGrid({ tours }: ToursGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}
