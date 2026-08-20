import { useEffect, useRef, useState } from "react";
import {
    magicExtand
} from "../../assets"

import { Link } from "react-scroll";

import { RiArrowRightDownLongLine } from "@remixicon/react";
import gsap from "gsap";
import clsx from "clsx";

const CTACard = () => {

    const [startFollowing, setStartFollowing] = useState(false);

    const container = useRef(null);
    const glassBtnRef = useRef(null);

    useEffect(() => {
        
        if (!container.current || !glassBtnRef.current) return;

        function handleMove(e) {

            setStartFollowing(true);

            const rect = container.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            gsap.to(glassBtnRef.current, {
                x: x,
                y: y,
                width: 86,
                height: 86,
                duration: 0.5,
                ease: "power2.out",
            });

        }

        function handleLeave() {
            setStartFollowing(false);

            gsap.to(glassBtnRef.current, {
                width: 66,
                height: 66,
                duration: 0.5,
                ease: "power2.out",
            });

        }
        
        gsap.set(glassBtnRef.current, {
            xPercent: -50,
            yPercent: -50,
        });

        const node = container.current;

        node.addEventListener("mousemove", handleMove);
        node.addEventListener("mouseleave", handleLeave);

        
        return () => {
            node.removeEventListener("mousemove", handleMove);
        };

    }, []);

    return (
        <div 
            className="about-card"
        >
            <div ref={container} className="relative w-full h-full overflow-hidden flex-center-all">
                
                {/* The BG Layer */}
                <div  
                    className="absolute z-1 w-[calc(100%-3px)] h-[calc(100%-3px)] overflow-hidden rounded-xl"
                >
                    <img 
                        src={magicExtand}
                        alt="magic-BG"
                        className="pointer-events-none w-full h-full animate-[move-magic_60s_ease_alternate_infinite] blur-[2px]"
                    />
                </div>

                {/* Glass BTN */}
                <button 
                    ref={glassBtnRef}
                    className="glass-btn absolute z-3 w-18 h-18 flex-center-all rounded-full backdrop-blur-md cursor-pointer"
                >
                    <Link
                        to={"contact"}
                        smooth
                        duration={500}
                    >
                        <RiArrowRightDownLongLine size={26} color="white" className={clsx("relative duration-300", startFollowing ? "scale-150" : "scale-100")} />
                    </Link>
                </button>               

                {/* ? Filter SVG -> Makes Glass Fluid */}
                <svg 
                    width="0" 
                    height="0" 
                    aria-hidden="true"
                    style={{ position: "absolute", visibility: "hidden" }}
                >
                    <filter id="lg-filter" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
                        <feImage x="0" y="0" width="420" height="280" href="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22420%22%20height%3D%22280%22%20viewBox%3D%220%200%20420%20280%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22Y%22%20x1%3D%220%22%20x2%3D%220%22%20y1%3D%222%25%22%20y2%3D%2298%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230F0%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23000%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22X%22%20x1%3D%222%25%22%20x2%3D%2298%25%22%20y1%3D%220%22%20y2%3D%220%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23F00%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23000%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22420%22%20height%3D%22280%22%20fill%3D%22%23808080%22%2F%3E%3Cg%20filter%3D%22blur(2px)%22%3E%3Crect%20width%3D%22420%22%20height%3D%22280%22%20fill%3D%22%23000080%22%2F%3E%3Crect%20width%3D%22420%22%20height%3D%22280%22%20fill%3D%22url(%23Y)%22%20style%3D%22mix-blend-mode%3Ascreen%22%2F%3E%3Crect%20width%3D%22420%22%20height%3D%22280%22%20fill%3D%22url(%23X)%22%20style%3D%22mix-blend-mode%3Ascreen%22%2F%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%22416%22%20height%3D%22276%22%20rx%3D%2230%22%20ry%3D%2230%22%20fill%3D%22%23808080%22%20filter%3D%22blur(2px)%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" result="displacementMap" />
                        <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="4" xChannelSelector="R" yChannelSelector="G" />
                        <feColorMatrix type="matrix" result="displacedR" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
                        <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="2" xChannelSelector="R" yChannelSelector="G" />
                        <feColorMatrix type="matrix" result="displacedG" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" />
                        <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="0" xChannelSelector="R" yChannelSelector="G" />
                        <feColorMatrix type="matrix" result="displacedB" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" />
                        <feBlend in="displacedR" in2="displacedG" mode="screen" result="rg" />
                        <feBlend in="rg" in2="displacedB" mode="screen" />
                    </filter>
                </svg>

                {/* Text Layer */}
                <h3 
                    style={{ wordSpacing: "15px" }} 
                    className={clsx("page-heading absolute z-2 text-[32px] max-md:text-[40px] max-sm:text-[36px] font-semibold tracking-[-0.020em] text-shadow-lg")}
                >
                    Let's Build <br />
                    Something <br />
                    Great.
                </h3>

            </div>
        </div>
    );
};

export default CTACard;