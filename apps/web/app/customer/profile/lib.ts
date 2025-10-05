// Mock data - replace with actual data fetching
export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  memberSince: string;
  avatarUrl?: string;
  membershipTier: string;
}

export interface TravelPreferences {
  favoriteDestinations: string[];
  travelStyle: string[];
  budgetRange: string;
}

export type ActivityType = "booking" | "review" | "saved" | "completed";
export type ActivityColor = "teal" | "yellow" | "blue" | "green";

export interface Activity {
  id: string;
  title: string;
  date: string;
  type: ActivityType;
  status?: string;
  rating?: number;
  color: ActivityColor;
}

export const userProfile: UserProfile = {
  name: "Ahmed Rahman",
  email: "ahmed@example.com",
  phone: "+880-171-123456",
  address: "Dhanmondi, Dhaka, Bangladesh",
  memberSince: "18 June 2023",
  membershipTier: "Gold member",
};

export const travelPreferences: TravelPreferences = {
  favoriteDestinations: ["Cox's Bazar", "Sylhet", "Sundarbans"],
  travelStyle: ["Adventure"],
  budgetRange: "৳10,000 - 25,000",
};

export const activities: Activity[] = [
  {
    id: "1",
    title: "Booked Cox's Bazar Beach Paradise",
    date: "10/02/2024",
    type: "booking",
    status: "confirmed",
    color: "teal",
  },
  {
    id: "2",
    title: "Reviewed Sylhet Tea Garden Tour",
    date: "28/01/2024",
    type: "review",
    rating: 5,
    color: "yellow",
  },
  {
    id: "3",
    title: "Saved Bandarban Hill Trek",
    date: "25/01/2024",
    type: "saved",
    color: "blue",
  },
  {
    id: "4",
    title: "Completed Sundarbans Wildlife Adventure",
    date: "20/01/2024",
    type: "completed",
    status: "completed",
    color: "teal",
  },
];
