import type { Metadata } from "next";
import { AppSidebar } from "./sidebar/app-sidebar";
import { DynamicBreadcrumb } from "./sidebar/dynamic-breadcrumb";
import { Separator } from "@triplone/ui/components/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@triplone/ui/components/sidebar";

export const metadata: Metadata = {
  title: "Customer Portal - Triplone",
  description:
    "Manage your bookings, profile, saved items, payments, and account settings.",
};

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <DynamicBreadcrumb />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex-1">{children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
