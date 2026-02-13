import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, ShieldCheck, Clock } from "lucide-react"

export default function DashboardHome() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Command Center</h2>
                    <p className="text-gray-400">Welcome back, verified worker.</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs border border-primary/20 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Verified Status
                    </span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card variant="glass">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium text-gray-400">Total Balance</CardTitle>
                        <span className="text-primary font-bold">$</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-white">$1,250.00</div>
                        <p className="text-xs text-gray-400 mt-1">+20.1% from last month</p>
                    </CardContent>
                </Card>

                <Card variant="glass">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium text-gray-400">Pending Withdrawal</CardTitle>
                        <Clock className="w-4 h-4 text-orange-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-white">$450.00</div>
                        <p className="text-xs text-orange-400/80 mt-1">Processing (Est. 24h)</p>
                    </CardContent>
                </Card>

                <Card variant="glass">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium text-gray-400">Completed Surveys</CardTitle>
                        <ShieldCheck className="w-4 h-4 text-secondary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-white">142</div>
                        <p className="text-xs text-secondary mt-1">98% Approval Rate</p>
                    </CardContent>
                </Card>
            </div>

            {/* Transactions / Actions split */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4" variant="glass">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <ArrowDownLeft className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm">Survey Payment #{10020 + i}</p>
                                            <p className="text-xs text-gray-400">Today, 2:30 PM</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-primary">+$15.00</p>
                                        <p className="text-[10px] text-gray-500">Verified</p>
                                    </div>
                                </div>
                            ))}
                            <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">Withdrawal Request</p>
                                        <p className="text-xs text-gray-400">Yesterday, 10:00 AM</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-white font-bold">-$450.00</p>
                                    <p className="text-[10px] text-orange-400">Pending</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3" variant="glass">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button className="w-full justify-between" size="lg">
                            Upload Payment Proof
                            <ArrowUpRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button variant="outline" className="w-full justify-between hover:bg-white/5 border-white/10 text-white" size="lg">
                            Request Withdrawal
                            <ArrowDownLeft className="w-4 h-4 ml-2" />
                        </Button>

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <h4 className="text-sm font-medium text-gray-400 mb-3">System Status</h4>
                            <div className="flex items-center gap-2 text-sm text-green-400">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                All Systems Operational
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
