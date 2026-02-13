"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    CreditCard,
    ArrowUpRight,
    Settings,
    Shield,
    LifeBuoy,
    LogOut,
    Menu
} from "lucide-react"

const navItems = [
    { name: "Command Center", href: "/dashboard", icon: LayoutDashboard },
    { name: "Upload Payment", href: "/dashboard/upload", icon: CreditCard },
    { name: "Withdraw", href: "/dashboard/withdraw", icon: ArrowUpRight },
    { name: "Support", href: "/dashboard/support", icon: LifeBuoy },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="hidden md:flex h-screen w-64 flex-col fixed left-0 top-0 border-r border-white/10 glass-panel z-50">
            <div className="p-6">
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    ARS Surveys
                </h1>
                <p className="text-xs text-gray-400 mt-1">Growth • Money • Trust</p>
            </div>

            <nav className="flex-1 space-y-1 px-4 py-4">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200",
                                isActive
                                    ? "bg-primary/20 text-primary border border-primary/20 shadow-sm"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className={cn("h-5 w-5", isActive && "text-primary")} />
                            {item.name}
                        </Link>
                    )
                })}
            </nav>

            <div className="p-4 border-t border-white/10">
                <div className="glass-card p-4 mb-4 bg-gradient-to-br from-primary/10 to-transparent border-primary/10">
                    <p className="text-xs text-gray-400">Current Balance</p>
                    <p className="text-lg font-bold text-primary">$1,250.00</p>
                </div>
                <button className="flex w-full items-center gap-3 px-4 py-2 text-sm font-medium text-red-400 hover:text-red-300 transition-colors">
                    <LogOut className="h-5 w-5" />
                    Sign Out
                </button>
            </div>
        </div>
    )
}
