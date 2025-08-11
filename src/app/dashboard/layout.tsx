import { Sidebar, SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
        <Sidebar variant="inset" />
            <SidebarInset>
                <AppSidebar/>
                    <main>
                        {children}
                        {/* <SidebarTrigger className="" size={"lg"}/> */}
                    </main>
            </SidebarInset>
    </SidebarProvider>
  )
}