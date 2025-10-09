import { ToursGrid } from "./components/tours-grid";
import { savedTours } from "./lib";

export default function SavedToursPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between pt-4">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Saved Tours</h1>
            <p className="text-gray-500 text-sm font-medium">
              Your wishlist of tours to book later
            </p>
          </div>
        </div>

        <ToursGrid tours={savedTours} />
      </div>
    </div>
  );
}
