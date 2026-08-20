import { useState } from "react";

import clsx from 'clsx';

import {
    
    grid,

    // Screens
    desktop,
    tablet,
    mobile

} from "../../assets/index";

import { StaticGrid } from "../../components/index";

const ResponsiveCard = () => {

    const [isCardHovered, setIsCardHovered] = useState(false);

    return (
        <div 
            className='about-card'
            onMouseEnter={() => setIsCardHovered(true)}    
            onMouseLeave={() => setIsCardHovered(false)}    
        >
            
            {/* Text */}
            <div className="absolute z-2 top-10 left-1/2 -translate-x-1/2 w-full h-auto flex-center-all">
                <div className="relative w-full h-auto flex-col-center">
                    <h3 
                        style={{ wordSpacing: "5px" }} 
                        className={clsx("gradient-heading absolute z-2 text-[22.5px] font-semibold text-shadow-lg duration-700 delay-200", isCardHovered ? "opacity-0 blur-[2px]" : "opacity-100 blur-[0px]")}
                    >
                        Looks Great on Every Device
                    </h3>
                    <h3 
                        style={{ wordSpacing: "5px" }} 
                        className={clsx("gradient-heading absolute z-2 text-[22.5px] font-semibold text-shadow-lg duration-700 delay-200", isCardHovered ? "opacity-100 blur-[0px]" : "opacity-0 blur-[2px]")}
                    >
                        Fully Responsive
                    </h3>
                </div>
            </div>

            {/* Grid Layer */}
            <div 
                className="absolute z-1 w-full h-full top-1/2 -translate-y-6/10 left-1/2 -translate-x-1/2 mask-t-from-50% mask-t-from-[rgb(30,30,30)] mask-circle mask-radial-farthest-corner mask-radial-at-center mask-radial-from-[rgb(30,30,30)]"
            >
                <StaticGrid
                    strokeWidth={1}
                    strokeColor="rgba(255,255,255,0.1)"
                    opacity={1}
                />
            </div>

            {/* Screens */}
            <div className="absolute z-2 bottom-0.5 left-1/2 -translate-x-1/2 w-[calc(100%-5px)] h-[calc(80%-5px)] pointer-events-none overflow-hidden rounded-xl">

                {/* Desktop */}
                <img 
                    src={desktop}
                    alt="desktop" 
                    className={clsx("absolute z-1 w-5/10 max-xl:w-[45%] max-sm:w-5/10 -bottom-4 duration-1000 backdrop-blur-md", isCardHovered ? "right-12 max-xl:right-18 max-sm:right-12" : "right-8 max-xl:right-12 max-sm:right-8")}
                />

                {/* Tablet */}
                <img 
                    src={tablet}
                    alt="tablet" 
                    className={clsx("absolute z-2 w-3/10 max-xl:w-[26%] max-sm:w-3/10 -bottom-4 duration-1000 backdrop-blur-md", isCardHovered ? "left-26 max-xl:left-32 max-sm:left-22" : "left-16 max-xl:left-26 max-sm:left-16")}
                />

                {/* Mobile */}
                <img 
                    src={mobile}
                    alt="mobile" 
                    className={clsx("absolute z-3 w-[15%] max-xl:w-[14%] max-sm:w-[16%] left-1/2 -translate-x-9/10 duration-1000 backdrop-blur-md rounded-xl", isCardHovered ? "-bottom-6" : "-bottom-16")}
                />

            </div>

        </div>
    );
};

export default ResponsiveCard;