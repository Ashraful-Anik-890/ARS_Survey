"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User, Mail, Lock, Phone } from "lucide-react"

export default function SignupPage() {
    return (
        <Card variant="glass" className="border-primary/20 bg-black/40 backdrop-blur-xl">
            <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-bold tracking-tight text-white">Create an account</CardTitle>
                <CardDescription>
                    Join ARS Surveys to start earning today
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Input placeholder="First Name" />
                    </div>
                    <div className="space-y-2">
                        <Input placeholder="Last Name" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input placeholder="name@example.com" type="email" className="pl-10" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input placeholder="Mobile Number" type="tel" className="pl-10" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input type="password" placeholder="Password" className="pl-10" />
                    </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" size="lg">
                    Create Account
                </Button>
            </CardContent>
            <CardFooter className="flex justify-center text-center text-sm text-gray-400">
                <p>
                    Already have an account?{" "}
                    <Link href="/auth/login" className="text-primary hover:text-green-400 font-medium underline-offset-4 hover:underline">
                        Log in
                    </Link>
                </p>
            </CardFooter>
        </Card>
    )
}
