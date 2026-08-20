import React from 'react'

import clsx from 'clsx'

const OrbitingLogos = ({
    className,
    children,
    reverse,
    duration = 20,
    radius = 160,
    itemSize = 40,
    path = true,
    speed = 1,
}) => {

    const calculatedDuration = duration / speed;

    return (
        <div 
            className={clsx(
                "absolute",
                className
            )}
        >
            {path && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="pointer-events-none absolute z-1 w-full h-full inset-0"
                >
                <circle
                    className="stroke-black/10 stroke-[1.6px] dark:stroke-white/10"
                    cx="50%"
                    cy="50%"
                    r={radius}
                    fill="none"
                />
                </svg>
            )}

            <div className="pointer-events-none absolute z-1 w-full h-full inset-0 flex-center-all">

                {React.Children.map(children, (child, index) => {

                    const angle = (360 / Number(React.Children.count(children))) * index;

                    return (
                        <div
                            style={{
                                '--duration': calculatedDuration,
                                '--radius': radius,
                                '--angle': angle,
                                animationDirection: reverse ? 'reverse' : 'normal',
                                width: itemSize,
                                height: itemSize,
                            }}
                            className={clsx(
                                'animate-orbit absolute transform-gpu bg-linear-to-tr from-white/5 to-white/15 border-t border-t-white/35 border-l border-l-white/35 backdrop-blur-[3px] rounded-full flex-center-all',
                            )}
                        >
                            {child}
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default OrbitingLogos;