"use client";

import { Calendar, CreditCard, User, Bookmark, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@triplone/ui/components/sidebar";

const menuItems = [
  {
    title: "My Booking",
    href: "/customer/bookings",
    icon: Calendar,
  },
  {
    title: "My profile",
    href: "/customer/profile",
    icon: User,
  },
  {
    title: "Saved Tour",
    href: "/customer/saved",
    icon: Bookmark,
  },
  {
    title: "Payment Methods",
    href: "/customer/payment",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/customer/settings",
    icon: Settings,
  },
];

export function CustomerSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
            <span className="text-sm font-semibold text-teal-700">AR</span>
          </div>
          <div className="flex-1 group-data-[collapsible=icon]:hidden">
            <p className="text-sm font-semibold text-sidebar-foreground">Ahmad Rohman</p>
            <p className="text-xs text-muted-foreground">ahmad@example.com</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
