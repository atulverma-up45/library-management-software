// components/app-sidebar.tsx
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>My App</SidebarHeader>
      <SidebarContent>
        <SidebarGroup title="Section 1">
          {/* Your links/buttons go here */}
        </SidebarGroup>
        <SidebarGroup title="Section 2">
          {/* More items */}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>© 2025</SidebarFooter>
    </Sidebar>
  );
}
