import AppSidebar from "@/components/AppSidebar"
import Header from "@/components/Header"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
      <SidebarProvider>
        <AppSidebar />
        <main className="flex min-h-dvh flex-col w-screen">
          <Header>
            <SidebarTrigger />
          </Header>
          <div>
            {children}
          </div>
        </main>
      </SidebarProvider>
    )
  }