import { useEffect, useState } from "react";

import { OrbitingLogos } from "../index";

import { technologies } from "../../constants";

import clsx from "clsx";

const TechCard = () => {

    // const [isMobile, setIsMobile] = useState(false);

    // // Handle Window Resize
    // useEffect(() => {

    //     // Update "isMobile" When the page loads
    //     if (window.innerWidth <= 768) {
    //         setIsMobile(true);
    //     } else {
    //         setIsMobile(false);
    //     }

    //     window.addEventListener("resize", handleResize);

    // }, []);

    // const handleResize = () => {
    //     if (window.innerWidth <= 768) {
    //         setIsMobile(true);
    //     } else {
    //         setIsMobile(false);
    //     }
    // };

    // useEffect(() => {

    // }, [])

    return (
        <div className='about-card' style={{ outline: "1.8px solid #464646" }}>

            {/* ! Fix That One -> To make the border visible */}
            <div className="absolute z-1 top-1/2 left-1/2 -translate-1/2 w-[calc(100%)] h-[calc(100%)] pointer-events-none overflow-hidden rounded-xl">

                {/* Top Glow Layer */}
                <div className="absolute z-0 -top-15 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-white blur-[120px]"></div>

                {/* Blur And Edge Mask Layer */}
                <div className="absolute z-2 inset h-full w-full">
                
                    {/* Top */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-20 w-full bg-linear-to-b from-about-card-bg to-transparent backdrop-blur-[0.6px] opacity-100"></div>

                    {/* Left */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 h-full w-20 bg-linear-to-r from-about-card-bg to-transparent backdrop-blur-[0.6px] opacity-100"></div>

                    {/* Right */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 h-full w-20 bg-linear-to-l from-about-card-bg to-transparent backdrop-blur-[0.6px] opacity-100"></div>

                </div>

                {/* Big Circle */}
                <OrbitingLogos
                    className={"z-1 -top-52 left-1/2 -translate-x-1/2 w-125 h-125"}
                    speed={1}
                    radius={140}
                    path={true}
                    duration={40}
                    itemSize={48}
                >
                    {
                        technologies[0].map((bigTech, index) => (
                            <img 
                                key={`bigTech-${index + 1}`}
                                src={bigTech.img} 
                                alt={bigTech.label} 
                                className={clsx(
                                    'w-6/10 h-6/10',
                                    bigTech.label === "Three.js" && "rotate-90 -translate-x-0.5 w-5/10 h-5/10"
                                )}
                            />
                        ))
                    }
                </OrbitingLogos>

                {/* Small Circle  */}
                <OrbitingLogos
                    className={"z-1 -top-55 left-1/2 -translate-x-1/2 w-125 h-125"}
                    speed={1}
                    radius={76}
                    path={true}
                    duration={38}
                    itemSize={38}
                    reverse
                >
                    {
                        technologies[1].map((smallTech, index) => (
                            <img 
                                key={`smallTech-${index + 1}`}
                                src={smallTech.img} 
                                alt={smallTech.label} 
                                className={clsx(
                                    'w-6/10 h-6/10',
                                    smallTech.label === "JS" && "w-3/10 h-3/10 rounded-[5px]"
                                )}
                            />
                        ))
                    }
                </OrbitingLogos>

                {/* Text */}
                <div className="absolute z-3 bottom-12 left-1/2 -translate-x-1/2 w-full h-auto flex-center-all">
                    <h3 
                        style={{ wordSpacing: "5px" }} 
                        className={clsx("gradient-heading absolute z-2 text-[22.5px] font-semibold text-shadow-lg xl:opacity-100 opacity-0")}
                    >
                        Powerful Tech Stack
                    </h3>
                    <h3 
                        style={{ wordSpacing: "5px" }} 
                        className={clsx("gradient-heading absolute z-2 text-[22.5px] font-semibold text-shadow-lg max-xl:opacity-100 opacity-0")}
                    >
                        My Tech Stack
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default TechCard;