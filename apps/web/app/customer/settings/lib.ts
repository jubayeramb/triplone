// Mock data and types - replace with actual data fetching
export interface NotificationSettings {
  emailConfirmations: boolean;
  promotionalEmails: boolean;
  smsReminders: boolean;
  pushNotifications: boolean;
}

export interface PrivacySettings {
  profileVisibility: "private" | "public" | "friends-only";
  shareBookingHistory: boolean;
  allowReviews: boolean;
}

export interface UserPreferences {
  language: string;
  timezone: string;
  currency: string;
}

export const initialNotificationSettings: NotificationSettings = {
  emailConfirmations: true,
  promotionalEmails: false,
  smsReminders: true,
  pushNotifications: true,
};

export const initialPrivacySettings: PrivacySettings = {
  profileVisibility: "private",
  shareBookingHistory: false,
  allowReviews: true,
};

export const initialUserPreferences: UserPreferences = {
  language: "English",
  timezone: "Asia/Dhaka (GMT+6)",
  currency: "BDT",
};

export const languageOptions = ["English", "Bangla", "Hindi"];
export const timezoneOptions = ["Asia/Dhaka (GMT+6)", "Asia/Kolkata (GMT+5:30)", "UTC"];
export const currencyOptions = ["BDT", "USD", "EUR", "INR"];
export const profileVisibilityOptions = [
  { value: "private", label: "Private" },
  { value: "public", label: "Public" },
  { value: "friends-only", label: "Friends Only" },
] as const;
