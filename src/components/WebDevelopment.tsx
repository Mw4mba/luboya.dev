'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WebDevelopment = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);
    const laptopRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
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
                    end: "bottom bottom",
                    scrub: 1,
                }
            });

            // Initial state
            gsap.set(laptopRef.current, {
                scale: 1.2,
                xPercent: 0,
                opacity: 0,
                y: 50
            });
            gsap.set(textRef.current, { autoAlpha: 0, x: -50 });

            // Screen content initial state
            gsap.set(screenLabelRef.current, { autoAlpha: 1, y: 0 });
            gsap.set(screenLogoRef.current, { scale: 1 });

            // Animation sequence
            // Phase 1: Fade In
            tl.to(laptopRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            })
                // Phase 2: Screen Animation (Label disappears, Logo enlarges)
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
                // Phase 3: Shrink and Move Right
                .to(laptopRef.current, {
                    scale: 0.8,
                    xPercent: 35, // Move to right
                    ease: "power2.inOut",
                    duration: 1
                })
                // Phase 4: Text Reveal
                .to(textRef.current, {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.5,
                    ease: "power2.out"
                }, "-=0.5");
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

            gsap.set(laptopRef.current, { scale: 1, yPercent: 0, opacity: 0 });
            gsap.set(textRef.current, { autoAlpha: 0, y: 30 });

            tl.to(laptopRef.current, {
                opacity: 1,
                duration: 0.3
            })
                .to(laptopRef.current, {
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
        // Outer Container: Defines the total scroll height (250vh approx)
        <div ref={containerRef} className="relative w-full h-[250vh]">
            {/* Sticky Wrapper */}
            <div ref={stickyRef} className="sticky top-0 h-screen w-full overflow-hidden bg-white dark:bg-black flex items-center justify-center">

                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
                </div>

                {/* Content Container */}
                <div className="container mx-auto px-6 relative z-10 h-full flex flex-col md:flex-row items-center justify-center">

                    {/* Text Content - Left side on desktop */}
                    <div ref={textRef} className="absolute md:relative md:mr-12 max-w-lg text-center md:text-left mt-64 md:mt-0 z-10 opacity-0 order-2 md:order-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Web<br />Development
                        </h2>

                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            We craft stunning, responsive websites that captivate audiences.
                            Using modern frameworks and cutting-edge design principles, we ensure your online presence is powerful, fast, and accessible.
                        </p>

                        <div className="mt-8">
                            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors duration-300">
                                View Projects
                            </button>
                        </div>
                    </div>

                    {/* Laptop Asset - Right side on desktop */}
                    <div ref={laptopRef} className="relative w-[90%] md:w-[800px] aspect-video flex-shrink-0 z-20 order-1 md:order-2">
                        <Image
                            src="/assets/laptop-asset.png"
                            alt="Web Development"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />

                        {/* Screen Content Overlay */}
                        {/* Positioned to fit the laptop screen area. 
                            Laptop screen is roughly centered. 
                            Adjusting top/left/width/height based on typical laptop asset aspect ratio. */}
                        <div ref={screenContentRef} className="absolute top-[11%] left-[13%] w-[74%] h-[78%] flex flex-col items-center justify-center z-30 overflow-hidden">
                            <div ref={screenLogoRef} className="relative w-24 h-24 mb-4">
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
                            <h3 ref={screenLabelRef} className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                                Web<br />Development
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WebDevelopment;
