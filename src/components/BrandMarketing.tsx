'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BrandMarketing = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const pagesWrapperRef = useRef<HTMLDivElement>(null);
    const page1Ref = useRef<HTMLDivElement>(null);
    const page2Ref = useRef<HTMLDivElement>(null);
    const leftTextRef = useRef<HTMLDivElement>(null);
    const rightTextRef = useRef<HTMLDivElement>(null);

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

            // Initial states
            gsap.set(page1Ref.current, { rotation: 0 });
            gsap.set(page2Ref.current, { rotation: 0 });
            gsap.set(pagesWrapperRef.current, { scale: 1 });
            gsap.set(leftTextRef.current, { autoAlpha: 0, x: 50 });
            gsap.set(rightTextRef.current, { autoAlpha: 0, x: -50 });

            // Animation Sequence
            tl
                // Phase 1: Rotate Pages
                .to(page1Ref.current, {
                    rotation: -15,
                    duration: 1,
                    ease: "power2.inOut"
                })
                .to(page2Ref.current, {
                    rotation: 15,
                    duration: 1,
                    ease: "power2.inOut"
                }, "<") // Run at same time
                
                // Phase 2: Shrink Container
                .to(pagesWrapperRef.current, {
                    scale: 0.7,
                    duration: 1,
                    ease: "power2.inOut"
                })

                // Phase 3: Reveal Text
                .to(leftTextRef.current, {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.5,
                    ease: "power2.out"
                }, "-=0.5")
                .to(rightTextRef.current, {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.5,
                    ease: "power2.out"
                }, "<");
        });

        // Mobile Animation (Simplified)
        mm.add("(max-width: 767px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });

             // Initial states
             gsap.set(page1Ref.current, { rotation: 0 });
             gsap.set(page2Ref.current, { rotation: 0 });
             gsap.set(pagesWrapperRef.current, { scale: 0.8 }); // Start smaller on mobile
             gsap.set(leftTextRef.current, { autoAlpha: 0, y: 20 });
             gsap.set(rightTextRef.current, { autoAlpha: 0, y: 20 });
 
             // Animation Sequence
             tl
                 // Phase 1: Rotate Pages
                 .to(page1Ref.current, {
                     rotation: -10,
                     duration: 1,
                     ease: "power2.inOut"
                 })
                 .to(page2Ref.current, {
                     rotation: 10,
                     duration: 1,
                     ease: "power2.inOut"
                 }, "<") 
                 
                 // Phase 2: Reveal Text (Vertical stack on mobile usually, but keeping side/side logic or stacking)
                 .to(leftTextRef.current, {
                     autoAlpha: 1,
                     y: 0,
                     duration: 0.5
                 })
                 .to(rightTextRef.current, {
                     autoAlpha: 1,
                     y: 0,
                     duration: 0.5
                 }, "<");
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full h-[250vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-white dark:bg-black flex items-center justify-center">
                
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 h-full flex flex-col md:flex-row items-center justify-center">
                    
                    {/* Left Text: Brand Development */}
                    <div ref={leftTextRef} className="absolute md:left-[10%] top-[15%] md:top-auto md:w-1/4 text-center md:text-right z-30 opacity-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Brand<br/>Development
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Building identities that resonate and endure. We craft the visual and narrative soul of your business.
                        </p>
                    </div>

                    {/* Center Pages */}
                    <div ref={pagesWrapperRef} className="relative w-[300px] h-[400px] md:w-[400px] md:h-[550px] flex items-center justify-center z-20">
                        {/* Page 2 (Back) */}
                        <div ref={page2Ref} className="absolute inset-0 z-10 origin-bottom-right">
                            <Image
                                src="/assets/page2.png"
                                alt="Marketing Strategy"
                                fill
                                className="object-contain drop-shadow-xl"
                                sizes="(max-width: 768px) 300px, 400px"
                                priority
                            />
                        </div>
                        
                        {/* Page 1 (Front) */}
                        <div ref={page1Ref} className="absolute inset-0 z-20 origin-bottom-left">
                            <Image
                                src="/assets/page1.png"
                                alt="Brand Identity"
                                fill
                                className="object-contain drop-shadow-2xl"
                                sizes="(max-width: 768px) 300px, 400px"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Text: Marketing */}
                    <div ref={rightTextRef} className="absolute md:right-[10%] bottom-[15%] md:bottom-auto md:w-1/4 text-center md:text-left z-30 opacity-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Marketing<br/>Strategy
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Data-driven campaigns that convert. We amplify your message to reach the right audience at the right time.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BrandMarketing;
