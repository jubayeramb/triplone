import { PersonalInfoCard } from "./components/personal-info-card";
import { TravelPreferencesCard } from "./components/travel-preferences-card";
import { ActivityHistoryCard } from "./components/activity-history-card";
import { userProfile, travelPreferences, activities } from "./lib";

export default function ProfilePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between pt-4">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">My Profile</h1>
            <p className="text-gray-500 text-sm font-medium">
              Manage your account information and preferences
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="space-y-6">
            <PersonalInfoCard profile={userProfile} />
            <TravelPreferencesCard preferences={travelPreferences} />
            <ActivityHistoryCard activities={activities} />
          </div>
        </div>
      </div>
    </div>
  );
}
