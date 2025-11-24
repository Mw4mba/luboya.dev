'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Home, Briefcase, Sparkles, MessageCircle, Mail, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent body scroll when menu is open on mobile
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const navLinks = [
        { href: '/', label: 'Home', Icon: Home },
        { href: '/offering', label: 'Offering', Icon: Briefcase },
        { href: '/showcase', label: 'Showcase', Icon: Sparkles },
        { href: '/testimonials', label: 'Testimonials', Icon: MessageCircle },
        { href: '/contact', label: 'Contact', Icon: Mail },
    ];

    const isActive = (path: string) => pathname === path;

    if (!mounted) {
        return null;
    }

    return (
        <>
            {/* Theme Toggle - Top Right */}
            <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 group"
                aria-label="Toggle Theme"
            >
                {resolvedTheme === 'light' ? (
                    <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-yellow-500 transition-colors" />
                ) : (
                    <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-400 transition-colors" />
                )}
            </button>

            {/* Desktop Navbar - Visible only on sm+ */}
            <nav className="hidden sm:block fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl">
                <div className="relative bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-full px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.04)] overflow-hidden transition-all duration-300">
                    <div className="flex items-center justify-between relative z-10">
                        {/* Logo */}
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="flex-shrink-0 relative w-12 h-12 transition-opacity hover:opacity-70 duration-200 active:scale-95 overflow-hidden"
                            aria-label="Luboya Home"
                        >
                            <Image
                                src={resolvedTheme === 'dark' ? '/lblgw.svg' : '/lblg.svg'}
                                alt="Luboya Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation Links */}
                        <div className="flex absolute left-24 right-24 items-center justify-center gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${isActive(link.href)
                                        ? 'bg-black dark:bg-white text-white dark:text-black'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Placeholder for symmetry or extra action */}
                        <div className="w-12"></div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar Container - Visible only on sm- */}
            <div className="sm:hidden fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            layoutId="mobile-nav"
                            className="relative w-full max-w-[90%] bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-full px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.04)] overflow-hidden"
                            onClick={() => setIsOpen(true)}
                        >
                            <motion.div
                                className="flex items-center justify-between relative z-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {/* Logo */}
                                <div className="relative w-10 h-10">
                                    <Image
                                        src={resolvedTheme === 'dark' ? '/lblgw.svg' : '/lblg.svg'}
                                        alt="Luboya Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>

                                {/* Hamburger Button */}
                                <button
                                    className="flex-shrink-0 relative w-9 h-9 flex flex-col items-center justify-center gap-1.5"
                                    aria-label="Open menu"
                                >
                                    <span className="w-4 h-[1.5px] bg-gray-900 dark:bg-gray-100 rounded-full"></span>
                                    <span className="w-4 h-[1.5px] bg-gray-900 dark:bg-gray-100 rounded-full"></span>
                                    <span className="w-4 h-[1.5px] bg-gray-900 dark:bg-gray-100 rounded-full"></span>
                                </button>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            layoutId="mobile-nav"
                            className="relative w-full max-w-sm bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-3xl shadow-[0_20px_60px_rgb(0,0,0,0.12)] dark:shadow-[0_20px_60px_rgb(255,255,255,0.12)] overflow-hidden"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                {/* Menu Header */}
                                <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-900">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Navigation
                                        </span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsOpen(false);
                                            }}
                                            className="text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>

                                {/* Menu Items */}
                                <div className="p-3">
                                    {navLinks.map((link) => {
                                        const IconComponent = link.Icon;
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl text-base font-medium transition-all duration-200 mb-1 last:mb-0 ${isActive(link.href)
                                                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-md'
                                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900'
                                                    }`}
                                            >
                                                <IconComponent className="w-5 h-5" />
                                                <span>{link.label}</span>
                                                {isActive(link.href) && (
                                                    <svg className="ml-auto w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </Link>
                                        );
                                    })}
                                </div>

                                {/* Menu Footer */}
                                <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-900">
                                    <p className="text-xs text-center text-gray-400 dark:text-gray-600">
                                        Luboya © 2025
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="sm:hidden fixed inset-0 bg-black/20 dark:bg-white/10 backdrop-blur-md z-40"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}