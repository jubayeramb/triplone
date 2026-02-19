"use client";

import { useState } from "react";
import { Button } from "@triplone/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@triplone/ui/components/card";
import { Input } from "@triplone/ui/components/input";
import { Label } from "@triplone/ui/components/label";
import { Textarea } from "@triplone/ui/components/textarea";
import { Switch } from "@triplone/ui/components/switch";
import {
  Upload,
  Mail,
  Phone,
  Globe,
  MapPin,
  Shield,
  CreditCard,
  Eye,
  EyeOff,
  Save,
} from "lucide-react";

type TabType = "profile" | "notifications" | "payments" | "security";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("profile");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Profile state
  const [agencyName, setAgencyName] = useState("Adventure Bangladesh");
  const [licenseNumber, setLicenseNumber] = useState("BTAB-2023-001");
  const [email, setEmail] = useState("info@adventurebangladesh.com");
  const [phone, setPhone] = useState("+880 1712-345678");
  const [website, setWebsite] = useState("www.sundarbantravels.com");
  const [establishedYear, setEstablishedYear] = useState("2018");
  const [address, setAddress] = useState("123 Gulshan Avenue, Dhaka 1212");
  const [description, setDescription] = useState(
    "Leading travel agency in Bangladesh specializing in eco-tourism and cultural experiences."
  );

  // Notification state
  const [emailBookingNotif, setEmailBookingNotif] = useState(true);
  const [smsBookingNotif, setSmsBookingNotif] = useState(false);
  const [emailPaymentNotif, setEmailPaymentNotif] = useState(true);
  const [smsPaymentNotif, setSmsPaymentNotif] = useState(true);

  // Payment state
  const [commission, setCommission] = useState("5");

  // Security state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);
  const [loginNotifications, setLoginNotifications] = useState(false);

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "notifications", label: "Notifications" },
    { id: "payments", label: "Payments" },
    { id: "security", label: "Security" },
  ];

  const renderProfileTab = () => (
    <div className="grid gap-6 lg:grid-cols-[1fr,2fr]">
      {/* Agency Logo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <Upload className="h-5 w-5" />
            Agency Logo
          </CardTitle>
          <CardDescription>
            Upload your agency logo and branding
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <div className="relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-pink-400 via-teal-500 to-teal-600">
            <svg
              viewBox="0 0 200 200"
              className="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Globe circles */}
              <circle cx="100" cy="100" r="90" fill="#0d9488" />
              <circle cx="100" cy="100" r="70" fill="#14b8a6" opacity="0.8" />
              <circle cx="100" cy="100" r="50" fill="#2dd4bf" opacity="0.6" />

              {/* Airplane */}
              <g transform="translate(100, 100) rotate(-45)">
                <path
                  d="M 0,-30 L -8,-20 L -25,-15 L -8,-10 L 0,20 L 8,-10 L 25,-15 L 8,-20 Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
          <Button
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload Logo
          </Button>
        </CardContent>
      </Card>

      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <Upload className="h-5 w-5" />
            Basic Information
          </CardTitle>
          <CardDescription>Update your agency's basic details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="agencyName">Agency Name</Label>
              <Input
                id="agencyName"
                value={agencyName}
                onChange={(e) => setAgencyName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="licenseNumber">License Number</Label>
              <Input
                id="licenseNumber"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="text-muted-foreground absolute left-3 top-3 h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="text-muted-foreground absolute left-3 top-3 h-4 w-4" />
                <Input
                  id="phone"
                  type="tel"
                  className="pl-10"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <div className="relative">
                <Globe className="text-muted-foreground absolute left-3 top-3 h-4 w-4" />
                <Input
                  id="website"
                  className="pl-10"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="establishedYear">Established Year</Label>
              <Input
                id="establishedYear"
                value={establishedYear}
                onChange={(e) => setEstablishedYear(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <div className="relative">
              <MapPin className="text-muted-foreground absolute left-3 top-3 h-4 w-4" />
              <Input
                id="address"
                className="pl-10"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderNotificationsTab = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-600">
          <Shield className="h-5 w-5" />
          Notification Preferences
        </CardTitle>
        <CardDescription>
          Choose how you want to receive notifications
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Booking Notifications */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Booking Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b py-3">
              <div>
                <p className="font-medium">
                  Email notifications for new bookings
                </p>
                <p className="text-muted-foreground text-sm">
                  Get notified via email when customers make bookings
                </p>
              </div>
              <Switch
                checked={emailBookingNotif}
                onCheckedChange={setEmailBookingNotif}
              />
            </div>
            <div className="flex items-center justify-between border-b py-3">
              <div>
                <p className="font-medium">
                  SMS notifications for new bookings
                </p>
                <p className="text-muted-foreground text-sm">
                  Get instant SMS alerts for new bookings
                </p>
              </div>
              <Switch
                checked={smsBookingNotif}
                onCheckedChange={setSmsBookingNotif}
              />
            </div>
          </div>
        </div>

        {/* Payment Notifications */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Payment Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b py-3">
              <div>
                <p className="font-medium">Email notifications for payments</p>
                <p className="text-muted-foreground text-sm">
                  Get notified when payments are received
                </p>
              </div>
              <Switch
                checked={emailPaymentNotif}
                onCheckedChange={setEmailPaymentNotif}
              />
            </div>
            <div className="flex items-center justify-between border-b py-3">
              <div>
                <p className="font-medium">SMS notifications for payments</p>
                <p className="text-muted-foreground text-sm">
                  Get instant SMS alerts for payments
                </p>
              </div>
              <Switch
                checked={smsPaymentNotif}
                onCheckedChange={setSmsPaymentNotif}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderPaymentsTab = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-600">
          <Shield className="h-5 w-5" />
          Payment Settings
        </CardTitle>
        <CardDescription>
          Configure your payment methods and commission rates
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Accepted Payment Methods */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Accepted Payment Methods
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {/* bKash */}
            <div className="flex items-center gap-3 rounded-lg border p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                <div className="h-8 w-8 rounded-full bg-pink-600"></div>
              </div>
              <div>
                <p className="font-semibold">bKash</p>
                <p className="text-muted-foreground text-sm">Mobile payment</p>
              </div>
            </div>

            {/* Nagad */}
            <div className="flex items-center gap-3 rounded-lg border p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <div className="h-8 w-8 rounded-full bg-orange-600"></div>
              </div>
              <div>
                <p className="font-semibold">Nagad</p>
                <p className="text-muted-foreground text-sm">Mobile payment</p>
              </div>
            </div>

            {/* Credit/Debit Card */}
            <div className="flex items-center gap-3 rounded-lg border p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold">Credit/Debit Card</p>
                <p className="text-muted-foreground text-sm">
                  Visa, Mastercard
                </p>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="flex items-center gap-3 rounded-lg border p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <svg
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Bank Transfer</p>
                <p className="text-muted-foreground text-sm">
                  Direct bank transfer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Commission Settings */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Commission Settings</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="commission">Platform Commission(%)</Label>
              <Input
                id="commission"
                type="number"
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
                className="max-w-md"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              Current commission rate: {commission}%
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      {/* Password & Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <Shield className="h-5 w-5" />
            Password & Security
          </CardTitle>
          <CardDescription>
            Update your password and security settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current password</Label>
            <div className="relative">
              <Input
                id="currentPassword"
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="text-muted-foreground hover:text-foreground absolute right-3 top-3"
              >
                {showCurrentPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="newPassword">New password</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="text-muted-foreground hover:text-foreground absolute right-3 top-3"
                >
                  {showNewPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-muted-foreground hover:text-foreground absolute right-3 top-3"
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

          <Button className="bg-green-600 hover:bg-green-700">
            Update Password
          </Button>
        </CardContent>
      </Card>

      {/* Account Access */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <Shield className="h-5 w-5" />
            Account Access
          </CardTitle>
          <CardDescription>
            Manage who can access your agency account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between border-b py-3">
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-muted-foreground text-sm">
                Add an extra layer of security
              </p>
            </div>
            <Switch
              checked={twoFactorAuth}
              onCheckedChange={setTwoFactorAuth}
            />
          </div>

          <div className="flex items-center justify-between border-b py-3">
            <div>
              <p className="font-medium">Login Notifications</p>
              <p className="text-muted-foreground text-sm">
                Get notified of new logins
              </p>
            </div>
            <Switch
              checked={loginNotifications}
              onCheckedChange={setLoginNotifications}
            />
          </div>

          <Button
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50"
          >
            View Login History
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-blue-600">Agency Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your agency profile and preferences
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`relative px-6 py-3 font-medium transition-colors ${
              activeTab === tab.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="bg-foreground absolute bottom-0 left-0 right-0 h-0.5" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pb-6">
        {activeTab === "profile" && renderProfileTab()}
        {activeTab === "notifications" && renderNotificationsTab()}
        {activeTab === "payments" && renderPaymentsTab()}
        {activeTab === "security" && renderSecurityTab()}
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-green-600 hover:bg-green-700">
          <Save className="mr-2 h-4 w-4" />
          Save All Changes
        </Button>
      </div>
    </div>
  );
}
