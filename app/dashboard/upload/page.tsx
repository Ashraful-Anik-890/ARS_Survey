"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Upload, CheckCircle2, AlertCircle } from "lucide-react"

export default function UploadPaymentPage() {
    const [file, setFile] = useState<File | null>(null)
    const [trxId, setTrxId] = useState("")
    const [status, setStatus] = useState<"idle" | "uploading" | "success">("idle")

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("uploading")
        // Simulate API call
        setTimeout(() => setStatus("success"), 2000)
    }

    return (
        <div className="max-w-xl mx-auto space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Upload Payment</h2>
                <p className="text-gray-400">Submit your payment proof to top up your balance.</p>
            </div>

            <Card variant="glass">
                <CardHeader>
                    <CardTitle>Payment Details</CardTitle>
                    <CardDescription>Supported MFS: bKash, Nagad, Rocket</CardDescription>
                </CardHeader>
                <CardContent>
                    {status === "success" ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center space-y-4 animate-in fade-in zoom-in">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Submission Received</h3>
                                <p className="text-gray-400">Your transaction is being verified. This usually takes 5-10 minutes.</p>
                            </div>
                            <Button onClick={() => { setStatus("idle"); setFile(null); setTrxId("") }} variant="outline">
                                Upload Another
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Transaction ID (TrxID)</label>
                                <Input
                                    placeholder="e.g. 9JKS82..."
                                    value={trxId}
                                    onChange={(e) => setTrxId(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Payment Screenshot</label>
                                <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:bg-white/5 transition-colors cursor-pointer relative">
                                    <input
                                        type="file"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        required
                                    />
                                    <div className="flex flex-col items-center gap-2">
                                        <Upload className="w-8 h-8 text-primary" />
                                        {file ? (
                                            <p className="text-sm text-green-400 font-medium">{file.name}</p>
                                        ) : (
                                            <>
                                                <p className="text-sm text-gray-400">Click or drag verification screenshot here</p>
                                                <p className="text-xs text-gray-500">JPG, PNG up to 5MB</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 flex gap-3 text-orange-400 text-sm">
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                <p>Ensure the TrxID matches the screenshot exactly. Mismatched data will delay verification.</p>
                            </div>

                            <Button type="submit" className="w-full" size="lg" disabled={status === "uploading"}>
                                {status === "uploading" ? "Verifying..." : "Submit Payment"}
                            </Button>
                        </form>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
