import { useRef } from 'react'

import clsx from "clsx";

import {
    AnimatedBeam,
    Magnet
} from "../index";

const AICard = () => {

    const containerRef = useRef(null);
    const topLeftRef = useRef(null);
    const topRightRef = useRef(null);
    const centerLeftRef = useRef(null);
    const centerRightRef = useRef(null);
    const bottomLeftRef = useRef(null);
    const bottomRightRef = useRef(null);
    const coreRef = useRef(null);

    return (
        <div className='about-card'>
            
            <div className="absolute z-1 top-1/2 left-1/2 -translate-1/2 w-[calc(100%-3px)] h-[calc(100%-3px)] pointer-events-none overflow-hidden rounded-xl">

                {/* Text */}
                <div className="absolute z-2 bottom-8 left-1/2 -translate-x-1/2 w-full h-auto flex-center-all">
                    <div className="relative w-full h-auto flex-col-center gap-1">
                        <h3 
                            style={{ wordSpacing: "5px" }} 
                            className={clsx("gradient-heading text-[22.5px] font-semibold")}
                        >
                            AI-Assisted Workflow
                        </h3>

                        <h4
                            style={{ wordSpacing: "2px", fontStyle: "italic" }} 
                            className="font-inter text-[17px] font-medium text-[rgb(150,150,150)] opacity-85"
                        >Build Better, Iterate Faster.</h4>
                    </div>
                </div>

                {/* Icon Layer */}
                <div 
                    ref={containerRef}
                    className="absolute z-1 -top-8 left-1/2 -translate-x-1/2 w-[calc(100%+150px)] h-full flex-center-all"
                >

                    {/* Flex Box */}
                    <div className="flex h-6/10 w-full flex-col items-stretch justify-between gap-10">

                        {/* Top Row */}
                        <div className="flex-center-between flex-row z-1">
                            
                            {/* Left */}
                            <div ref={topLeftRef} className="relative size-3 bg-white/10 backdrop-blur-md border-t border-t-white/15 border-r border-r-white/15 rounded-full"></div>

                            {/* Right */}
                            <div ref={topRightRef} className="relative size-3 bg-white/10 backdrop-blur-md border-t border-t-white/15 border-l border-l-white/15 rounded-full"></div>

                        </div>

                        {/* Center Row */}
                        <div className="flex-center-between flex-row z-1">
                            
                            {/* Left */}
                            <div ref={centerLeftRef} className="relative size-3 bg-white/10 backdrop-blur-md border-t border-t-white/15 border-r border-r-white/15 rounded-full"></div>

                            <Magnet
                                padding={40}
                                magnetStrength={4}
                                wrapperClassName="relative"
                                innerClassName="h-full w-full flex-center-all"
                            >
                                {/* Center */}
                                <div ref={coreRef} className="ai-core z-2 flex-center-all overflow-hidden">

                                    {/* Text */}
                                    <span className="relative z-2 text-center text-[32px] font-semibold select-none">AI</span>

                                </div>
                            </Magnet>

                            {/* Right */}
                            <div ref={centerRightRef} className="relative size-3 bg-white/10 backdrop-blur-md border-t border-t-white/15 border-l border-l-white/15 rounded-full"></div>

                        </div>

                        {/* Bottom Row */}
                        <div className="flex-center-between flex-row z-1">
                            
                            {/* Left */}
                            <div ref={bottomLeftRef} className="relative size-3 bg-white/10 backdrop-blur-md border-t border-t-white/15 border-r border-r-white/15 rounded-full"></div>
                            
                            {/* Right */}
                            <div ref={bottomRightRef} className="relative size-3 bg-white/10 backdrop-blur-md border-t border-t-white/15 border-l border-l-white/15 rounded-full"></div>

                        </div>

                    </div>

                    {/* Animated Beams Paths */}

                    {/* Top Paths */}
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={topLeftRef}
                        toRef={coreRef}
                        curvature={-60}
                        endYOffset={-16 }
                        reverse={false}
                    />

                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={topRightRef}
                        toRef={coreRef}
                        curvature={-60}
                        endYOffset={-16 }
                        reverse={true}
                    />

                    {/* Center Paths */}
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={centerLeftRef}
                        toRef={coreRef}
                        curvature={0}
                        reverse={false}
                    />

                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={centerRightRef}
                        toRef={coreRef}
                        curvature={0}
                        reverse={true}
                    />

                    {/* Bottom Paths */}
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={bottomLeftRef}
                        toRef={coreRef}
                        curvature={60}
                        endYOffset={16 }
                        reverse={false}
                    />

                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={bottomRightRef}
                        toRef={coreRef}
                        curvature={60}
                        endYOffset={16 }
                        reverse={true}
                    />

                </div>

            </div>
        </div>
    );
};

export default AICard;