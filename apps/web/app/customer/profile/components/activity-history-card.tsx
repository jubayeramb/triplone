import { Card } from "@triplone/ui/components/card";
import type { Activity } from "../lib";
import { ActivityItem } from "./activity-item";

interface ActivityHistoryCardProps {
  activities: Activity[];
}

export function ActivityHistoryCard({ activities }: ActivityHistoryCardProps) {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Activity History</h2>
      <div className="space-y-3">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </Card>
  );
}
