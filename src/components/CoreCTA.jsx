import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";

gsap.registerPlugin(useGSAP, Physics2DPlugin);

const FLAIRS = Array.from(
    { length: 16 },
    (_, index) => `https://assets.codepen.io/16327/flair-${index}.png`
);

const CoreCTA = ({
    children = "Start Project",
    hoverCount = 6,
    clickCount = 16,
}) => {

    const buttonRef = useRef(null);
    const flairsRef = useRef([]);

    const { contextSafe } = useGSAP(
        {
            scope: buttonRef,
        }
    );

    const throwFlairs = contextSafe((count, strength = 1) => {

        const available = flairsRef.current
            .filter(Boolean)
            .sort(() => Math.random() - 0.5)
            .slice(0, count);

        available.forEach((flair) => {

            const angle = gsap.utils.random(
                245,
                295
            );

            const velocity = gsap.utils.random(
                200 * strength,
                340 * strength
            );

            gsap.killTweensOf(flair);

            gsap.set(flair, {
                x: 0,
                y: 0,
                rotation: gsap.utils.random(-30, 30),
                scale: gsap.utils.random(0.35, 0.65),
                opacity: 0,
            });

            gsap.timeline()
                .to(flair, {
                    opacity: 1,
                    duration: 0.08,
                })
                .to(
                    flair,
                    {
                        duration: gsap.utils.random(0.8, 1.2),

                        physics2D: {
                            velocity,
                            angle,
                            gravity: gsap.utils.random(280, 420),
                        },

                        rotation: gsap.utils.random(
                            -180,
                            180
                        ),

                        opacity: 0,

                        ease: "none",
                    },
                    0
                );
        });
    });

    const handleMouseEnter = contextSafe(() => {

        // Separate the two words.
        gsap.to(".flair-button-word:first-child", {
            x: -14,
            duration: 0.5,
            ease: "expo.out",
        });

        gsap.to(".flair-button-word:last-child", {
            x: 14,
            duration: 0.5,
            ease: "expo.out",
        });

        // Small controlled burst.
        throwFlairs(hoverCount, 0.75);
    });

    const handleMouseLeave = contextSafe(() => {

        gsap.to(".flair-button-word:first-child", {
            x: 0,
            duration: 0.5,
            ease: "expo.inOut",
        });

        gsap.to(".flair-button-word:last-child", {
            x: 0,
            duration: 0.5,
            ease: "expo.inOut",
        });
    });

    const handleClick = contextSafe(() => {

        // Bigger, denser burst.
        throwFlairs(clickCount, 1.15);

    });

    return (
        <button
            ref={buttonRef}
            type="button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            className="
                relative
                overflow-visible
                mt-6
                rounded-full
                py-3.75
                px-12.5
                bg-neutral-800/90
                cursor-pointer
                duration-300
                hover:bg-neutral-800
                active:scale-95
                select-none
            "
            style={{
                boxShadow: "inset 0 0 0 2px rgba(255,255,255,.03), inset 0 2px rgba(255,255,255,.05), 0 0 2px 4px rgba(0,0,0,.025), inset 0 -5px 6px rgba(255,255,255,.056)",
            }}
        >

            {/* Flairs */}
            {FLAIRS.map((src, index) => (
                <span
                    key={index}
                    ref={(el) => {
                        flairsRef.current[index] = el;
                    }}
                    className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        z-0
                        size-10
                        -translate-x-1/2
                        -translate-y-1/2
                        opacity-0
                    "
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        willChange: "transform, opacity",
                    }}
                />
            ))}

            {/* Button content */}
            <span
                className="
                    relative
                    z-1
                    flex
                    items-center
                    justify-center
                    text-[17px]
                    font-medium
                    tracking-wider
                    whitespace-nowrap
                "
            >
                {children.split(" ").map((word, index) => (
                    <span
                        key={index}
                        className="flair-button-word inline-block"
                    >
                        {word}
                        {index === 0 && "\u00A0"}
                    </span>
                ))}
            </span>

        </button>
    );
};

export default CoreCTA;