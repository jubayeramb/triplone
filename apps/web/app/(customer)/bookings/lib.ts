// Mock data - replace with actual data fetching
export const bookingSummary = {
  completedTours: 3,
  upcomingTours: 1,
  totalSpent: 95000,
  destinationsVisited: 3,
};

export type BookingStatus = "upcoming" | "completed" | "cancelled";

export interface Booking {
  id: string;
  image: string;
  company: string;
  companyLogo: string;
  title: string;
  location: string;
  date: string;
  bookingId: string;
  people: number;
  price: number;
  status: BookingStatus;
  rating: number | null;
}

export const bookings: Booking[] = [
  {
    id: "1",
    image: "/bookings/booking-1.png",
    company: "Bengal Tours",
    companyLogo: "/bookings/company-logo-1.png",
    title: "Cox's Bazar Beach Paradise - 3 Days",
    location: "Chittagong, Bangladesh",
    date: "18/01/2024",
    bookingId: "TB-2024-001234",
    people: 2,
    price: 17000,
    status: "upcoming",
    rating: null,
  },
  {
    id: "2",
    image: "/bookings/booking-2.png",
    company: "Bengal Tours",
    companyLogo: "/bookings/company-logo-1.png",
    title: "Sylhet Tea Garden Luxury Tour - 4 Days",
    location: "Sylhet, Bangladesh",
    date: "20/10/2024",
    bookingId: "TB-2024-001189",
    people: 1,
    price: 18000,
    status: "completed",
    rating: 4,
  },
  {
    id: "3",
    image: "/bookings/booking-3.png",
    company: "Adventure Bangladesh",
    companyLogo: "/bookings/company-logo-2.png",
    title: "Sundarbans Wildlife Adventure - 2 Days",
    location: "Khulna, Bangladesh",
    date: "11/01/2024",
    bookingId: "TB-2024-001196",
    people: 2,
    price: 36000,
    status: "completed",
    rating: 4,
  },
  {
    id: "4",
    image: "/bookings/booking-4.png",
    company: "Adventure Bangladesh",
    companyLogo: "/bookings/company-logo-2.png",
    title: "Bandarban Hill Trek - 5 Days",
    location: "Bandarban, Bangladesh",
    date: "24/12/2025",
    bookingId: "TB-2024-001180",
    people: 1,
    price: 24000,
    status: "completed",
    rating: 4,
  },
];
