import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(useGSAP, MotionPathPlugin, DrawSVGPlugin);

const BuildCard = () => {

    const [isCardHovered, setIsCardHovered] = useState(false);
    const [stopPulse, setStopPulse] = useState(false);

    const coloredPathRef = useRef(null);
    const bulletRef = useRef(null);

    let growthTL = useRef(null);

    useGSAP(() => {
    
        // Get Needed Lines
        const lines = Array.from(document.querySelectorAll(".dashed-line"));

        // Show Growth Animation
        growthTL.current = gsap.timeline({ paused: true });

        // Animate Lines Behind
        growthTL.current.to(lines, {
            y: 22,
            duration: 0.6,
            ease: "expo.inOut",
            stagger: 0.06,
        });

        // Draw Colored Path
        growthTL.current.fromTo(coloredPathRef.current, 
            { drawSVG: "65%" },
            {   
                drawSVG: "100%",
                duration: 1.26,
                ease: "expo.inOut",

                onStart: () => setStopPulse(false)
            },
            "-=1"
        );
        
        growthTL.current.to(bulletRef.current, {
            duration: 1.26,
            ease: "expo.inOut",
            opacity: 1,
        }, "<");


    }, []);

    // Handle Animation Play Based on "isCardHovered"
    useEffect(() => {
        
        isCardHovered 
        ? growthTL.current.play()
        : growthTL.current.reverse()

    }, [isCardHovered]);

    return (
        <div 
            className='about-card'
            onMouseEnter={() => setIsCardHovered(true)}    
            onMouseLeave={() => setIsCardHovered(false)}    
        >
            
            <div className="absolute z-1 top-1/2 left-1/2 -translate-1/2 w-[calc(100%-3px)] h-[calc(100%-3px)] pointer-events-none overflow-hidden rounded-xl">
            
                {/* Text */}
                <div className="absolute z-2 bottom-8 left-1/2 -translate-x-1/2 w-full h-auto flex-center-all">
                    <div className="relative w-full h-auto flex-col-center gap-1">
                        <h3 
                            style={{ wordSpacing: "4px" }} 
                            className={clsx("gradient-heading text-[22.5px] max-md:text-[20px] font-semibold")}
                        >
                            Websites & Web-Apps ⇾ Acheive <span className="hidden sm:inline">Your</span> Goals
                        </h3>

                        <h4
                            style={{ wordSpacing: "2px", fontStyle: "italic" }} 
                            className="font-inter text-[17px] max-md:text-[16px] font-medium text-[rgb(150,150,150)] opacity-85 text-center"
                        >More than a cool design — built with purpose</h4>
                    </div>
                </div>

                {/* Animated Icon Layer */}
                <div className="absolute z-1 top-1/2 left-1/2 -translate-1/2 w-full max-xl:w-[calc(100%+500px)] h-full flex-center-all">

                    {/* Main Holder */}
                    <div className="growth-svg-holder absolute w-full h-[65%] top-0 left-1/2 -translate-x-1/2">
                    
                        <svg
                            width={500}
                            height={205}
                            viewBox="0 0 500 205"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-1/2 left-1/2 -translate-1/2 w-[calc(100%+100px)] h-[calc(100%+50px)] "
                        >
                            <g clipPath="url(#clip0_32_2)" className="z-1">
                                <line
                                    x1={87.5}
                                    y1={-55.0009}
                                    x2={87.5}
                                    y2={244.001}
                                    stroke="url(#paint0_linear_32_2)"
                                    strokeOpacity={0.14}
                                    strokeWidth={2}
                                    strokeDasharray="10 10"
                                    className="dashed-line"
                                />
                                <line
                                    x1={317.5}
                                    y1={-55.0009}
                                    x2={317.5}
                                    y2={244.001}
                                    stroke="url(#paint1_linear_32_2)"
                                    strokeOpacity={0.14}
                                    strokeWidth={2}
                                    strokeDasharray="10 10"
                                    className="dashed-line"
                                />
                                <line
                                    x1={409.5}
                                    y1={-55.0009}
                                    x2={409.5}
                                    y2={244.001}
                                    stroke="url(#paint2_linear_32_2)"
                                    strokeOpacity={0.14}
                                    strokeWidth={2}
                                    strokeDasharray="10 10"
                                    className="dashed-line"
                                />
                                <line
                                    x1={363.5}
                                    y1={-55.0009}
                                    x2={363.5}
                                    y2={244.001}
                                    stroke="url(#paint3_linear_32_2)"
                                    strokeOpacity={0.14}
                                    strokeWidth={2}
                                    strokeDasharray="10 10"
                                    className="dashed-line"
                                />
                                <line
                                    x1={271.5}
                                    y1={-55.0009}
                                    x2={271.5}
                                    y2={244.001}
                                    stroke="url(#paint4_linear_32_2)"
                                    strokeOpacity={0.14}
                                    strokeWidth={2}
                                    strokeDasharray="10 10"
                                    className="dashed-line"
                                />
                                <line
                                    x1={225.5}
                                    y1={-55.0009}
                                    x2={225.5}
                                    y2={244.001}
                                    stroke="url(#paint5_linear_32_2)"
                                    strokeOpacity={0.14}
                                    strokeWidth={2}
                                    strokeDasharray="10 10"
                                    className="dashed-line"
                                />
                                <line
                                    x1={179.5}
                                    y1={-55.0009}
                                    x2={179.5}
                                    y2={244.001}
                                    stroke="url(#paint6_linear_32_2)"
                                    strokeOpacity={0.14}
                                    strokeWidth={2}
                                    strokeDasharray="10 10"
                                    className="dashed-line"
                                />
                                <line
                                    x1={133.5}
                                    y1={-55.0009}
                                    x2={133.5}
                                    y2={244.001}
                                    stroke="url(#paint7_linear_32_2)"
                                    strokeOpacity={0.14}
                                    strokeWidth={2}
                                    strokeDasharray="10 10"
                                    className="dashed-line"
                                />
                                <path
                                    d="M0 247C0 247 149.022 189.814 189 149.5C197.679 140.748 199.609 132.856 209.5 125.5C232.184 108.63 257.591 133.085 281.5 118C302.755 104.59 298.858 81.2835 318 65C342.945 43.7804 375.688 60.786 396.5 35.5C409.427 19.7939 428.5 -61.5 428.5 -61.5"
                                    stroke="#2C2C2C"
                                    strokeWidth={4}
                                    strokeLinecap="round"
                                />
                                <path
                                    ref={coloredPathRef}
                                    d="M0 247C0 247 149.022 189.814 189 149.5C197.679 140.748 199.609 132.856 209.5 125.5C232.184 108.63 257.591 133.085 281.5 118C302.755 104.59 298.858 81.2835 318 65"
                                    stroke="url(#paint8_linear_32_2)"
                                    strokeWidth={4}
                                    strokeLinecap="round"
                                />
                                <g filter="url(#filter0_d_32_2)">
                                    <circle 
                                        ref={bulletRef}
                                        cx={318} 
                                        cy={65} 
                                        r={5} 
                                        fill="#1A9FD2"
                                        className={clsx("animate-pulse", stopPulse ? "animate-paused" : "animate-running")}
                                    />
                                </g>
                            </g>
                            <defs>
                            <filter
                                id="filter0_d_32_2"
                                x={304}
                                y={51}
                                width={28}
                                height={28}
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                                />
                                <feMorphology
                                radius={8}
                                operator="dilate"
                                in="SourceAlpha"
                                result="effect1_dropShadow_32_2"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation={0.5} />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.290196 0 0 0 0 0.584314 0 0 0 0 0.737255 0 0 0 0.2 0"
                                />
                                <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_32_2"
                                />
                                <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_32_2"
                                result="shape"
                                />
                            </filter>
                            <linearGradient
                                id="paint0_linear_32_2"
                                x1={86}
                                y1={-55.0009}
                                x2={86}
                                y2={244.001}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#999999" stopOpacity={0} />
                                <stop offset={0.5} stopColor="white" stopOpacity={0.45} />
                                <stop offset={1} stopColor="#999999" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_32_2"
                                x1={316}
                                y1={-55.0009}
                                x2={316}
                                y2={244.001}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#999999" stopOpacity={0} />
                                <stop offset={0.5} stopColor="white" stopOpacity={0.45} />
                                <stop offset={1} stopColor="#999999" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient
                                id="paint2_linear_32_2"
                                x1={408}
                                y1={-55.0009}
                                x2={408}
                                y2={244.001}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#999999" stopOpacity={0} />
                                <stop offset={0.5} stopColor="white" stopOpacity={0.45} />
                                <stop offset={1} stopColor="#999999" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient
                                id="paint3_linear_32_2"
                                x1={362}
                                y1={-55.0009}
                                x2={362}
                                y2={244.001}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#999999" stopOpacity={0} />
                                <stop offset={0.5} stopColor="white" stopOpacity={0.45} />
                                <stop offset={1} stopColor="#999999" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient
                                id="paint4_linear_32_2"
                                x1={270}
                                y1={-55.0009}
                                x2={270}
                                y2={244.001}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#999999" stopOpacity={0} />
                                <stop offset={0.5} stopColor="white" stopOpacity={0.45} />
                                <stop offset={1} stopColor="#999999" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient
                                id="paint5_linear_32_2"
                                x1={224}
                                y1={-55.0009}
                                x2={224}
                                y2={244.001}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#999999" stopOpacity={0} />
                                <stop offset={0.5} stopColor="white" stopOpacity={0.45} />
                                <stop offset={1} stopColor="#999999" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient
                                id="paint6_linear_32_2"
                                x1={178}
                                y1={-55.0009}
                                x2={178}
                                y2={244.001}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#999999" stopOpacity={0} />
                                <stop offset={0.5} stopColor="white" stopOpacity={0.45} />
                                <stop offset={1} stopColor="#999999" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient
                                id="paint7_linear_32_2"
                                x1={132}
                                y1={-55.0009}
                                x2={132}
                                y2={244.001}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#999999" stopOpacity={0} />
                                <stop offset={0.5} stopColor="white" stopOpacity={0.45} />
                                <stop offset={1} stopColor="#999999" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient
                                id="paint8_linear_32_2"
                                x1={438}
                                y1={-88.9999}
                                x2={-0.0000153384}
                                y2={247}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#1A9FD2" />
                                <stop offset={0.5} stopColor="#4A95BC" />
                                <stop offset={1} stopColor="#101F27" />
                            </linearGradient>
                            <clipPath id="clip0_32_2">
                                <rect width={500} height={205} fill="white" />
                            </clipPath>
                            </defs>
                        </svg>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default BuildCard;