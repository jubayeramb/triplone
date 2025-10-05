import { Badge } from "@triplone/ui/components/badge";
import { Star } from "lucide-react";
import type { Activity } from "../lib";

interface ActivityItemProps {
  activity: Activity;
}

export function ActivityItem({ activity }: ActivityItemProps) {
  const dotColor =
    activity.color === "teal"
      ? "bg-teal-500"
      : activity.color === "yellow"
        ? "bg-yellow-500"
        : activity.color === "blue"
          ? "bg-blue-500"
          : "bg-green-500";

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-colors">
      <div className={`h-3 w-3 rounded-full flex-shrink-0 ${dotColor}`} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
        <p className="text-xs text-gray-500 mt-0.5">{activity.date}</p>
      </div>
      {activity.status && (
        <Badge
          variant="secondary"
          className={`text-xs flex-shrink-0 ${
            activity.status === "confirmed"
              ? "bg-gray-800 text-white hover:bg-gray-800"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {activity.status}
        </Badge>
      )}
      {activity.rating && (
        <div className="flex items-center gap-1 text-yellow-500 flex-shrink-0">
          <Star className="h-4 w-4 fill-current" />
          <span className="text-sm font-medium">{activity.rating}</span>
        </div>
      )}
    </div>
  );
}
