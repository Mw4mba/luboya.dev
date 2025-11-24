'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ApplicationDevelopment = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);
    const phoneRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const screenContentRef = useRef<HTMLDivElement>(null);
    const screenLogoRef = useRef<HTMLDivElement>(null);
    const screenLabelRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        // Desktop Animation
        mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom", // Animate while the container is in view
                    scrub: 1,
                    // pin: true, // REMOVED: Using CSS sticky instead
                }
            });

            // Initial state
            gsap.set(phoneRef.current, {
                scale: 1.3,
                rotationX: 20,
                rotationY: 0,
                rotationZ: 0,
                xPercent: 0,
                yPercent: 0,
                transformPerspective: 1000,
            });
            gsap.set(textRef.current, { autoAlpha: 0, y: 50 });
            gsap.set(logoRef.current, { rotation: 0 });

            // Screen content initial state
            gsap.set(screenLabelRef.current, { autoAlpha: 1, y: 0 });
            gsap.set(screenLogoRef.current, { scale: 1 });

            // Phase 1: Un-tilt
            tl.to(phoneRef.current, {
                rotationX: 0,
                ease: "power2.out",
                duration: 1
            })
                // Phase 2: Screen Animation
                .to(screenLabelRef.current, {
                    y: -50,
                    autoAlpha: 0,
                    duration: 0.5,
                    ease: "power2.in"
                })
                .to(screenLogoRef.current, {
                    scale: 1.5,
                    duration: 0.5,
                    ease: "power2.out"
                }, "<")
                // Phase 3: Shrink and Move Left
                .to(phoneRef.current, {
                    scale: 0.8,
                    xPercent: -35,
                    ease: "power2.inOut",
                    duration: 1
                })
                // Phase 4: Reveal Side Text & Rotate Main Logo
                .to(textRef.current, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out"
                }, "-=0.5")
                .to(logoRef.current, {
                    rotation: -45,
                    duration: 0.7,
                    ease: "back.out(1.7)"
                }, "<");
        });

        // Mobile Animation
        mm.add("(max-width: 767px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });

            gsap.set(phoneRef.current, {
                scale: 1,
                rotationX: 10,
                transformPerspective: 1000
            });
            gsap.set(textRef.current, { autoAlpha: 0, y: 30 });

            tl.to(phoneRef.current, {
                rotationX: 0,
                scale: 0.6,
                yPercent: -35, // Move to top
                ease: "power2.inOut",
                duration: 1
            })
                .to(textRef.current, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5
                }, "-=0.3");
        });

    }, { scope: containerRef });

    return (
        // Outer Container: Defines the total scroll height (300vh approx)
        <div ref={containerRef} className="relative w-full h-[300vh]">
            {/* Sticky Wrapper: Stays fixed while scrolling through the container */}
            <div ref={stickyRef} className="sticky top-0 h-screen w-full overflow-hidden bg-gray-50 dark:bg-gray-900 flex items-center justify-center perspective-1000">

                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
                </div>

                {/* Content Container */}
                <div className="container mx-auto px-6 relative z-10 h-full flex flex-col md:flex-row items-center justify-center" style={{ perspective: '1000px' }}>

                    {/* Phone Asset Container */}
                    <div ref={phoneRef} className="relative w-[300px] h-[600px] md:w-[400px] md:h-[800px] flex-shrink-0 z-20 will-change-transform transform-style-3d">
                        <Image
                            src="/assets/phone-asset.png"
                            alt="Application Development"
                            fill
                            className="object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                            priority
                        />

                        {/* Screen Content Overlay */}
                        <div ref={screenContentRef} className="absolute top-[12%] left-[7%] w-[86%] h-[76%] flex flex-col items-center justify-center z-30 overflow-hidden">
                            <div ref={screenLogoRef} className="relative w-20 h-20 mb-4">
                                <Image
                                    src="/lblg.svg"
                                    alt="Screen Logo"
                                    fill
                                    className="object-contain dark:hidden"
                                />
                                <Image
                                    src="/lblgw.svg"
                                    alt="Screen Logo"
                                    fill
                                    className="object-contain hidden dark:block"
                                />
                            </div>
                            <h3 ref={screenLabelRef} className="text-xl font-bold text-gray-900 dark:text-white text-center">
                                Application<br />Development
                            </h3>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div ref={textRef} className="absolute md:relative md:ml-12 max-w-lg text-center md:text-left mt-64 md:mt-0 z-10 opacity-0">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                            {/* Logo that rotates */}
                            <div ref={logoRef} className="relative w-12 h-12 md:w-16 md:h-16">
                                <Image
                                    src="/lblg.svg"
                                    alt="Logo"
                                    fill
                                    className="object-contain dark:hidden"
                                />
                                <Image
                                    src="/lblgw.svg"
                                    alt="Logo"
                                    fill
                                    className="object-contain hidden dark:block"
                                />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                                Application<br />Development
                            </h2>
                        </div>

                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            We build intuitive, high-performance mobile applications that deliver seamless user experiences.
                            From native iOS and Android apps to cross-platform solutions, our code is robust, scalable, and future-proof.
                        </p>

                        <div className="mt-8">
                            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ApplicationDevelopment;
