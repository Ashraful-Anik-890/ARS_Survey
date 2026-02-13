"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Users,
    CreditCard,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    Search,
    MoreVertical,
    Activity
} from "lucide-react"

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState("overview")

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white">Control Room</h2>
                    <p className="text-gray-400">System overview and management.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className="text-red-400 border-red-400/20 hover:bg-red-500/10">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        System Alerts (2)
                    </Button>
                </div>
            </div>

            {/* Admin Stats */}
            <div className="grid gap-4 md:grid-cols-4">
                <Card variant="glass">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium text-gray-400">Total Users</CardTitle>
                        <Users className="w-4 h-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">1,245</div>
                        <p className="text-xs text-primary mt-1">+12 today</p>
                    </CardContent>
                </Card>
                <Card variant="glass">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium text-gray-400">Pending Withdrawals</CardTitle>
                        <CreditCard className="w-4 h-4 text-orange-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">$2,450</div>
                        <p className="text-xs text-orange-400 mt-1">15 requests</p>
                    </CardContent>
                </Card>
                <Card variant="glass">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium text-gray-400">Link Analyzer</CardTitle>
                        <Activity className="w-4 h-4 text-blue-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">98.2%</div>
                        <p className="text-xs text-blue-400 mt-1">Uptime</p>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content Area */}
            <Card variant="glass" className="min-h-[500px]">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                            {['overview', 'users', 'withdrawals'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab
                                            ? "bg-primary/20 text-primary"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                        } capitalize`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-64">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                            <Input placeholder="Search user or TrxID..." className="pl-8 h-9" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {activeTab === 'withdrawals' && (
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold">
                                            W
                                        </div>
                                        <div>
                                            <p className="font-medium text-white">User #{1092 + i} requested <span className="text-primary font-bold">$50.00</span></p>
                                            <p className="text-xs text-gray-400">via bKash • 017XXXXXXXX</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                                            <CheckCircle2 className="w-4 h-4 mr-1" /> Approve
                                        </Button>
                                        <Button size="sm" variant="outline" className="text-red-400 border-red-400/20 hover:bg-red-500/10">
                                            <XCircle className="w-4 h-4 mr-1" /> Reject
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'users' && (
                        <div className="space-y-2">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-gray-400 uppercase bg-white/5">
                                    <tr>
                                        <th className="px-4 py-3 rounded-l-lg">User</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3">Plan</th>
                                        <th className="px-4 py-3">Earnings</th>
                                        <th className="px-4 py-3 rounded-r-lg">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="px-4 py-3 font-medium">user{i}@example.com</td>
                                            <td className="px-4 py-3">
                                                <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs border border-green-500/20">Active</span>
                                            </td>
                                            <td className="px-4 py-3">Pro Earner</td>
                                            <td className="px-4 py-3">$1,2{i}0.00</td>
                                            <td className="px-4 py-3">
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <MoreVertical className="w-4 h-4" />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'overview' && (
                        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                            <Activity className="w-12 h-12 mb-4 opacity-20" />
                            <p>System operating normally.</p>
                            <p className="text-sm">Link Analyzer queue: 0</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
