import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
 
import { RiCheckFill, RiClipboardLine, RiCloseLargeLine, RiHammerFill, RiMailUnreadLine, RiMenu2Line, RiSendPlaneFill } from "@remixicon/react"

import clsx from "clsx";

import { useEffect, useRef, useState } from "react";

import { khamsat, mostaql } from "../../assets";
 
const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
}) => {
  return (
    <>
        <FloatingDockDesktop items={items} className={desktopClassName} />
        <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};
 
const FloatingDockMobile = ({
  items,
  className,
}) => {

  const [open, setOpen] = useState(false);
  let mouseX = useMotionValue(Infinity);

  return (
    <div className={clsx("hidden max-md:flex", className)}>

        <AnimatePresence>
            {open && (
                <motion.div
                    layoutId="nav"
                    className="absolute left-1/2 -translate-x-1/2 bottom-full -mb-2.5 flex items-center gap-2"
                >
                    
                    {items.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: 10,
                                transition: {
                                    delay: idx * 0.05,
                                },
                            }}
                            transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                        >
                            <a
                                target="_blank"
                                href={item.href}
                                key={item.title}
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-800/60"
                                >
                                <div className="h-6 w-6">{item.icon}</div>
                            </a>
                        </motion.div>
                    ))}

                </motion.div>
            )}
        </AnimatePresence>

        <div className="flex items-center gap-2.5">
            <SpecialIconContainer
                mouseX={mouseX}
                isAnimated={false}
                title={"email"}
                icon={<RiMailUnreadLine className="h-full w-full text-neutral-300" />}
            ></SpecialIconContainer>

            <button
                onClick={() => setOpen(!open)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800/75 hover:bg-neutral-800 active:scale-95 duration-400 cursor-pointer"
                style={{ 
                    boxShadow: "inset 0 0 0 2px rgba(255, 255, 255, 0.05), inset 0 2px rgba(255, 255, 255, 0.06), inset 0px -5px 6px 0px rgba(255, 255, 255, 0.04)"
                }}
            >
                <RiMenu2Line className="h-5 w-5 text-neutral-400" />
            </button>

            <SpecialIconContainer
                mouseX={mouseX}
                isAnimated={false}
                title={"freelance"}
                icon={<RiHammerFill className="h-full w-full text-neutral-300" />}
            ></SpecialIconContainer>
        </div>
    </div>
  );
};
 
const FloatingDockDesktop = ({
    items,
    className,
}) => {
    let mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={clsx(
                "relative mx-auto hidden h-16 rounded-2xl items-end pb-3 md:flex bg-neutral-900 border-b border-b-white/10 px-4",
                className,
            )}
            style={{
                boxShadow: "inset 0 0 0 2px rgba(255, 255, 255, 0.03), inset 0 2px rgba(255, 255, 255, 0.05), 0px 0px 2px 5px rgba(0, 0, 0, 0.06)"
            }}
        >

            {/* Separator Line - Left */}
            <div 
                style={{
                    background: "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)"
                }}
                className="absolute z-0 w-px h-5/10 top-1/2 -translate-y-1/2 left-[calc(44px+16px+8px)]"
            />

            <SpecialIconContainer
                mouseX={mouseX}
                isAnimated={true}
                title={"email"}
                icon={<RiMailUnreadLine className="h-full w-full text-neutral-300" />}
            ></SpecialIconContainer>

            <div className="relative flex items-end gap-4 px-6">
                {items.map((item) => (
                    <IconContainer mouseX={mouseX} key={item.title} {...item} />
                ))}
            </div>

            {/* Separator Line - Right */}
            <div 
                style={{
                    background: "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)"
                }}
                className="absolute z-0 w-px h-5/10 top-1/2 -translate-y-1/2 right-[calc(44px+16px+8px)]"
            />   

            <SpecialIconContainer
                mouseX={mouseX}
                isAnimated={true}
                title={"freelance"}
                icon={<RiHammerFill className="h-full w-full text-neutral-300" />}
            ></SpecialIconContainer>

        </motion.div>
    );
};
 
function IconContainer({
    mouseX,
    title,
    icon,
    href,
}) {
    let ref = useRef(null);
    
    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    
        return val - bounds.x - bounds.width / 2;
    });
    
    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    
    let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    let heightTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [20, 40, 20],
    );
    
    let width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    
    let widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
 
  const [hovered, setHovered] = useState(false);
 
  return (
    <a target="_blank" href={href}>
        <motion.div
            ref={ref}
            style={{ width, height }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
        >
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 2, x: "-50%" }}
                        className="absolute -top-8 left-1/2 w-fit rounded-md px-3 py-1 text-xs whitespace-pre border-b border-b-white/20 border-r border-r-white/10 border-l border-l-white/10 bg-neutral-800 text-white capitalize"
                    >
                        {title}
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                style={{ width: widthIcon, height: heightIcon }}
                className="flex items-center justify-center"
            >
                {icon}
            </motion.div>
        </motion.div>
    </a>
  );
}

function SpecialIconContainer({
    isAnimated,
    mouseX,
    title,
    icon,
}) {
    let ref = useRef(null);
    
    let distance = useTransform(mouseX, (val) => {
        
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    
        return val - bounds.x - bounds.width / 2;
    });
    
    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    
    let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    let heightTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [20, 40, 20],
    );
    
    let width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    
    let widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
 
    const [hovered, setHovered] = useState(false);

    const [isEmailClicked, setIsEmailClicked] = useState(false);
    const [isEmailCopied, setIsEmailCopied] = useState(false);

    const [isFreelanceClicked, setIsFreelanceClicked] = useState(false);

    return (
        <>
            <button>
                <motion.div
                    ref={ref}
                    style={{
                        width: isAnimated ? width : "44px", 
                        height: isAnimated ? height : "44px", 
                        background: title === "email" ? "linear-gradient(to top left, rgb(22, 44, 56) 0%, rgba(74, 149, 188, 0.6) 50%, rgba(74, 149, 188, 0.8) 100%)" : "linear-gradient(to top left, rgb(30, 70, 32) 0%, rgba(53, 122, 56, 0.6) 50%, rgb(53, 122, 56) 100%)"
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={() => title === "email" ? setIsEmailClicked(prev => !prev) : setIsFreelanceClicked(prev => !prev)}
                    className="relative flex aspect-square items-center justify-center rounded-full border-b border-b-white/10 border-r border-r-white/10 cursor-pointer backdrop-blur-sm"
                >
                    {
                        isAnimated 
                        ? (
                            <motion.div
                                style={{ width: widthIcon, height: heightIcon }}
                                className="flex items-center justify-center"
                            >
                                {icon}
                            </motion.div>
                        ) : (
                            <div className="h-6 w-6">{icon}</div>
                        )
                    }

                    <>
                        {
                            title === "email"
                            ? (
                                <AnimatePresence>
                                    {hovered && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 25, x: "-50%" }}
                                            animate={{ opacity: 1, y: -15, x: "-50%" }}
                                            exit={{ opacity: 0, y: 10, x: "-50%" }}
                                            className="absolute -top-8 left-1/2 w-fit rounded-md px-1.5 py-1.5 text-xs whitespace-pre border-t border-t-white/15 border-r border-r-white/10 border-l border-l-white/10 text-white capitalize z-2"
                                            style={{ background: "rgba(74, 149, 188, 0.6)" }}
                                        >
                                            <div className="flex-center-between gap-2">
                                                Email
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            ) 
                            : (
                                <AnimatePresence>
                                    {hovered && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 25, x: "-50%" }}
                                            animate={{ opacity: 1, y: -15, x: "-50%" }}
                                            exit={{ opacity: 0, y: 10, x: "-50%" }}
                                            className="absolute -top-8 left-1/2 w-fit rounded-md px-1.5 py-1.5 text-xs whitespace-pre border-t border-t-white/15 border-r border-r-white/10 border-l border-l-white/10 text-white capitalize z-2"
                                            style={{ background: "rgba(53, 122, 56, 0.6)" }}
                                        >
                                            <div className="flex-center-between gap-2">
                                                Freelance
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )
                        }
                    </>
                </motion.div>
            </button>

            <>
                {
                    title === "email" 
                    ? (
                        <AnimatePresence>
                            {isEmailClicked && (
                                <motion.div
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 25, }}
                                    className="fixed bottom-6 left-6 bg-neutral-900 rounded-lg w-5/10 max-w-60"
                                    style={{ 
                                        boxShadow: "inset 0 0 0 2px rgba(255, 255, 255, 0.05), inset 0 2px rgba(255, 255, 255, 0.06), inset 0px -5px 6px 0px rgba(255, 255, 255, 0.04)"
                                    }}
                                >
                                    
                                    {/* Head */}
                                    <div className="relative px-4.5 w-full h-13 flex items-center justify-start">
                                        {/* Close BTN - Mobile */}
                                        <button 
                                            className="absolute top-1/2 -translate-y-1/2 right-4.5 w-7 h-7 flex-center-all bg-neutral-800 duration-300 hover:bg-neutral-800/80 active:scale-96 rounded-full cursor-pointer"
                                            onClick={() => setIsEmailClicked(false)}
                                        >
                                            <RiCloseLargeLine size={15} />
                                        </button>
                                        
                                        <h5 
                                            style={{ wordSpacing: "4px" }}
                                            className="text-[18px] max-md:text-[17px] max-sm:text-[16px] tracking-wide"
                                        >Email Control</h5>

                                        {/* Shiny Bottom Border */}
                                        <div
                                            style={{ 
                                                background: "radial-gradient(circle, rgba(74, 149, 188, 0.6) 0%, rgba(71, 133, 164, 0) 100%)"
                                            }} 
                                            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8/10"
                                        />
                                    </div>

                                    {/* Body & Links */}
                                    <div className="relative p-4.5 flex-col-center gap-3">
                                        
                                        {/* Copy Email To Clipboard */}
                                        <button
                                            className={clsx("w-full p-3 flex items-center gap-3.5 rounded-lg cursor-pointer duration-400 ring hover:bg-[rgba(53,122,56,0.18)] hover:ring-[rgba(53,122,56,0.35)]", isEmailCopied ? "bg-[rgba(53,122,56,0.28)] ring-[rgba(53,122,56,0.38)]" : "ring-transparent bg-neutral-800/70")}
                                            onClick={() => {

                                                setIsEmailCopied(true);

                                                // Write My Email In Clipboard 
                                                navigator.clipboard.writeText("djabertouati0@gmail.com");

                                                window.setTimeout(() => {
                                                    setIsEmailCopied(false);
                                                }, 3000);

                                            }}

                                        >
                                            <div className="relative w-5.5 h-full flex-center-all">
                                                <RiClipboardLine 
                                                    size={22}
                                                    className={clsx("absolute text-neutral-300 duration-400", isEmailCopied ? "opacity-0" : "opacity-100")}
                                                />
                                                <RiCheckFill 
                                                    size={22}
                                                    className={clsx("absolute text-neutral-300 duration-400", isEmailCopied ? "opacity-100" : "opacity-0")}
                                                />
                                            </div>
                                            <span style={{ wordSpacing: "2.5px" }} className="text-[14px]">Copy To Clipboard</span>
                                        </button>
                                        
                                        <a 
                                            href="mailto:djabertouati0@gmail.com" 
                                            className="w-full p-3 flex items-center gap-3.5 bg-neutral-800/70 rounded-lg cursor-pointer duration-500 ring ring-transparent hover:bg-[rgba(74,149,188,0.18)] hover:ring-[rgba(74,149,188,0.32)]"
                                            target="_blank"
                                        >
                                            <RiSendPlaneFill size={23} />
                                            <span style={{ wordSpacing: "2.5px" }} className="text-[14px]">Send Message</span>
                                        </a>

                                    </div>

                                </motion.div>
                            )}
                        </AnimatePresence>
                    ) 
                    : (
                        <AnimatePresence>
                            {isFreelanceClicked && (
                                <motion.div
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 25 }}
                                    className="fixed bottom-6 right-6 bg-neutral-900 rounded-lg w-5/10 max-w-55"
                                    style={{ 
                                        boxShadow: "inset 0 0 0 2px rgba(255, 255, 255, 0.05), inset 0 2px rgba(255, 255, 255, 0.06), inset 0px -5px 6px 0px rgba(255, 255, 255, 0.04)"
                                    }}
                                >
                                    
                                    {/* Head */}
                                    <div className="relative px-4.5 w-full h-13 flex items-center justify-start">
                                        {/* Close BTN - Mobile */}
                                        <button 
                                            className="absolute top-1/2 -translate-y-1/2 right-4.5 w-7 h-7 flex-center-all bg-neutral-800 duration-300 hover:bg-neutral-800/80 active:scale-96 rounded-full cursor-pointer"
                                            onClick={() => setIsFreelanceClicked( false)}
                                        >
                                            <RiCloseLargeLine size={15} />
                                        </button>
                                        
                                        <h5 
                                            style={{ wordSpacing: "4px" }}
                                            className="text-[18px] max-md:text-[17px] max-sm:text-[16px] tracking-wide"
                                        >Freelance Links</h5>

                                        {/* Shiny Bottom Border */}
                                        <div
                                            style={{ 
                                                background: "radial-gradient(circle, rgba(53, 122, 56, 0.8) 0%, rgba(53, 122, 56, 0) 100%)"
                                            }} 
                                            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8/10"
                                        />
                                    </div>

                                    {/* Body & Links */}
                                    <div className="relative p-4.5 flex-col-center gap-2">
                                        
                                        <a 
                                            className="w-full p-3 flex items-center gap-3.5 bg-neutral-800/70 rounded-lg cursor-pointer duration-500 ring ring-transparent hover:bg-[rgba(249,180,50,0.14)] hover:ring-[rgba(249,180,50,0.28)]"
                                            href="https://khamsat.com/user/djabertouati" 
                                            target="_blank"
                                        >
                                            <img 
                                                src={khamsat}
                                                alt={`khamsat-logo`}
                                                className="w-6 h-full rounded-md"
                                            />

                                            <span style={{ wordSpacing: "2.5px" }} className="text-[14px]">Khamsat</span>
                                        </a>
                                        
                                        <a 
                                            className="w-full p-3 flex items-center gap-3.5 bg-neutral-800/70 rounded-lg cursor-pointer duration-500 ring ring-transparent hover:bg-[rgba(35,134,201,0.14)] hover:ring-[rgba(35,134,201,0.28)]"
                                            href="https://mostaql.com/u/djaber_touati99" 
                                            target="_blank"
                                        >
                                            <img 
                                                src={mostaql}
                                                alt={`mostaql-logo`}
                                                className="w-6 h-full"
                                            />

                                            <span style={{ wordSpacing: "2.5px" }} className="text-[14px]">Mostaql</span>
                                        </a>

                                    </div>

                                </motion.div>
                            )}
                        </AnimatePresence>
                    )
                }
            </>
        </>
    );
}

export default FloatingDock;