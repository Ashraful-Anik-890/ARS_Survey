"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Upload, X, FileText, ShieldCheck, Lock } from "lucide-react"

export default function SettingsPage() {
    const [file, setFile] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)
    const [agreed, setAgreed] = useState(false)
    const [status, setStatus] = useState<"idle" | "uploading" | "verified">("idle")

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selected = e.target.files[0]
            setFile(selected)

            if (selected.type.startsWith("image/")) {
                const reader = new FileReader()
                reader.onloadend = () => setPreview(reader.result as string)
                reader.readAsDataURL(selected)
            } else {
                setPreview(null)
            }
        }
    }

    const handleUpload = () => {
        setStatus("uploading")
        setTimeout(() => setStatus("verified"), 3000)
    }

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Account Settings</h2>
                <p className="text-gray-400">Manage your profile and verification status.</p>
            </div>

            <Card variant="glass">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Identity Verification (KYC)</CardTitle>
                            <CardDescription>Required to process withdrawals.</CardDescription>
                        </div>
                        {status === "verified" ? (
                            <span className="flex items-center gap-1 text-green-400 bg-green-400/10 px-3 py-1 rounded-full text-xs font-bold border border-green-400/20">
                                <ShieldCheck className="w-3 h-3" /> VERIFIED
                            </span>
                        ) : (
                            <span className="flex items-center gap-1 text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full text-xs font-bold border border-orange-400/20">
                                <Lock className="w-3 h-3" /> UNVERIFIED
                            </span>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    {status === "verified" ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mx-auto mb-4">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Identity Verified</h3>
                            <p className="text-gray-400 max-w-sm mx-auto mt-2">
                                Your National ID has been verified. You can now access full features including instant withdrawals.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="space-y-4">
                                <div className="border border-yellow-500/20 bg-yellow-500/10 rounded-lg p-4 text-sm text-yellow-200">
                                    <p className="font-bold mb-1">Validity Guidelines:</p>
                                    <ul className="list-disc list-inside space-y-1 opacity-80">
                                        <li>Ensure all 4 corners of the ID card are visible.</li>
                                        <li>Text must be clear and readable (no glare).</li>
                                        <li>Supported formats: JPG, PNG, PDF (Max 5MB).</li>
                                    </ul>
                                </div>

                                <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:bg-white/5 transition-colors relative min-h-[200px] flex flex-col items-center justify-center">
                                    <input
                                        type="file"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        onChange={handleFileChange}
                                        accept="image/*,application/pdf"
                                        disabled={status === "uploading"}
                                    />

                                    {preview ? (
                                        <div className="relative w-full max-w-xs aspect-video rounded-lg overflow-hidden border border-white/10">
                                            <img src={preview} alt="ID Preview" className="w-full h-full object-cover" />
                                            <button
                                                className="absolute top-2 right-2 bg-black/50 p-1 rounded-full hover:bg-red-500/80 transition-colors z-20"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    setFile(null)
                                                    setPreview(null)
                                                }}
                                            >
                                                <X className="w-4 h-4 text-white" />
                                            </button>
                                        </div>
                                    ) : file ? (
                                        <div className="flex flex-col items-center gap-2">
                                            <FileText className="w-10 h-10 text-primary" />
                                            <p className="font-medium text-white">{file.name}</p>
                                            <button
                                                className="text-xs text-red-400 hover:text-red-300 z-20 relative"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    setFile(null)
                                                }}
                                            >
                                                Remove file
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center gap-2">
                                            <Upload className="w-8 h-8 text-gray-400" />
                                            <p className="font-medium text-gray-300">Upload National ID (Smart Card / NID)</p>
                                            <p className="text-xs text-gray-500">Front side only</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-white/5">
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            className="peer h-4 w-4 border-gray-500 rounded bg-transparent checked:bg-primary checked:border-primary transition-colors cursor-pointer"
                                            checked={agreed}
                                            onChange={(e) => setAgreed(e.target.checked)}
                                        />
                                    </div>
                                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                        I consent to the processing of my personal data for identity verification purposes.
                                        My ID will be stored securely and deleted automatically after verification or account closure in accordance with the <span className="text-primary underline">Privacy Policy</span>.
                                    </div>
                                </label>

                                <Button
                                    className="w-full"
                                    disabled={!file || !agreed || status === "uploading"}
                                    onClick={handleUpload}
                                >
                                    {status === "uploading" ? "Encrypting & Uploading..." : "Submit for Verification"}
                                </Button>
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
