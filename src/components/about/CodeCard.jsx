import { useState } from "react";

import clsx from 'clsx';

import {
    
    code,

} from "../../assets/index";

const CodeCard = () => {

    const [isCardHovered, setIsCardHovered] = useState(false);

    return (
        <div 
            className='about-card'
            onMouseEnter={() => setIsCardHovered(true)}    
            onMouseLeave={() => setIsCardHovered(false)}    
        >
            
            <div className="absolute z-1 top-1/2 left-1/2 -translate-1/2 w-[calc(100%-3px)] h-[calc(100%-3px)] overflow-hidden rounded-xl">
                
                {/* Background */}
                <div className="absolute z-1 h-full w-full top-1/2 left-1/2 -translate-1/2 flex-center-all bg-main-blue">
                
                    {/* Circular SVG */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.dev/svgjs"
                        viewBox="0 0 800 800"
                        className={clsx("relative w-full h-full duration-700", isCardHovered ? "opacity-30 scale-800 max-xl:scale-1000 max-lg:scale-800" : "opacity-20 scale-700 max-xl:scale-900 max-lg:scale-700")}
                    >
                        <defs>
                            <radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">
                                <stop offset="25%" stopColor="#085875" stopOpacity={0.5} />
                                <stop offset="85%" stopColor="#4785a4" stopOpacity={1} />
                                <stop offset="100%" stopColor="#abe7ff" stopOpacity={0.5} />
                            </radialGradient>
                        </defs>

                        <g fill="url(#cccircular-grad)">
                            <circle r={390.5} cx={400} cy={400} opacity={0.05} />
                            <circle r={355} cx={400} cy={400} opacity={0.15} />
                            <circle r={319.5} cx={400} cy={400} opacity={0.24} />
                            <circle r={284} cx={400} cy={400} opacity={0.33} />
                            <circle r={248.5} cx={400} cy={400} opacity={0.43} />
                            <circle r={213} cx={400} cy={400} opacity={0.53} />
                            <circle r={177.5} cx={400} cy={400} opacity={0.62} />
                            <circle r={142} cx={400} cy={400} opacity={0.71} />
                            <circle r={106.5} cx={400} cy={400} opacity={0.81} />
                            <circle r={71} cx={400} cy={400} opacity={0.91} />
                        </g>
                    </svg>

                </div>

                {/* Text */}
                <div className="absolute z-2 max-md:z-3 bottom-8 max-lg:bottom-[unset] max-lg:top-6 left-8 max-lg:left-6 max-xl:bottom-6 max-xl:left-5 w-full h-auto flex-col-start flex-col-reverse gap-1">
                    <h3 
                        style={{ wordSpacing: "5px" }} 
                        className={clsx("gradient-heading text-[26px] max-xl:text-[22px] font-semibold duration-500 delay-200", isCardHovered ? "opacity-40" : "opacity-100")}
                    >
                        Clean Code.
                    </h3>
    
                    <h3 
                        style={{ wordSpacing: "5px" }} 
                        className={clsx("gradient-heading text-[26px] max-xl:text-[22px] font-semibold duration-500 delay-100", isCardHovered ? "opacity-60" : "opacity-80")}
                    >
                        Scalable Projects.
                    </h3>
    
                    <h3 
                        style={{ wordSpacing: "5px" }} 
                        className={clsx("gradient-heading text-[26px] max-xl:text-[22px] font-semibold duration-500", isCardHovered ? "opacity-100" : "opacity-60")}
                    >
                        Best Practices.
                    </h3>
                </div>

                {/* Code Image */}
                <div className="absolute z-3 max-md:z-2 h-full w-full top-1/2 left-1/2 -translate-1/2">
                    <img
                        src={code}
                        alt="code_block"
                        className={clsx("absolute left-8 max-lg:left-1/2 max-lg:-translate-x-1/2 max-md:translate-x-[unset] max-md:left-[unset] max-md:-right-4 h-unset max-xl:h-150 max-lg:h-125 max-md:h-[unset] max-w-[unset] duration-700 backdrop-blur-[10px] rounded-[15px] max-xl:rounded-[18px] shadow-[0px_0px_20px_12px_rgba(0,0,0,0.2)] delay-250", isCardHovered ? "opacity-100 top-6 max-xl:top-[20%] max-lg:top-[26%] max-md:top-8" : "opacity-90 top-10 max-xl:opacity-100 max-xl:top-[20%] max-lg:top-[26%] max-md:top-8")}
                    />
                </div>

            </div>

        </div>
    );
};

export default CodeCard;