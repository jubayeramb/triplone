"use client";

import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@triplone/ui/components/button";
import { Input } from "@triplone/ui/components/input";
import { Avatar, AvatarFallback } from "@triplone/ui/components/avatar";
import { Badge } from "@triplone/ui/components/badge";
import { SidebarTrigger } from "@triplone/ui/components/sidebar";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4 px-4">
        {/* Sidebar Toggle */}
        <SidebarTrigger />

        <div className="flex flex-1 items-center justify-end gap-4">
          {/* Search Bar */}
          <div className="flex flex-1 items-center gap-2 md:max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search destinations, bookings..."
                className="pl-9 w-full"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                3
              </Badge>
              <span className="sr-only">Notifications</span>
            </Button>

            {/* User Avatar */}
            <Button variant="ghost" className="gap-2 px-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-teal-100 text-teal-700 text-sm font-semibold">
                  AR
                </AvatarFallback>
              </Avatar>
              <span className="hidden md:inline-block text-sm font-medium">Ahmad Rohman</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
