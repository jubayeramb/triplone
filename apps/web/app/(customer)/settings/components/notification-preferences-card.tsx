"use client";

import { Card } from "@triplone/ui/components/card";
import { Switch } from "@triplone/ui/components/switch";
import { useState } from "react";
import { initialNotificationSettings, type NotificationSettings } from "../lib";

export function NotificationPreferencesCard() {
  const [settings, setSettings] = useState<NotificationSettings>(initialNotificationSettings);

  const updateSetting = (key: keyof NotificationSettings, value: boolean) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold text-teal-600 mb-6">Notification Preferences</h2>

      <div className="space-y-4">
        {/* Email booking confirmations */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900">Email booking confirmations</h3>
            <p className="text-xs text-gray-500">Receive email confirmations for your bookings</p>
          </div>
          <Switch
            checked={settings.emailConfirmations}
            onCheckedChange={(value) => updateSetting("emailConfirmations", value)}
          />
        </div>

        {/* Promotional emails */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900">Promotional emails</h3>
            <p className="text-xs text-gray-500">
              Receive emails about special offers and new tours
            </p>
          </div>
          <Switch
            checked={settings.promotionalEmails}
            onCheckedChange={(value) => updateSetting("promotionalEmails", value)}
          />
        </div>

        {/* SMS reminders */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900">SMS reminders</h3>
            <p className="text-xs text-gray-500">Get SMS reminders before your trips</p>
          </div>
          <Switch
            checked={settings.smsReminders}
            onCheckedChange={(value) => updateSetting("smsReminders", value)}
          />
        </div>

        {/* Push notifications */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900">Push notifications</h3>
            <p className="text-xs text-gray-500">Receive push notifications on your device</p>
          </div>
          <Switch
            checked={settings.pushNotifications}
            onCheckedChange={(value) => updateSetting("pushNotifications", value)}
          />
        </div>
      </div>
    </Card>
  );
}
