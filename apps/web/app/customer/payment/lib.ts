// Mock data - replace with actual data fetching
export type PaymentMethodType = "visa" | "mastercard" | "bkash" | "nagad" | "rocket";

export interface PaymentMethod {
  id: string;
  type: PaymentMethodType;
  name: string;
  cardHolder?: string;
  accountNumber?: string;
  expiryDate?: string;
  isDefault: boolean;
  image: string;
  color: string;
}

export const paymentMethods: PaymentMethod[] = [
  {
    id: "1",
    type: "visa",
    name: "Visa ending in 4242",
    cardHolder: "Ahmed Rahman",
    expiryDate: "Expires 12/2025",
    isDefault: true,
    image: "/payments/visa.png",
    color: "blue",
  },
  {
    id: "2",
    type: "bkash",
    name: "bKash",
    accountNumber: "+880-1711-123456",
    isDefault: false,
    image: "/payments/bkash.png",
    color: "pink",
  },
  {
    id: "3",
    type: "nagad",
    name: "Nagad",
    accountNumber: "+880-1811-654321",
    isDefault: false,
    image: "/payments/nagad.png",
    color: "orange",
  },
];
