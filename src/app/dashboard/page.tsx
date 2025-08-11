import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Image from "next/image"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
    svg: "https://www.svgrepo.com/show/501871/home-house.svg"
  },
  {
    title: "Students",
    url: "#",
    icon: Inbox,
    svg: "https://www.svgrepo.com/show/520508/student.svg"
  },
  {
    title: "Library",
    url: "#",
    icon: Calendar,
    svg: "https://www.svgrepo.com/show/475524/library.svg"
  },
  {
    title: "Subscription",
    url: "#",
    icon: Search,
    svg: "https://www.svgrepo.com/show/251532/star-premium.svg"
  },
  {
    title: "Assign Role & Permission",
    url: "#",
    icon: Settings,
    svg : "https://www.svgrepo.com/show/501824/setting-setting.svg"
  },
  {
    title: "User activity logs",
    url: "#",
    icon: Settings,
    svg : "https://www.svgrepo.com/show/501824/setting-setting.svg"
  },
  {
    title: "Track changes",
    url: "#",
    icon: Settings,
    svg : "https://www.svgrepo.com/show/501824/setting-setting.svg"
  },
  {
    title: "Setting",
    url: "#",
    icon: Settings,
    svg : "https://www.svgrepo.com/show/501824/setting-setting.svg"
  },
]

export default function Dashboard() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-3xl h-20 text-black">Super Admin
            
          </SidebarGroupLabel>
          
          <SidebarSeparator/>
          <SidebarGroupContent>
            <SidebarMenu>
                <div className="flex flex-col gap-4 text-2xl ml-1.5 ">

                
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                    
                  <SidebarMenuButton asChild  className="hover:bg-blue-200 hover:text-black">
                      <a href={item.url}  className="">
                       {/* <Image src={item.svg} alt={item.url} className="w-6 h-6"/> */}
                       <Image src={item.svg} alt={item.url} className="h-6 w-6" width={6} height={6}/>
                       {/* <item.icon size={"lg"}/> */}
                       <span className="text-lg font-semibold">{item.title}</span>
                      </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}