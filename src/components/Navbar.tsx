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

            {/* Desktop & Mobile Navbar */}
            <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl">
                <div className="relative bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-full px-4 sm:px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.04)] overflow-hidden transition-all duration-300">
                    <div className="flex items-center justify-between relative z-10">
                        {/* Logo - Left Side - Shrunk Size */}
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="flex-shrink-0 relative w-10 h-10 sm:w-12 sm:h-12 transition-opacity hover:opacity-70 duration-200 active:scale-95 overflow-hidden"
                            aria-label="Luboya Home"
                        >
                            <Image
                                src={resolvedTheme === 'dark' ? '/lblgw.svg' : '/lblg.svg'}
                                alt="Luboya Logo"
                                fill
                                className="object-contain scale-125"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation Links - Hidden on mobile, slides in on desktop */}
                        <div
                            className={`hidden sm:flex absolute left-24 right-24 items-center justify-center gap-2 transition-all duration-400 ease-in-out ${isOpen
                                ? 'opacity-100 translate-x-0 pointer-events-auto'
                                : 'opacity-0 translate-x-full pointer-events-none'
                                }`}
                        >
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${isActive(link.href)
                                        ? 'bg-black dark:bg-white text-white dark:text-black'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
                                        }`}
                                    style={{
                                        transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Hamburger Button - Right Side */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex-shrink-0 relative w-9 h-9 sm:w-10 sm:h-10 flex flex-col items-center justify-center gap-1.5 group hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-all duration-200 active:scale-95"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            <span
                                className={`w-4 sm:w-5 h-[1.5px] bg-gray-900 dark:bg-gray-100 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px] sm:translate-y-2' : ''
                                    }`}
                            ></span>
                            <span
                                className={`w-4 sm:w-5 h-[1.5px] bg-gray-900 dark:bg-gray-100 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                                    }`}
                            ></span>
                            <span
                                className={`w-4 sm:w-5 h-[1.5px] bg-gray-900 dark:bg-gray-100 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px] sm:-translate-y-2' : ''
                                    }`}
                            ></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Popup Menu - Only visible on mobile (< 640px) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
                        className="sm:hidden fixed bottom-24 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm origin-bottom"
                    >
                        <div className="bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-3xl shadow-[0_20px_60px_rgb(0,0,0,0.12)] dark:shadow-[0_20px_60px_rgb(255,255,255,0.12)] overflow-hidden">
                            {/* Menu Header */}
                            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-900">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Navigation
                                    </span>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>

                            {/* Menu Items */}
                            <div className="p-3">
                                {navLinks.map((link, index) => {
                                    const IconComponent = link.Icon;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl text-base font-medium transition-all duration-200 mb-1 last:mb-0 ${isActive(link.href)
                                                ? 'bg-black dark:bg-white text-white dark:text-black shadow-md scale-[1.02]'
                                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 active:scale-[0.98]'
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

                            {/* Menu Footer - Optional branding */}
                            <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-900">
                                <p className="text-xs text-center text-gray-400 dark:text-gray-600">
                                    Luboya © 2025
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Overlay with enhanced blur */}
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

            {/* Desktop Overlay - Subtle */}
            {isOpen && (
                <div
                    className="hidden sm:block fixed inset-0 bg-black/5 dark:bg-white/5 backdrop-blur-[1px] z-40 transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}