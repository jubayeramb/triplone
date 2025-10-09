"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
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

// This is sample data.
const data = {
  user: {
    name: "Triplone User",
    email: "tri@plone.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "TripLone",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Bookings",
      url: "/customer/bookings",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Demo",
          url: "/customer/bookings",
        },
      ],
    },
    {
      title: "Profile",
      url: "/customer/profile",
      icon: Bot,
      items: [
        {
          title: "demo",
          url: "/customer/profile",
        },
      ],
    },
    {
      title: "Saved",
      url: "/customer/saved",
      icon: BookOpen,
      items: [
        {
          title: "tours",
          url: "/customer/saved",
        },
      ],
    },
    {
      title: "Settings",
      url: "/customer/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/customer/settings",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Bookings",
      url: "/customer/bookings",
      icon: Frame,
    },
    {
      name: "Saved Tours",
      url: "/customer/saved",
      icon: PieChart,
    },
    {
      name: "Profile",
      url: "/customer/profile",
      icon: Map,
    },
    {
      name: "Payments",
      url: "/customer/payment",
      icon: Map,
    },
    {
      name: "Settings",
      url: "/customer/settings",
      icon: Map,
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
