'use client'

import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList
} from "@/components/ui/command"
import { 
    LayoutDashboard,
    UsersRound,
    Ungroup,
    Settings,
    Cookie,
    MessageSquare,
    LogOut
} from "lucide-react"
import UserItem from "./UserItem"
import Link from "next/link"


export default function Sidebar() {
  
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

  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] p-4 min-h-screen">
        <div>
            <UserItem />
        </div>
        <div className="grow">
            <Command style={{overflow: "visible" }}>
                <CommandList style={{overflow: "visible" }}>
                    {
                        menuItems.map((menu: any, key: number) => (
                            <CommandGroup heading={menu.group} key={key}>
                                {menu.options.map((option: any, optionKey: number) => (
                                    <Link href={option.link} key={optionKey}>
                                        <CommandItem className="flex gap-2 cursor-pointer">
                                            {option.icon}
                                            <p>{option.text}</p>
                                        </CommandItem>
                                    </Link>
                                ))}
                            </CommandGroup>
                        ))
                    }

                </CommandList>
            </Command>
        </div>
        
        <div className="flex flex-col gap-y-2">
            <div className="flex gap-2">
                <Settings />
                <p>General Settings</p>
            </div>

            <div>
                <Link href={"/"} className="flex gap-2">
                    <LogOut />
                    <p>Log Out</p>
                </Link>
            </div>
        </div>
    </div>
  )
}
