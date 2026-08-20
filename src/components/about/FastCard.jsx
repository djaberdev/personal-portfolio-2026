import { useState } from "react";

import clsx from 'clsx';

const FastCard = () => {

    const [isCardHovered, setIsCardHovered] = useState(false);

    return (
        <div 
            className='about-card'
            onMouseEnter={() => setIsCardHovered(true)}    
            onMouseLeave={() => setIsCardHovered(false)}    
        >
            
            {/* Text */}
            <div className="absolute z-2 max-md:z-3 top-8 left-10 w-full h-auto flex-col-start gap-1">
                <h3 
                    style={{ wordSpacing: "5px" }} 
                    className={clsx("gradient-heading text-[24px] font-semibold text-shadow-lg duration-500 delay-200", isCardHovered ? "opacity-40" : "opacity-100")}
                >
                    Fast Dev.
                </h3>

                <h3 
                    style={{ wordSpacing: "5px" }} 
                    className={clsx("gradient-heading text-[24px] font-semibold text-shadow-lg duration-500 delay-100", isCardHovered ? "opacity-60" : "opacity-80")}
                >
                    Fast Loads.
                </h3>

                <h3 
                    style={{ wordSpacing: "5px" }} 
                    className={clsx("gradient-heading text-[24px] font-semibold text-shadow-lg duration-500", isCardHovered ? "opacity-100" : "opacity-60")}
                >
                    Fast <span className="hidden xl:inline">Perform</span><span className="hidden max-lg:inline">Performance</span>.
                </h3>
            </div>

            {/* Icon Layer */}
            <div className="absolute z-2 top-1/2 left-1/2 -translate-1/2 w-full h-full flex-center-all">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-5.0 -10.0 110.0 135.0"
                    className={clsx("translate-y-15 max-lg:translate-1.25 drop-shadow-[0_0_8px] w-8/10 max-xl:w-full max-lg:w-9/10 max-sm:w-8/10 h-8/10 max-xl:h-full max-lg:h-9/10 max-sm:h-8/10 duration-500", isCardHovered ? "drop-shadow-main-blue opacity-100 scale-105 max-xl:scale-115 max-lg:scale-105" : "drop-shadow-main-blue/80 opacity-80 scale-100")}
                >
                    <path
                        d="m45.707 57.895-21.941-0.003906c-0.44922-0.003906-0.90625-0.13672-1.3047-0.41406-1.0234-0.71875-1.2695-2.1328-0.55078-3.1562l36.098-51.445c0.50391-0.71484 1.4023-1.1016 2.3125-0.91016 1.2227 0.25391 2.0117 1.4531 1.7539 2.6797l-7.7891 37.465 21.941 0.003906c0.44922 0.003907 0.90625 0.13672 1.3047 0.41406 1.0234 0.71875 1.2695 2.1328 0.55078 3.1562l-36.098 51.445c-0.50391 0.71484-1.4023 1.1016-2.3125 0.91016-1.2227-0.25391-2.0117-1.4531-1.7539-2.6797z"
                        fillRule="evenodd"
                        fill="url(#gradient-0kzrkpf)"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth={0.4}
                    />
                    <defs>
                        <radialGradient
                            id="gradient-0kzrkpf"
                            cx="50%"
                            cy="50%"
                            r="50%"
                            fx="50%"
                            fy="50%"
                            fr="0%"
                        >
                            <stop offset="0%" stopColor="#4785a4" />
                            <stop offset="100%" stopColor="#1a9fd2" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            {/* Rounded Additional Fast Layers */}
            <div className="absolute z-1 top-1/2 left-1/2 -translate-1/2 w-[calc(100%-5px)] h-[calc(100%-5px)] pointer-events-none overflow-hidden rounded-xl">

                {/* Left Top */}
                <div className={clsx("absolute top-[30%] w-40 h-12 rounded-r-full border-t border-t-white/10 border-b border-b-white/20 border-r border-r-white/15 bg-white/2.5 duration-500 backdrop-blur-sm fast-layer fast-layer-left max-lg:hidden", isCardHovered ? "left-[-18%] max-xl:left-[-26%]" : "left-[-14%] max-xl:left-[-22%]")}>

                    <div className="absolute right-8 top-1/2 -translate-y-1/2 w-8 h-px bg-main-blue/70 blur-[1px]" />
                </div>

                {/* Left Bottom */}
                <div className={clsx("absolute bottom-[18%] max-xl:bottom-[22%] w-32 h-14 rounded-r-full border-t border-t-white/10 border-b border-b-white/20 border-r border-r-white/15 bg-white/3 duration-500 backdrop-blur-sm fast-layer fast-layer-left", isCardHovered ? "left-[-14%] max-xl:left-[-17%] max-lg:left-[0%] max-sm:left-[-8%]" : "left-[-10%] max-xl:left-[-14%] max-lg:left-[-2%] max-sm:left-[-10%]")}>

                    <div className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-px bg-main-blue/60 blur-[1px]" />
                </div>

                {/* Right Top */}
                <div className={clsx("absolute top-[36%] max-xl:top-[33%] w-36 max-lg:w-42 h-13 rounded-l-full border-t border-t-white/10 border-b border-b-white/20 border-l border-l-white/15 bg-white/2.5 duration-500 backdrop-blur-sm fast-layer fast-layer-right", isCardHovered ? "right-[-26%] max-lg:right-[0%] max-sm:right-[-16%]" : "right-[-22%] max-lg:right-[-2%] max-sm:right-[-18%]")}>

                    <div className="absolute left-6 top-1/2 -translate-y-1/2 w-9 h-px bg-main-blue/60 blur-[1px]" />
                </div>

                {/* Right Bottom */}
                <div className={clsx("absolute bottom-[12%] max-xl:bottom-[17%] w-44 h-12 rounded-l-full border-t border-t-white/10 border-b border-b-white/20 border-l border-l-white/15 bg-white/2 duration-500 backdrop-blur-sm fast-layer fast-layer-right max-lg:hidden", isCardHovered ? "right-[-22%] max-xl:right-[-32%]" : "right-[-18%] max-xl:right-[-28%]")}>

                    <div className="absolute left-8 top-1/2 -translate-y-1/2 w-8 h-px bg-main-blue/70 blur-[1px]" />
                </div>

            </div>

        </div>
    );
};

export default FastCard;