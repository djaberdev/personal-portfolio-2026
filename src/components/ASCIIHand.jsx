import clsx from "clsx";
import { useEffect, useRef } from "react";

const ASCIIHand = ({

    imgSrc,
    imgAlt = "",
    imgClassName,
    className = "",

    // ASCII
    characters = "@%#*+=-:. ",
    resolution = 140,
    fontSize = 8,

    // Visual
    baseColor = "rgba(255,255,255,0.7)",

    // Mouse interaction
    parallaxStrength = 5,
    rotateStrength = 1.5,

    // Motion smoothing
    smoothness = 0.08,

}) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    const mouseRef = useRef({
        x: 0,
        y: 0,
        active: false,
    });

    const animationRef = useRef(null);

    /*
    --------------------------------
    Transform state
    --------------------------------
    */

    const transformRef = useRef({
        currentX: 0,
        currentY: 0,
        currentRotateX: 0,
        currentRotateY: 0,

        targetX: 0,
        targetY: 0,
        targetRotateX: 0,
        targetRotateY: 0,
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;

        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d", {
            willReadFrequently: true,
        });

        const image = new Image();

        /*
        --------------------------------
        Canvas / Image preparation
        --------------------------------
        */

        image.onload = () => {
            const containerRect =
                container.getBoundingClientRect();

            const width = containerRect.width;
            const height = containerRect.height;

            const aspectRatio =
                image.height / image.width;

            /*
            --------------------------------
            ASCII resolution
            --------------------------------
            */

            const columns = resolution;

            const rows = Math.max(
                1,
                Math.floor(
                    columns *
                    aspectRatio *
                    0.5
                )
            );

            /*
            --------------------------------
            Device Pixel Ratio
            --------------------------------
            */

            const dpr = Math.min(
                window.devicePixelRatio || 1,
                2
            );

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(
                dpr,
                0,
                0,
                dpr,
                0,
                0
            );

            /*
            --------------------------------
            Offscreen canvas
            --------------------------------
            */

            const offscreen =
                document.createElement("canvas");

            offscreen.width = columns;
            offscreen.height = rows;

            const offCtx =
                offscreen.getContext("2d", {
                    willReadFrequently: true,
                });

            offCtx.clearRect(
                0,
                0,
                columns,
                rows
            );

            offCtx.drawImage(
                image,
                0,
                0,
                columns,
                rows
            );

            const pixels =
                offCtx.getImageData(
                    0,
                    0,
                    columns,
                    rows
                ).data;

            /*
            --------------------------------
            Build ASCII particles
            --------------------------------
            */

            const particles = [];

            const cellWidth =
                width / columns;

            const cellHeight =
                height / rows;

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < columns; x++) {

                    const index =
                        (y * columns + x) * 4;

                    const r = pixels[index];
                    const g = pixels[index + 1];
                    const b = pixels[index + 2];
                    const alpha = pixels[index + 3];

                    /*
                    Ignore transparent pixels
                    */

                    if (alpha < 20) continue;

                    /*
                    --------------------------------
                    Brightness
                    --------------------------------
                    */

                    const brightness =
                        0.299 * r +
                        0.587 * g +
                        0.114 * b;

                    /*
                    Ignore completely dark pixels
                    */

                    if (brightness < 18) continue;

                    /*
                    Normalize brightness
                    */

                    const normalizedBrightness =
                        brightness / 255;

                    /*
                    --------------------------------
                    Character mapping
                    --------------------------------
                    */

                    const charIndex = Math.min(
                        characters.length - 1,
                        Math.floor(
                            normalizedBrightness *
                            (characters.length - 1)
                        )
                    );

                    const char =
                        characters[charIndex];

                    /*
                    Empty character = transparent
                    */

                    if (char === " ") continue;

                    /*
                    --------------------------------
                    Soft opacity
                    --------------------------------

                    Instead of making every character
                    equally visible, preserve some
                    brightness information in opacity.

                    This helps the edges feel smoother.
                    */

                    const particleAlpha =
                        Math.pow(
                            normalizedBrightness,
                            0.75
                        ) *
                        (alpha / 255);

                    particles.push({
                        x:
                            x * cellWidth +
                            cellWidth / 2,

                        y:
                            y * cellHeight +
                            cellHeight / 2,

                        char,

                        alpha: particleAlpha,
                    });
                }
            }

            /*
            --------------------------------
            Canvas text setup
            --------------------------------
            */

            ctx.font =
                `${fontSize}px monospace`;

            ctx.textBaseline = "middle";
            ctx.textAlign = "center";

            /*
            --------------------------------
            Render loop
            --------------------------------
            */

            const render = () => {

                ctx.clearRect(
                    0,
                    0,
                    width,
                    height
                );

                particles.forEach((particle) => {

                    ctx.globalAlpha =
                        particle.alpha;

                    ctx.fillStyle =
                        baseColor;

                    ctx.fillText(
                        particle.char,
                        particle.x,
                        particle.y
                    );
                });

                ctx.globalAlpha = 1;

                animationRef.current =
                    requestAnimationFrame(
                        render
                    );
            };

            render();
        };

        image.src = imgSrc;

        /*
        ========================================
        MOUSE
        ========================================
        */

        const handlePointerMove = (event) => {

            const rect =
                container.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;

            mouseRef.current = {
                x,
                y,
                active: true,
            };

            /*
            --------------------------------
            Normalize mouse position
            --------------------------------
            */

            const normalizedX =
                x / rect.width - 0.5;

            const normalizedY =
                y / rect.height - 0.5;

            /*
            --------------------------------
            Target transform
            --------------------------------
            */

            transformRef.current.targetX =
                normalizedX *
                parallaxStrength;

            transformRef.current.targetY =
                normalizedY *
                parallaxStrength;

            transformRef.current.targetRotateX =
                -normalizedY *
                rotateStrength;

            transformRef.current.targetRotateY =
                normalizedX *
                rotateStrength;
        };

        /*
        ========================================
        POINTER LEAVE
        ========================================
        */

        const handlePointerLeave = () => {

            mouseRef.current.active =
                false;

            transformRef.current.targetX = 0;
            transformRef.current.targetY = 0;
            transformRef.current.targetRotateX = 0;
            transformRef.current.targetRotateY = 0;
        };

        /*
        ========================================
        SMOOTH TRANSFORM LOOP
        ========================================
        */

        const animateTransform = () => {

            const transform =
                transformRef.current;

            /*
            LERP

            current +=
            (target - current) * smoothness
            */

            transform.currentX +=
                (
                    transform.targetX -
                    transform.currentX
                ) *
                smoothness;

            transform.currentY +=
                (
                    transform.targetY -
                    transform.currentY
                ) *
                smoothness;

            transform.currentRotateX +=
                (
                    transform.targetRotateX -
                    transform.currentRotateX
                ) *
                smoothness;

            transform.currentRotateY +=
                (
                    transform.targetRotateY -
                    transform.currentRotateY
                ) *
                smoothness;

            /*
            --------------------------------
            Apply transform
            --------------------------------
            */

            canvas.style.transform = `
                translate3d(
                    ${transform.currentX}px,
                    ${transform.currentY}px,
                    0
                )

                rotateX(
                    ${transform.currentRotateX}deg
                )

                rotateY(
                    ${transform.currentRotateY}deg
                )
            `;

            animationRef.current =
                requestAnimationFrame(
                    animateTransform
                );
        };

        animateTransform();

        /*
        ========================================
        EVENTS
        ========================================
        */

        container.addEventListener(
            "pointermove",
            handlePointerMove
        );

        container.addEventListener(
            "pointerleave",
            handlePointerLeave
        );

        /*
        ========================================
        CLEANUP
        ========================================
        */

        return () => {

            container.removeEventListener(
                "pointermove",
                handlePointerMove
            );

            container.removeEventListener(
                "pointerleave",
                handlePointerLeave
            );

            if (animationRef.current) {
                cancelAnimationFrame(
                    animationRef.current
                );
            }

            image.onload = null;
        };

    }, [
        imgSrc,
        characters,
        resolution,
        fontSize,
        baseColor,
        parallaxStrength,
        rotateStrength,
        smoothness,
    ]);

    return (
        <div
            ref={containerRef}
            className={clsx(
                "relative overflow-hidden",
                className
            )}
            style={{
                perspective: "800px",
            }}
        >

            {/* Original image */}
            <img
                src={imgSrc}
                alt={imgAlt}
                className={clsx(
                    "hidden",
                    imgClassName
                )}
            />

            {/* ASCII */}
            <canvas
                ref={canvasRef}
                className="block h-full w-full"
                style={{
                    transformStyle:
                        "preserve-3d",

                    willChange:
                        "transform",
                }}
            />

        </div>
    );
};

export default ASCIIHand;