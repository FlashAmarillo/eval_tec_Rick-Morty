'use client'

import { useState, useEffect } from "react"

export default function UserItem() {
  const [loggedInUser, setLoggedInUser] = useState<LoggedInUser | null>(null)
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}')
    setLoggedInUser(user)
  }, [])

  return (
    <div className="flex items-center justify-between gap-2 rounded-[8px] p-2">

        <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
            <p className="uppercase">{loggedInUser?.name?.charAt(0)}</p>
        </div>
        <div className="grow">
            <p className="text-lg font-bold">{loggedInUser?.name}</p>
            <p className="text-xs text-slate-500">{loggedInUser?.email}</p>
        </div>
    </div>
  )
}
