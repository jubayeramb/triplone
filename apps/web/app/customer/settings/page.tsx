"use client";

import { Button } from "@triplone/ui/components/button";
import { Card } from "@triplone/ui/components/card";
import { Input } from "@triplone/ui/components/input";
import { Label } from "@triplone/ui/components/label";
import { Separator } from "@triplone/ui/components/separator";
import { Shield, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [emailConfirmations, setEmailConfirmations] = useState(true);
  const [promotionalEmails, setPromotionalEmails] = useState(false);
  const [smsReminders, setSmsReminders] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);

  const [shareBookingHistory, setShareBookingHistory] = useState(false);
  const [allowReviews, setAllowReviews] = useState(true);

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
          {/* Account Security Section */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-1">
              <Shield className="h-5 w-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-900">Account Security</h2>
            </div>
            <h3 className="text-lg font-semibold text-teal-600 mb-6">Change password</h3>

            <div className="space-y-4">
              {/* Current Password */}
              <div>
                <Label htmlFor="current-password" className="text-sm font-medium text-gray-700">
                  Current password
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="current-password"
                    type={showCurrentPassword ? "text" : "password"}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showCurrentPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* New Password and Confirm Password */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="new-password" className="text-sm font-medium text-gray-700">
                    New password
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="new-password"
                      type={showNewPassword ? "text" : "password"}
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showNewPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">
                    Confirm New password
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <Button className="bg-teal-600 hover:bg-teal-700">Update Password</Button>
            </div>

            <Separator className="my-6" />

            {/* Two-Factor Authentication */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-900">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Button variant="outline" size="sm">
                Enable 2FA
              </Button>
            </div>
          </Card>

          {/* Notification Preferences */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-teal-600 mb-6">Notification Preferences</h2>

            <div className="space-y-4">
              {/* Email booking confirmations */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">Email booking confirmations</h3>
                  <p className="text-xs text-gray-500">
                    Receive email confirmations for your bookings
                  </p>
                </div>
                <button
                  onClick={() => setEmailConfirmations(!emailConfirmations)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    emailConfirmations ? "bg-teal-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      emailConfirmations ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Promotional emails */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">Promotional emails</h3>
                  <p className="text-xs text-gray-500">
                    Receive emails about special offers and new tours
                  </p>
                </div>
                <button
                  onClick={() => setPromotionalEmails(!promotionalEmails)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    promotionalEmails ? "bg-teal-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      promotionalEmails ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* SMS reminders */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">SMS reminders</h3>
                  <p className="text-xs text-gray-500">Get SMS reminders before your trips</p>
                </div>
                <button
                  onClick={() => setSmsReminders(!smsReminders)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    smsReminders ? "bg-teal-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      smsReminders ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Push notifications */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">Push notifications</h3>
                  <p className="text-xs text-gray-500">Receive push notifications on your device</p>
                </div>
                <button
                  onClick={() => setPushNotifications(!pushNotifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    pushNotifications ? "bg-teal-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      pushNotifications ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </Card>

          {/* Privacy Settings */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-teal-600 mb-6">Privacy Settings</h2>

            <div className="space-y-4">
              {/* Profile visibility */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">Profile visibility</h3>
                </div>
                <select className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>Private</option>
                  <option>Public</option>
                  <option>Friends Only</option>
                </select>
              </div>

              {/* Share booking history */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">Share booking history</h3>
                  <p className="text-xs text-gray-500">Allow others to see your travel history</p>
                </div>
                <button
                  onClick={() => setShareBookingHistory(!shareBookingHistory)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    shareBookingHistory ? "bg-teal-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      shareBookingHistory ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Allow reviews */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">Allow reviews</h3>
                  <p className="text-xs text-gray-500">Let others see your tour reviews</p>
                </div>
                <button
                  onClick={() => setAllowReviews(!allowReviews)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    allowReviews ? "bg-teal-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      allowReviews ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </Card>

          {/* Preferences */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-teal-600 mb-6">Preferences</h2>

            <div className="flex flex-col md:flex-row gap-4">
              {/* Language */}
              <div className="flex items-center gap-2 flex-1">
                <Label
                  htmlFor="language"
                  className="text-sm font-medium text-gray-700 whitespace-nowrap"
                >
                  Language
                </Label>
                <select
                  id="language"
                  className="flex-1 text-sm border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option>English</option>
                  <option>Bangla</option>
                  <option>Hindi</option>
                </select>
              </div>

              {/* Timezone */}
              <div className="flex items-center gap-2 flex-1">
                <Label
                  htmlFor="timezone"
                  className="text-sm font-medium text-gray-700 whitespace-nowrap"
                >
                  Timezone
                </Label>
                <select
                  id="timezone"
                  className="flex-1 text-sm border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option>Asia/Dhaka (GMT+6)</option>
                  <option>Asia/Kolkata (GMT+5:30)</option>
                  <option>UTC</option>
                </select>
              </div>

              {/* Currency */}
              <div className="flex items-center gap-2 flex-1">
                <Label
                  htmlFor="currency"
                  className="text-sm font-medium text-gray-700 whitespace-nowrap"
                >
                  Currency
                </Label>
                <select
                  id="currency"
                  className="flex-1 text-sm border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option>BDT</option>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>INR</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Account Actions */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-teal-600 mb-6">Account Actions</h2>

            <div className="space-y-4">
              {/* Export Account Data */}
              <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900">Export Account Data</h3>
                  <p className="text-xs text-gray-600">Download a copy of your account data</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-50"
                >
                  Export data
                </Button>
              </div>

              {/* Delete Account */}
              <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900">Delete Account</h3>
                  <p className="text-xs text-gray-600">
                    Permanently delete your account and all data
                  </p>
                </div>
                <Button variant="destructive" size="sm">
                  Delete Account
                </Button>
              </div>
            </div>
          </Card>

          {/* Save All Changes Button */}
          <div className="flex justify-end">
            <Button className="bg-teal-600 hover:bg-teal-700">Save All Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
