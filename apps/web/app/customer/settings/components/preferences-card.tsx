"use client";

import { Card } from "@triplone/ui/components/card";
import { Label } from "@triplone/ui/components/label";
import { useState } from "react";
import {
  initialUserPreferences,
  languageOptions,
  timezoneOptions,
  currencyOptions,
  type UserPreferences,
} from "../lib";

export function PreferencesCard() {
  const [preferences, setPreferences] = useState<UserPreferences>(initialUserPreferences);

  const updatePreference = <K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => {
    setPreferences({ ...preferences, [key]: value });
  };

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold text-teal-600 mb-6">Preferences</h2>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Language */}
        <div className="flex items-center gap-2 flex-1">
          <Label htmlFor="language" className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Language
          </Label>
          <select
            id="language"
            value={preferences.language}
            onChange={(e) => updatePreference("language", e.target.value)}
            className="flex-1 text-sm border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {languageOptions.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        {/* Timezone */}
        <div className="flex items-center gap-2 flex-1">
          <Label htmlFor="timezone" className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Timezone
          </Label>
          <select
            id="timezone"
            value={preferences.timezone}
            onChange={(e) => updatePreference("timezone", e.target.value)}
            className="flex-1 text-sm border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {timezoneOptions.map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>
        </div>

        {/* Currency */}
        <div className="flex items-center gap-2 flex-1">
          <Label htmlFor="currency" className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Currency
          </Label>
          <select
            id="currency"
            value={preferences.currency}
            onChange={(e) => updatePreference("currency", e.target.value)}
            className="flex-1 text-sm border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {currencyOptions.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Card>
  );
}
