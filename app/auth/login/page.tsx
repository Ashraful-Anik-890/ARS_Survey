"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Lock, Mail } from "lucide-react"

export default function LoginPage() {
    return (
        <Card variant="glass" className="border-primary/20 bg-black/40 backdrop-blur-xl">
            <CardHeader className="space-y-1 text-center">
                <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-bold text-xl text-black shadow-lg shadow-primary/20">
                        ARS
                    </div>
                </div>
                <CardTitle className="text-2xl font-bold tracking-tight">Welcome back</CardTitle>
                <CardDescription>
                    Enter your credentials to access the command center
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input placeholder="name@example.com" className="pl-10" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input type="password" placeholder="••••••••" className="pl-10" />
                    </div>
                </div>
                <Button className="w-full" size="lg">Log In</Button>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 text-center text-sm text-gray-400">
                <Link href="/auth/forgot-password" className="hover:text-primary transition-colors">
                    Forgot password?
                </Link>
                <p>
                    Don't have an account?{" "}
                    <Link href="/auth/signup" className="text-primary hover:text-green-400 font-medium underline-offset-4 hover:underline">
                        Sign up
                    </Link>
                </p>
            </CardFooter>
        </Card>
    )
}
