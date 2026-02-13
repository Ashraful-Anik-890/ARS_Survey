"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    CreditCard,
    ArrowUpRight,
    MoreHorizontal
} from "lucide-react"

const navItems = [
    { name: "Home", href: "/dashboard", icon: LayoutDashboard },
    { name: "Pay", href: "/dashboard/upload", icon: CreditCard },
    { name: "Cashout", href: "/dashboard/withdraw", icon: ArrowUpRight },
    { name: "Menu", href: "/dashboard/menu", icon: MoreHorizontal },
]

export function BottomNav() {
    const pathname = usePathname()

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 glass-panel border-t border-white/10 z-50 px-6 flex items-center justify-between">
            {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "flex flex-col items-center justify-center gap-1 transition-all duration-200",
                            isActive ? "text-primary" : "text-gray-400 hover:text-gray-200"
                        )}
                    >
                        <item.icon className={cn("h-6 w-6", isActive && "scale-110")} />
                        <span className="text-[10px] font-medium">{item.name}</span>
                    </Link>
                )
            })}
        </div>
    )
}
