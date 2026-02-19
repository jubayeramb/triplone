"use client";

import * as React from "react";
import {
  LayoutDashboard,
  MapPin,
  Calendar,
  Users,
  CreditCard,
  BarChart3,
  Settings,
  Command,
  GalleryVerticalEnd,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@triplone/ui/components/sidebar";

// Agency dashboard data
const data = {
  user: {
    name: "Adventure Bangladesh",
    email: "agency@travelbd.com",
    avatar: "/avatars/agency.jpg",
  },
  teams: [
    {
      name: "TravelBD",
      logo: GalleryVerticalEnd,
      plan: "Agency Portal",
    },
    {
      name: "Adventure Tours",
      logo: Command,
      plan: "Pro",
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "/",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "/",
        },
      ],
    },
    {
      title: "Tours",
      url: "/tours",
      icon: MapPin,
      items: [
        {
          title: "All Tours",
          url: "/tours",
        },
        {
          title: "Create Tour",
          url: "/tours/create",
        },
      ],
    },
    {
      title: "Bookings",
      url: "/bookings",
      icon: Calendar,
      items: [
        {
          title: "All Bookings",
          url: "/bookings",
        },
        {
          title: "Pending",
          url: "/bookings/pending",
        },
        {
          title: "Confirmed",
          url: "/bookings/confirmed",
        },
      ],
    },
    {
      title: "Customers",
      url: "/customers",
      icon: Users,
      items: [
        {
          title: "All Customers",
          url: "/customers",
        },
      ],
    },
    {
      title: "Payments",
      url: "/payments",
      icon: CreditCard,
      items: [
        {
          title: "Transactions",
          url: "/payments",
        },
      ],
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChart3,
      items: [
        {
          title: "Reports",
          url: "/analytics",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      items: [
        {
          title: "General",
          url: "/settings",
        },
        {
          title: "Profile",
          url: "/settings/profile",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Create Tour",
      url: "/tours/create",
      icon: MapPin,
    },
    {
      name: "Manage Bookings",
      url: "/bookings",
      icon: Calendar,
    },
    {
      name: "View Customers",
      url: "/customers",
      icon: Users,
    },
    {
      name: "Analytics",
      url: "/analytics",
      icon: BarChart3,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
