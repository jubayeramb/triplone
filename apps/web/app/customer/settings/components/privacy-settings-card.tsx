"use client";

import { Card } from "@triplone/ui/components/card";
import { useState } from "react";
import { initialPrivacySettings, profileVisibilityOptions, type PrivacySettings } from "../lib";
import { ToggleSwitch } from "./toggle-switch";

export function PrivacySettingsCard() {
  const [settings, setSettings] = useState<PrivacySettings>(initialPrivacySettings);

  const updateSetting = <K extends keyof PrivacySettings>(key: K, value: PrivacySettings[K]) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold text-teal-600 mb-6">Privacy Settings</h2>

      <div className="space-y-4">
        {/* Profile visibility */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900">Profile visibility</h3>
          </div>
          <select
            value={settings.profileVisibility}
            onChange={(e) =>
              updateSetting(
                "profileVisibility",
                e.target.value as PrivacySettings["profileVisibility"]
              )
            }
            className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {profileVisibilityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Share booking history */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900">Share booking history</h3>
            <p className="text-xs text-gray-500">Allow others to see your travel history</p>
          </div>
          <ToggleSwitch
            enabled={settings.shareBookingHistory}
            onChange={(value) => updateSetting("shareBookingHistory", value)}
          />
        </div>

        {/* Allow reviews */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900">Allow reviews</h3>
            <p className="text-xs text-gray-500">Let others see your tour reviews</p>
          </div>
          <ToggleSwitch
            enabled={settings.allowReviews}
            onChange={(value) => updateSetting("allowReviews", value)}
          />
        </div>
      </div>
    </Card>
  );
}
