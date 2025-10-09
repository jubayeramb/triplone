"use client";

import { Button } from "@triplone/ui/components/button";
import { Bookmark } from "lucide-react";

interface BookmarkButtonProps {
  tourId: string;
  onToggleSave?: (tourId: string) => void;
}

export function BookmarkButton({ tourId, onToggleSave }: BookmarkButtonProps) {
  return (
    <button
      onClick={() => onToggleSave?.(tourId)}
      className="absolute top-3 right-3 h-8 w-8 rounded bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
    >
      <Bookmark className="h-4 w-4 text-red-500 fill-red-500" />
    </button>
  );
}

interface BookNowButtonProps {
  tourId: string;
  onBookNow?: (tourId: string) => void;
}

export function BookNowButton({ tourId, onBookNow }: BookNowButtonProps) {
  return (
    <Button
      className="w-full bg-teal-600 hover:bg-teal-700 text-white"
      onClick={() => onBookNow?.(tourId)}
    >
      Book Now
    </Button>
  );
}
