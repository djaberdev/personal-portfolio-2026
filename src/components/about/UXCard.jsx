import { useState, useRef, useEffect } from "react";

import clsx from "clsx";

import { RiLayout4Fill, RiMouseLine, RiPaletteLine, RiStarFill } from "@remixicon/react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const UXCard = () => {

    const [isCardHovered, setIsCardHovered] = useState(false);

    // Draw User Smile Animation
    const smilePathRef = useRef(null);
    let drawTweenRef = useRef(null);

    useGSAP(() => {

        // Initial State
        gsap.set(smilePathRef.current, { drawSVG: 0 });

        // The Animation Logic
        drawTweenRef.current = gsap.to(smilePathRef.current, {

            drawSVG: true,

            duration: 0.8,
            ease: "expo.inOut",

            paused: true,

        });

    }, []);

    // Handle Animation Play Based on "isCardHovered"
    useEffect(() => {
        
        isCardHovered 
        ? drawTweenRef.current.play()
        : drawTweenRef.current.reverse()


    }, [isCardHovered]);

    return (
        <div 
            className='about-card'
            onMouseEnter={() => setIsCardHovered(true)}    
            onMouseLeave={() => setIsCardHovered(false)}    
        >
            
            <div className="absolute z-1 top-1/2 left-1/2 -translate-1/2 w-[calc(100%-3px)] h-[calc(100%-3px)] pointer-events-none overflow-hidden rounded-xl">
            
                {/* Icon Layer */}
                <div className="absolute z-3 top-1/2 left-1/2 -translate-1/2 w-full h-full flex-center-all">

                    {/* User Circle */}
                    <div 
                        className={clsx("relative w-28 h-28 rounded-full flex-center-all bg-transparent -translate-y-6")}
                    >
                        
                        <svg
                            viewBox="0 0 100 85"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={clsx("w-7/10 max-xl:w-9/10 max-lg:w-full h-7/10 max-xl:h-9/10 max-lg:-hfull -translate-y-4.5 duration-700", isCardHovered ? "scale-140 max-xl:scale-150 max-lg:scale-130" : "scale-100")}
                        >

                            {/* Body */}
                            <path
                                d="M27.2705 57H72.7295C86.6859 57 98 68.3141 98 82.2705C97.9999 82.6733 97.6733 82.9999 97.2705 83H2.72949C2.32667 82.9999 2.00014 82.6733 2 82.2705C2 68.5321 12.9632 57.3537 26.6182 57.0078L27.2705 57Z"
                                stroke="url(#paint0_linear_17_41)"
                                strokeWidth={4}
                            />

                            {/* Head */}
                            <circle
                                cx={50}
                                cy={25}
                                r={23}
                                stroke="url(#paint1_linear_17_41)"
                                strokeWidth={4}
                                strokeLinejoin="round"
                            />

                            {/* Smile */}
                            <path
                                ref={smilePathRef}
                                d="M38.5 29C38.5 29 41 38 50.5 38C60 38 61.5 29 61.5 29"
                                stroke="url(#paint2_linear_17_41)"
                                strokeWidth={2.5}
                                strokeLinecap="round"
                            />

                            {/* Gradient Settings */}
                            <defs>
                            <linearGradient
                                id="paint0_linear_17_41"
                                x1={50}
                                y1={85}
                                x2={50}
                                y2={55}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#2B6492" />
                                <stop offset={1} stopOpacity={0.5} stopColor="#193c57" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_17_41"
                                x1={50}
                                y1={2}
                                x2={50}
                                y2={48}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopOpacity={0.5} stopColor="#193c57" />
                                <stop offset={1} stopColor="#2B6492" />
                            </linearGradient>
                            <linearGradient
                                id="paint2_linear_17_41"
                                x1={50}
                                y1={29}
                                x2={50}
                                y2={38}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4A95BC" />
                                <stop offset={1} stopColor="#2B6492" />
                            </linearGradient>
                            </defs>
                        </svg>

                        {/* Background Layer - ... */}

                    </div>

                </div>

                {/* Details Bubbles */}
                <div className="absolute z-2 top-1/2 left-1/2 -translate-1/2 w-[calc(100%-3px)] h-[calc(100%-3px)] pointer-events-none overflow-hidden rounded-xl">
                    
                    {/* Design - Top Left */}
                    <div 
                    className={clsx("absolute top-10 w-40 max-lg:w-46 h-11 rounded-full border-l border-l-white/15 border-b border-b-white/20 border-r border-r-white/15 bg-white/2.5 duration-500 backdrop-blur-sm flex-center-end gap-0.5 max-lg:gap-1", isCardHovered ? "left-[-24%] max-xl:left-[-13%] max-lg:left-[-2%] max-sm:left-[-18%]" : "left-[-22%] max-xl:left-[-10%] max-lg:left-[-5%] max-sm:left-[-16%]")}
                        style={{ boxShadow: "inset 0 0 20px 5px rgba(255, 255, 255, 0.04), inset 0 0 0 2px rgba(255, 255, 255, 0.02), inset 0px -5px 5px 0px rgba(255, 255, 255, 0.05), 0px 0px 5px 5px rgba(0, 0, 0, 0.086)" }}
                    >

                        {/* Bullets */}
                        <div className="flex items-center gap-4 max-lg:gap-5">
                            <div className={clsx("relative w-2.5 h-2.5 border-t border-t-white/10 border-r border-r-white/10 rounded-full  duration-500 delay-500 lg:hidden", isCardHovered ? "bg-main-blue/20" : "bg-white/5")} />
                            <div className={clsx("relative w-2.5 h-2.5 border-t border-t-white/10 border-r border-r-white/10 rounded-full  duration-500 delay-500", isCardHovered ? "bg-main-blue/20" : "bg-white/5")} />
                            <div className={clsx("relative w-2.5 h-2.5 border-t border-t-white/15 border-r border-r-white/15 rounded-full  duration-500 delay-350", isCardHovered ? "bg-main-blue-secondary/40" : "bg-white/10")} />
                        </div>
                        <RiPaletteLine color="rgba(140,142,141,1)" className="w-12 h-[55%]" />
                    </div>
                    
                    {/* Sapcing - Center Left */}
                    <div 
                        className={clsx("absolute top-28 w-40 h-11 rounded-full border-l border-l-white/15 border-b border-b-white/20 border-r border-r-white/15 bg-white/2.5 duration-500 backdrop-blur-sm flex-center-end gap-2", isCardHovered ? "left-[-33%] max-xl:left-[-8%] max-lg:left-[-3%] max-sm:left-[-10%]" : "left-[-35%] max-xl:left-[-16%] max-lg:left-[-8%] max-sm:left-[-18%]")}
                        style={{ boxShadow: "inset 0 0 20px 5px rgba(255, 255, 255, 0.04), inset 0 0 0 2px rgba(255, 255, 255, 0.02), inset 0px -5px 5px 0px rgba(255, 255, 255, 0.05), 0px 0px 5px 3px rgba(0, 0, 0, 0.06)" }}
                    >

                        {/* Bullets */}
                        <div className="flex items-center max-lg:gap-5 max-sm:gap-4">
                            <div className={clsx("relative w-2.5 h-2.5 border-t border-t-white/15 border-r border-r-white/15 rounded-full  opacity-80 duration-500 delay-150", isCardHovered ? "bg-main-blue-shiny/35" : "bg-white/10")} />
                            <div className={clsx("relative w-2.5 h-2.5 border-t border-t-white/10 border-r border-r-white/10 rounded-full  duration-500 delay-250 lg:hidden", isCardHovered ? "bg-main-blue/20" : "bg-white/5")} />
                        </div>
                        <svg
                            width="800px"
                            height="800px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-[55%] w-12"
                        >
                            <path
                            d="M21 21V3M3 21V3M6.5 12H17.5M17.5 15L17.5 9M6.5 15L6.5 9"
                            stroke="#8c8e8d"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    {/* Layout - Bottom Left */}
                    <div 
                    className={clsx("absolute top-46 w-40 max-lg:w-46 h-11 rounded-full border-l border-l-white/15 border-b border-b-white/20 border-r border-r-white/15 bg-white/2.5 duration-500 backdrop-blur-sm flex-center-end gap-0.5 max-lg:gap-1", isCardHovered ? "left-[-24%] max-xl:left-[-13%] max-lg:left-[-2%] max-sm:left-[-18%]" : "left-[-22%] max-xl:left-[-10%] max-lg:left-[-5%] max-sm:left-[-16%]")}
                        style={{ boxShadow: "inset 0 0 20px 5px rgba(255, 255, 255, 0.04), inset 0 0 0 2px rgba(255, 255, 255, 0.02), inset 0px -5px 5px 0px rgba(255, 255, 255, 0.05), 0px 0px 5px 3px rgba(0, 0, 0, 0.06)" }}
                    >

                        {/* Bullets */}
                        <div className="flex items-center gap-4 max-lg:gap-5">
                            <div className={clsx("relative w-2.5 h-2.5 border-t border-t-white/10 border-r border-r-white/10 rounded-full  duration-500 delay-500 lg:hidden", isCardHovered ? "bg-main-blue/20" : "bg-white/5")} />
                            <div className={clsx("relative w-2.5 h-2.5 border-t border-t-white/10 border-r border-r-white/10 rounded-full  duration-500 delay-500", isCardHovered ? "bg-main-blue/20" : "bg-white/5")} />
                            <div className={clsx("relative w-2.5 h-2.5 border-t border-t-white/15 border-r border-r-white/15 rounded-full  duration-500 delay-350", isCardHovered ? "bg-main-blue-secondary/40" : "bg-white/10")} />
                        </div>

                        <RiLayout4Fill color="rgba(140,142,141,1)" className="w-12 h-[55%]" />
                    </div>

                    {/* Typography - Top Right */}
                    <div 
                        className={clsx("absolute top-10 w-40 max-lg:w-46 h-11 rounded-full border-l border-l-white/15 border-b border-b-white/20 border-r border-r-white/15 bg-white/2.5 duration-500 backdrop-blur-sm flex-center-start gap-0.5 max-lg:gap-1", isCardHovered ? "right-[-24%] max-xl:right-[-13%] max-lg:right-[-2%] max-sm:right-[-18%]" : "right-[-22%] max-xl:right-[-10%] max-lg:right-[-5%] max-sm:right-[-16%]")}
                        style={{ boxShadow: "inset 0 0 20px 5px rgba(255, 255, 255, 0.04), inset 0 0 0 2px rgba(255, 255, 255, 0.02), inset 0px -5px 5px 0px rgba(255, 255, 255, 0.05), 0px 0px 5px 5px rgba(0, 0, 0, 0.086)" }}
                    >
                        <svg
                            width="800px"
                            height="800px"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-[55%] w-12"
                        >
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.94993 2.95002L3.94993 4.49998C3.94993 4.74851 3.74845 4.94998 3.49993 4.94998C3.2514 4.94998 3.04993 4.74851 3.04993 4.49998V2.50004C3.04993 2.45246 3.05731 2.40661 3.07099 2.36357C3.12878 2.18175 3.29897 2.05002 3.49993 2.05002H11.4999C11.6553 2.05002 11.7922 2.12872 11.8731 2.24842C11.9216 2.32024 11.9499 2.40682 11.9499 2.50002L11.9499 2.50004V4.49998C11.9499 4.74851 11.7485 4.94998 11.4999 4.94998C11.2514 4.94998 11.0499 4.74851 11.0499 4.49998V2.95002H8.04993V12.05H9.25428C9.50281 12.05 9.70428 12.2515 9.70428 12.5C9.70428 12.7486 9.50281 12.95 9.25428 12.95H5.75428C5.50575 12.95 5.30428 12.7486 5.30428 12.5C5.30428 12.2515 5.50575 12.05 5.75428 12.05H6.94993V2.95002H3.94993Z"
                            fill="#8c8e8d"
                            />
                        </svg>
                        {/* Bullets */}
                        <div className="flex items-center gap-4 max-lg:gap-5">
                            <div className={clsx("relative w-2.5 h-2.5 border-t border-t-white/15 border-l border-l-white/15 rounded-full  duration-500 delay-350", isCardHovered ? "bg-main-blue-secondary/40" : "bg-white/10")} />
                            <div className={clsx("relative w-2.5 h-2.5 border-t border-t-white/10 border-l border-l-white/10 rounded-full  duration-500 delay-500", isCardHovered ? "bg-main-blue/20" : "bg-white/5")} />
                            <div className={clsx("relative w-2.5 h-2.5 border-t border-t-white/10 border-l border-l-white/10 rounded-full  duration-500 delay-500 lg:hidden", isCardHovered ? "bg-main-blue/20" : "bg-white/5")} />
                        </div>
                    </div>
                    

                    {/* Mouse Action - Center Right */}
                    <div 
                        className={clsx("absolute top-28 w-40 h-11 rounded-full border-l border-l-white/15 border-b border-b-white/20 border-r border-r-white/15 bg-white/2.5 duration-500 backdrop-blur-sm flex-center-start gap-2", isCardHovered ? "right-[-33%] max-xl:right-[-8%] max-lg:right-[-3%] max-sm:right-[-10%]" : "right-[-35%] max-xl:right-[-16%] max-lg:right-[-8%] max-sm:right-[-18%]")}
                        style={{ boxShadow: "inset 0 0 20px 5px rgba(255, 255, 255, 0.04), inset 0 0 0 2px rgba(255, 255, 255, 0.02), inset 0px -5px 5px 0px rgba(255, 255, 255, 0.05), 0px 0px 5px 5px rgba(0, 0, 0, 0.086)" }}
                    >
                        <RiMouseLine color="rgba(140,142,141,1)" className="w-12 h-[58%]" />

                        {/* Bullets */}
                        <div className="flex items-center max-lg:gap-5 max-sm:gap-4">
                            <div className={clsx("relative w-2.5 h-2.5 border-t border-t-white/15 border-l border-l-white/15 rounded-full  opacity-80 duration-500 delay-150", isCardHovered ? "bg-main-blue-shiny/35" : "bg-white/10")} />
                            <div className={clsx("relative w-2.5 h-2.5 border-t border-t-white/10 border-r border-r-white/10 rounded-full  duration-500 delay-250 lg:hidden", isCardHovered ? "bg-main-blue/20" : "bg-white/5")} />
                        </div>
                    </div>

                    {/* Animation - Bottom Right */}
                    <div 
                        className={clsx("absolute top-46 w-40 max-lg:w-46 h-11 rounded-full border-l border-l-white/15 border-b border-b-white/20 border-r border-r-white/15 bg-white/2.5 duration-500 backdrop-blur-sm flex-center-start gap-0.5 max-lg:gap-1", isCardHovered ? "right-[-24%] max-xl:right-[-13%] max-lg:right-[-2%] max-sm:right-[-18%]" : "right-[-22%] max-xl:right-[-10%] max-lg:right-[-5%] max-sm:right-[-16%]")}
                        style={{ boxShadow: "inset 0 0 20px 5px rgba(255, 255, 255, 0.04), inset 0 0 0 2px rgba(255, 255, 255, 0.02), inset 0px -5px 5px 0px rgba(255, 255, 255, 0.05), 0px 0px 5px 5px rgba(0, 0, 0, 0.086)" }}
                    >
                        <RiStarFill color="rgba(140,142,141,1)" className="w-12 h-[54%]" />
                        {/* Bullets */}
                        <div className="flex items-center gap-4 max-lg:gap-5">
                            <div className={clsx("relative w-2.5 h-2.5 border-t border-t-white/15 border-l border-l-white/15 rounded-full  duration-500 delay-350", isCardHovered ? "bg-main-blue-secondary/40" : "bg-white/10")} />
                            <div className={clsx("relative w-2.5 h-2.5 border-t border-t-white/10 border-l border-l-white/10 rounded-full  duration-500 delay-500", isCardHovered ? "bg-main-blue/20" : "bg-white/5")} />
                            <div className={clsx("relative w-2.5 h-2.5 border-t border-t-white/10 border-l border-l-white/10 rounded-full  duration-500 delay-500 lg:hidden", isCardHovered ? "bg-main-blue/20" : "bg-white/5")} />
                        </div>
                    </div>
                    
                </div>

                {/* Text */}
                <div className="absolute z-2 bottom-16 left-1/2 -translate-x-1/2 w-full h-auto flex-center-all">
                    <div className="relative w-full h-auto flex-col-center">
                        <h3 
                            style={{ wordSpacing: "5px" }} 
                            className={clsx("gradient-heading absolute z-2 text-[22.5px] font-semibold text-shadow-lg duration-700 delay-200", isCardHovered ? "opacity-0 blur-[2px]" : "opacity-100 blur-[0px]")}
                        >
                            Attention to Detail
                        </h3>
                        <h3 
                            style={{ wordSpacing: "5px" }} 
                            className={clsx("gradient-heading absolute z-2 text-[22.5px] font-semibold text-shadow-lg duration-700 delay-200", isCardHovered ? "opacity-100 blur-[0px]" : "opacity-0 blur-[2px]")}
                        >
                            Great User Experience
                        </h3>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default UXCard;