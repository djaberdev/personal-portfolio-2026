import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const AnimationCard = () => {

    const [isCardHovered, setIsCardHovered] = useState(false);

    const bulletRef = useRef(null);
    let moveBulletTL = useRef(null);
    
    useGSAP(() => {

        // Move Bullet Animation
        moveBulletTL.current = gsap.timeline({ paused: true });

        moveBulletTL.current.to(bulletRef.current, {
            x: 340,
            rotate: 180,
            scale: 1.35,
            bottom: -34.5,
            duration: 1,
            ease: "expo.inOut"
        });

    }, []);

    // Handle Animation Play Based on "isCardHovered"
    useEffect(() => {
        
        isCardHovered 
        ? moveBulletTL.current.play()
        : moveBulletTL.current.reverse()


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
                            style={{ wordSpacing: "5px" }} 
                            className={clsx("gradient-heading text-[22.5px] max-md:text-[20px]  font-semibold")}
                        >
                            No More Static Websites, <span className="hidden sm:inline">Let's</span> Make it Move
                        </h3>

                        <h4
                            style={{ wordSpacing: "2px", fontStyle: "italic" }} 
                            className="font-inter text-[17px] max-md:text-[16px] font-medium text-[rgb(150,150,150)] opacity-85"
                        >Smooth & Award-worthy Animations using <span className="opacity-100 text-[rgb(190,190,190)]">GSAP</span></h4>
                    </div>
                </div>
            
                {/* Animated Icon Layer */}
                <div className="absolute z-1 top-1/2 left-1/2 -translate-1/2 w-full h-full flex-center-all">

                    {/* Main Holder */}
                    <div className="absolute w-full h-[55%] top-0 left-1/2 -translate-x-1/2">
                    
                        {/* Glow Stopper */}
                        <div className='absolute bottom-0.75 left-1/2 -translate-x-1/2 w-full h-full bg-about-card-bg z-1 overflow-hidden'>
                            
                            {/* Animated Bullet */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns:svgjs="http://svgjs.dev/svgjs"
                                viewBox="0 0 120 120"
                                width={120}
                                height={120}
                                className="absolute left-14.75 -bottom-10.5"
                                ref={bulletRef}
                            >
                                <defs>
                                    <radialGradient id="sssurface-grad-dark" r="72%" cx="20%" cy="20%">
                                        <stop offset="0%" stopColor="#4a95bcff" stopOpacity={0} />
                                        <stop offset="100%" stopColor="#00678c" stopOpacity={1} />
                                    </radialGradient>
                                    <radialGradient id="sssurface-grad-light" r="47%" cx="30%" cy="30%">
                                        <stop offset="0%" stopColor="#7ec6ef" stopOpacity={1} />
                                        <stop offset="100%" stopColor="#4a95bcff" stopOpacity={0} />
                                    </radialGradient>
                                </defs>
                                <g>
                                    <path
                                        r={126.5}
                                        cx={400}
                                        cy={400}
                                        fill="#4a95bcff"
                                        d="M78.975 60A18.975 18.975 0 0 1 60 78.975A18.975 18.975 0 0 1 41.025 60A18.975 18.975 0 0 1 78.975 60z"
                                    />
                                    <path
                                        r={126.5}
                                        cx={400}
                                        cy={400}
                                        fill="url(#sssurface-grad-dark)"
                                        d="M78.975 60A18.975 18.975 0 0 1 60 78.975A18.975 18.975 0 0 1 41.025 60A18.975 18.975 0 0 1 78.975 60z"
                                    />
                                    <path
                                        r={126.5}
                                        cx={400}
                                        cy={400}
                                        fill="url(#sssurface-grad-light)"
                                        d="M78.975 60A18.975 18.975 0 0 1 60 78.975A18.975 18.975 0 0 1 41.025 60A18.975 18.975 0 0 1 78.975 60z"
                                    />
                                </g>
                            </svg>
                        
                        </div>

                        {/* Shiny Top Border */}
                        <div className='shiny-border absolute bottom-0 left-1/2 -translate-x-1/2 w-9/10 h-0.5 z-2'></div>

                        {/* Glow */}
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-7/10 h-12 rounded-b-full bg-linear-to-b from-soft-blue-primary to-main-blue blur-[60px] -translate-y-6 z-0"></div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AnimationCard;