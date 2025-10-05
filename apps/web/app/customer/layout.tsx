import type { Metadata } from "next";
import { SidebarProvider, SidebarInset } from "@triplone/ui/components/sidebar";
import { CustomerSidebar } from "./components/customer-sidebar";
import { Navbar } from "./components/navbar";

export const metadata: Metadata = {
  title: "My Bookings - Triplone",
  description: "Track and manage your travel bookings",
};

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <CustomerSidebar />
      <SidebarInset>
        <Navbar />
        <div className="flex-1">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
