'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent
} from "@/components/ui/sidebar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Avatar,
    AvatarFallback,
    AvatarImage
  } from "@/components/ui/avatar"

import { 
  LayoutDashboard,
  UsersRound,
  Ungroup,
  Settings2,
  Cookie,
  MessageSquare,
  LogOut,
  ChevronUp,
  CreditCard,
  UserCog
} from "lucide-react"
import UserItem from "./UserItem"


export default function AppSidebar() {

  const router = useRouter()
  const [loggedInUser, setLoggedInUser] = useState<LoggedInUser | null>(null)
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}')
    setLoggedInUser(user)
  }, [])

  const menuItems = [
    {
        group: "General",
        options: [
            {
                link: "/admin",
                icon: <LayoutDashboard color="#1e293b" />,
                text: "Dashboard"
            },
            {
                link: "/admin/characters",
                icon: <UsersRound color="#1e293b" />,
                text: "Characters"
            },
            {
                link: "/admin/episodes",
                icon: <Ungroup color="#1e293b" />,
                text: "Episodes"
            }
        ]
    },
    {
        group: "User Settings",
        options: [
            {
                link: "/admin",
                icon: <Cookie />,
                text: "Privacy"
            },
            {
                link: "/admin",
                icon: <MessageSquare />,
                text: "Notifications"
            }
        ]
    }
  ]

  const handleLogout = ():void => {

    // Eliminar datos de la sesión de localStorage
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('loggedInUser')

    // Redirigir a la página de inicio
    router.push('/')
  }

  return (
    <Sidebar>
        <SidebarHeader>
            <UserItem />
        </SidebarHeader>

        <SidebarContent>
        {
            menuItems.map((menuItem, index) => (
                <SidebarGroup key={index}>
                    <SidebarGroupLabel>{menuItem.group}</SidebarGroupLabel>
                    <SidebarGroupContent>
                    <SidebarMenu>
                        {
                        menuItem.options.map((optionItem, index) => (
                            <SidebarMenuItem key={index}>
                            <SidebarMenuButton asChild>
                                <Link href={optionItem.link}>
                                {optionItem.icon}
                                <span>{optionItem.text}</span>
                                </Link>
                            </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))
                        }
                    </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>  
            ))
        }
        </SidebarContent>

        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className='border border-gray-200'>
                        <Avatar className='h-5 w-5'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>{loggedInUser?.name}</AvatarFallback>
                        </Avatar> 
                        {loggedInUser?.name}
                        <ChevronUp className="ml-auto" />
                    </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                    side="top"
                    className="w-[--radix-popper-anchor-width]"
                    >
                    <DropdownMenuItem className='flex gap-2'>
                        <UserCog className='h-5 w-5' color="#1e293b" />
                        <span>Account</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='flex gap-2'>
                        <Settings2 className='h-5 w-5' color="#1e293b" />
                        <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='flex gap-2'>
                        <CreditCard className='h-5 w-5' color="#1e293b" />
                        <span>Billing</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='flex gap-2' onSelect={handleLogout}>
                        <LogOut className='h-5 w-5' color="#1e293b" />
                        <span>Sign out</span>
                    </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}
