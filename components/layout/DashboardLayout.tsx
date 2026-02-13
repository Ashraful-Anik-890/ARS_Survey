"use client"

import { Sidebar } from "./Sidebar"
import { BottomNav } from "./BottomNav"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-background-dark text-white selection:bg-primary/30">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] opacity-20" />
            </div>

            <Sidebar />

            <main className="relative z-10 md:pl-64 min-h-screen pb-20 md:pb-0">
                <div className="p-4 md:p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>

            <BottomNav />
        </div>
    )
}
