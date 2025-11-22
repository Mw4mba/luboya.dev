import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen relative bg-white dark:bg-black transition-colors duration-300 flex flex-col">
            {/* Geist-style subtle gradient background - Fixed to cover whole page */}
            <div className="fixed inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950 opacity-50 pointer-events-none">
                {/* Subtle grid pattern - Increased opacity significantly */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-70"></div>

                {/* Subtle accent glow - Decreased opacity */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/2 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 flex-grow flex flex-col justify-center py-20">

                {/* Header Section: Logo + Tagline */}
                <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-12 mb-16 md:mb-24">
                    {/* Large Logo */}
                    <div className="relative w-48 h-48 md:w-72 md:h-72 flex-shrink-0">
                        <Image
                            src="/lblg.svg"
                            alt="Luboya Logo"
                            fill
                            className="object-contain dark:hidden"
                            priority
                        />
                        <Image
                            src="/lblgw.svg"
                            alt="Luboya Logo"
                            fill
                            className="object-contain hidden dark:block"
                            priority
                        />
                    </div>

                    {/* Tagline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-tight text-center md:text-left">
                        The digital<br />image<br />specialists
                    </h1>
                </div>

                {/* Buttons Section - Compact, Rectangular, No Icons, No Subtext */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto md:mx-0">
                    <Link
                        href="/offering"
                        className="group relative flex items-center justify-center py-4 px-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                        <span className="text-2xl font-semibold text-gray-900 dark:text-white">Offerings</span>
                    </Link>

                    <Link
                        href="/showcase"
                        className="group relative flex items-center justify-center py-4 px-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                        <span className="text-2xl font-semibold text-gray-900 dark:text-white">Our Work</span>
                    </Link>

                    <Link
                        href="/contact"
                        className="group relative flex items-center justify-center py-4 px-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                        <span className="text-2xl font-semibold text-gray-900 dark:text-white">Let's Connect</span>
                    </Link>
                </div>
            </div>

            <Navbar />
        </main>
    );
}
