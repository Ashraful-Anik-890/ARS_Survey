"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DollarSign, Wallet } from "lucide-react"

export default function WithdrawPage() {
    const [amount, setAmount] = useState("")
    const [method, setMethod] = useState("bkash")
    const [account, setAccount] = useState("")

    return (
        <div className="max-w-xl mx-auto space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Withdraw Funds</h2>
                <p className="text-gray-400">Transfer your earnings to your mobile wallet.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Card variant="glass" className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6">
                        <p className="text-sm text-gray-400">Available Balance</p>
                        <p className="text-2xl font-bold text-white">$1,250.00</p>
                    </CardContent>
                </Card>
                <Card variant="glass">
                    <CardContent className="p-6">
                        <p className="text-sm text-gray-400">Pending Review</p>
                        <p className="text-2xl font-bold text-orange-400">$450.00</p>
                    </CardContent>
                </Card>
            </div>

            <Card variant="glass">
                <CardHeader>
                    <CardTitle>Request Payout</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Amount (USD)</label>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <Input
                                placeholder="0.00"
                                className="pl-10"
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                        <p className="text-xs text-gray-500">Min. withdrawal: $10.00</p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Payment Method</label>
                        <div className="grid grid-cols-3 gap-2">
                            {['bkash', 'nagad', 'rocket'].map((m) => (
                                <button
                                    key={m}
                                    onClick={() => setMethod(m)}
                                    className={`p-3 rounded-lg border text-sm font-medium capitalize transition-all ${method === m
                                            ? "bg-primary text-white border-primary"
                                            : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                                        }`}
                                >
                                    {m}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Wallet Number</label>
                        <Input
                            placeholder="01XXXXXXXXX"
                            value={account}
                            onChange={(e) => setAccount(e.target.value)}
                        />
                    </div>

                    <Button className="w-full" size="lg">
                        <Wallet className="w-4 h-4 mr-2" />
                        Process Withdrawal
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
