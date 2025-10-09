"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@triplone/ui/components/breadcrumb";

const routeLabels: Record<string, string> = {
  "/customer": "Dashboard",
  "/customer/bookings": "My Bookings",
  "/customer/payment": "Payment Methods",
  "/customer/profile": "Profile",
  "/customer/saved": "Saved Tours",
  "/customer/settings": "Settings",
};

export function DynamicBreadcrumb() {
  const pathname = usePathname();

  // Get the current page label
  const currentLabel = routeLabels[pathname] || "Dashboard";

  // Check if we're on the base customer route
  const isBaseRoute = pathname === "/customer";

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/customer">Customer Portal</BreadcrumbLink>
        </BreadcrumbItem>
        {!isBaseRoute && (
          <>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{currentLabel}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
