import { Button } from "@triplone/ui/components/button";
import { AccountSecurityCard } from "./components/account-security-card";
import { NotificationPreferencesCard } from "./components/notification-preferences-card";
import { PrivacySettingsCard } from "./components/privacy-settings-card";
import { PreferencesCard } from "./components/preferences-card";
import { AccountActionsCard } from "./components/account-actions-card";

export default function SettingsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between pt-4">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Settings</h1>
            <p className="text-gray-500 text-sm font-medium">
              Manage your account preferences and security
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <AccountSecurityCard />
          <NotificationPreferencesCard />
          <PrivacySettingsCard />
          <PreferencesCard />
          <AccountActionsCard />

          {/* Save All Changes Button */}
          <div className="flex justify-end">
            <Button className="bg-teal-600 hover:bg-teal-700">Save All Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
