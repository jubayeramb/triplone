import { Button } from "@triplone/ui/components/button";
import { Card } from "@triplone/ui/components/card";
import { Badge } from "@triplone/ui/components/badge";
import { Edit } from "lucide-react";
import type { TravelPreferences } from "../lib";

interface TravelPreferencesCardProps {
  preferences: TravelPreferences;
  onEdit?: () => void;
}

export function TravelPreferencesCard({ preferences, onEdit }: TravelPreferencesCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Travel Preferences</h2>
        <Button
          variant="ghost"
          size="sm"
          className="text-teal-600 hover:text-teal-700"
          onClick={onEdit}
        >
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </Button>
      </div>

      <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Favorite Destinations</p>
          <div className="flex flex-wrap gap-2">
            {preferences.favoriteDestinations.map((destination) => (
              <Badge key={destination} variant="outline" className="text-sm">
                {destination}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Travel Style</p>
          <div className="flex flex-wrap gap-2">
            {preferences.travelStyle.map((style) => (
              <Badge key={style} variant="outline" className="text-sm">
                {style}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Budget Range</p>
          <p className="text-sm text-gray-600">{preferences.budgetRange}</p>
        </div>
      </div>
    </Card>
  );
}
