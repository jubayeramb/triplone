"use client";

import { Button } from "@triplone/ui/components/button";
import { Card } from "@triplone/ui/components/card";
import { Input } from "@triplone/ui/components/input";
import { Label } from "@triplone/ui/components/label";
import { Separator } from "@triplone/ui/components/separator";
import { Shield, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface AccountSecurityCardProps {
  onPasswordUpdate?: (data: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => void;
  onEnable2FA?: () => void;
}

export function AccountSecurityCard({ onPasswordUpdate, onEnable2FA }: AccountSecurityCardProps) {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
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
              {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
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
                {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
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
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
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
          <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
        </div>
        <Button variant="outline" size="sm" onClick={onEnable2FA}>
          Enable 2FA
        </Button>
      </div>
    </Card>
  );
}
