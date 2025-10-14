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
  "/": "Overview",
  "/tours": "Tours",
  "/tours/create": "Create Tour",
  "/bookings": "Bookings",
  "/bookings/pending": "Pending Bookings",
  "/bookings/confirmed": "Confirmed Bookings",
  "/customers": "Customers",
  "/payments": "Payments",
  "/analytics": "Analytics",
  "/settings": "Settings",
  "/settings/profile": "Agency Profile",
};

export function DynamicBreadcrumb() {
  const pathname = usePathname();

  // Get the current page label
  const currentLabel = routeLabels[pathname] || "Dashboard";

  // Check if we're on the base route
  const isBaseRoute = pathname === "/";

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/">Agency Portal</BreadcrumbLink>
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
