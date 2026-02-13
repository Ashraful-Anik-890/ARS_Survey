import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { ArrowRight, Shield, BarChart3, Globe, Check } from "lucide-react"

export default function Home() {
    return (
        <main className="min-h-screen bg-background-dark text-white selection:bg-primary/30 overflow-x-hidden">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-bold text-black text-xs">
                            ARS
                        </div>
                        <span className="font-bold text-lg tracking-tight">ARS Surveys</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                        <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                        <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
                        <Link href="#about" className="hover:text-white transition-colors">About</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/auth/login">
                            <Button variant="ghost" className="text-gray-300 hover:text-white">Log In</Button>
                        </Link>
                        <Link href="/auth/signup">
                            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">
                                Start Earning
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
                {/* Background Elements */}
                <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-30 pointer-events-none animate-pulse" />

                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-4">
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                        Now accepting new workers
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Unlock Your <br />
                        <span className="text-primary">Earning Potential</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Secure, managed survey worker accounts and instant payouts — powered by ARS Surveys.
                        Join thousands of verified earners today.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link href="/auth/signup">
                            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-[0_0_40px_-10px_rgba(76,175,80,0.5)] border border-white/20">
                                Start Earning Today
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="#pricing">
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-white/10 hover:bg-white/5 text-white">
                                View Packages
                            </Button>
                        </Link>
                    </div>

                    {/* Glass Card Mockup */}
                    <div className="mt-16 relative mx-auto max-w-5xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-20" />
                        <Card variant="glass" className="border-opacity-50 bg-opacity-30 backdrop-blur-xl transform rotate-x-12 perspective-1000">
                            <CardHeader className="border-b border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                            </CardHeader>
                            <CardContent className="h-[300px] flex items-center justify-center text-gray-500 font-mono text-sm">
                                {/* Abstract UI Representation */}
                                <div className="grid grid-cols-3 gap-4 w-full h-full p-4 opacity-50">
                                    <div className="bg-white/5 rounded-lg col-span-2 h-32 animate-pulse" />
                                    <div className="bg-primary/10 rounded-lg h-32 animate-pulse" />
                                    <div className="bg-white/5 rounded-lg h-40 animate-pulse" />
                                    <div className="bg-white/5 rounded-lg col-span-2 h-40 animate-pulse" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose ARS Surveys?</h2>
                        <p className="text-gray-400">Built for reliability, speed, and trust.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card variant="glass" className="bg-white/5 hover:bg-white/10 transition-colors">
                            <CardHeader>
                                <Shield className="w-10 h-10 text-primary mb-2" />
                                <CardTitle>Secure Accounts</CardTitle>
                                <CardDescription>Managed VPS and verified identities.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                We provide premium, residential IP accounts that prevent bans and ensure consistent survey availability.
                            </CardContent>
                        </Card>
                        <Card variant="glass" className="bg-white/5 hover:bg-white/10 transition-colors">
                            <CardHeader>
                                <BarChart3 className="w-10 h-10 text-secondary mb-2" />
                                <CardTitle>Instant Payouts</CardTitle>
                                <CardDescription>Withdraw to bKash, Nagad, or Rocket.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                No more waiting weeks. Our automated system processes verified withdrawals within 24 hours.
                            </CardContent>
                        </Card>
                        <Card variant="glass" className="bg-white/5 hover:bg-white/10 transition-colors">
                            <CardHeader>
                                <Globe className="w-10 h-10 text-blue-400 mb-2" />
                                <CardTitle>Global Access</CardTitle>
                                <CardDescription>Work from anywhere with our tools.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                Our cloud-based command center gives you access to survey opportunities from top providers globally.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-transparent to-black/40">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Start Your Journey</h2>
                        <p className="text-gray-400">Choose the package that fits your goals.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Starter 1 */}
                        <Card variant="glass" className="relative overflow-hidden border-white/10">
                            <CardHeader>
                                <CardTitle>Starter</CardTitle>
                                <div className="baseline mt-4">
                                    <span className="text-4xl font-bold tracking-tight text-white">$20</span>
                                    <span className="text-sm font-semibold text-gray-400">/one-time</span>
                                </div>
                                <CardDescription>Perfect for beginners testing the waters.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-3 text-sm text-gray-300">
                                    <li className="flex items-center"><Check className="text-primary w-4 h-4 mr-2" /> Basic Account Setup</li>
                                    <li className="flex items-center"><Check className="text-primary w-4 h-4 mr-2" /> Shared VPS Access</li>
                                    <li className="flex items-center"><Check className="text-primary w-4 h-4 mr-2" /> Weekly Payouts</li>
                                    <li className="flex items-center"><Check className="text-primary w-4 h-4 mr-2" /> Standard Support</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant="outline">Choose Starter</Button>
                            </CardFooter>
                        </Card>

                        {/* Starter 2 - Premium */}
                        <Card variant="glass" className="relative overflow-hidden border-primary/50 bg-primary/5">
                            <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                                MOST POPULAR
                            </div>
                            <CardHeader>
                                <CardTitle className="text-primary">Pro Earner</CardTitle>
                                <div className="baseline mt-4">
                                    <span className="text-4xl font-bold tracking-tight text-white">$50</span>
                                    <span className="text-sm font-semibold text-gray-400">/one-time</span>
                                </div>
                                <CardDescription>For serious workers who want maximum earnings.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-3 text-sm text-gray-300">
                                    <li className="flex items-center"><Check className="text-primary w-4 h-4 mr-2" /> Premium Account Setup</li>
                                    <li className="flex items-center"><Check className="text-primary w-4 h-4 mr-2" /> Dedicated Residential IP</li>
                                    <li className="flex items-center"><Check className="text-primary w-4 h-4 mr-2" /> Instant Payouts</li>
                                    <li className="flex items-center"><Check className="text-primary w-4 h-4 mr-2" /> Priority 24/7 Support</li>
                                    <li className="flex items-center"><Check className="text-primary w-4 h-4 mr-2" /> Link Analyzer Tool Access</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">Get Started</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/10 bg-black/40 text-center text-gray-500 text-sm">
                <p>&copy; 2024 ARS Surveys. All rights reserved.</p>
                <div className="flex justify-center gap-4 mt-4">
                    <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                </div>
            </footer>
        </main>
    )
}
