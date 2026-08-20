import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { RiArrowLeftLongLine, RiCheckboxCircleFill, RiMore2Fill, RiGlobalLine, RiGithubFill } from "@remixicon/react";

gsap.registerPlugin(useGSAP, DrawSVGPlugin);

const ProjectCard = ({ projectObj }) => {
    
    // Draw SVG Strokes Animation
    const [showContent, setShowContent] = useState(false);
    const [isCardHovered, setIsCardHovered] = useState(false);
    const pathsRef = useRef([]);
    let mainTL = useRef(null);
    
    useGSAP(() => {
        
        // Draw Paths Animation
        mainTL.current = gsap.timeline({ paused: true });

        pathsRef.current.forEach((path) => {
            mainTL.current.fromTo(path,
                {
                    x: 0,
                    drawSVG: 0,
                },
                {

                    x: 200,
                    drawSVG: "100%",
                    strokeWidth: 250,

                    duration: 2.5,
                    ease: "expo.inOut"
                }, 
                0
            );
        });

        // Animating Content
        mainTL.current.fromTo(".fade", 
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.6,
                ease: "expo.inOut",
                stagger: 0.1
            },
        );
        

    }, []);

    useEffect(() => {
        if (showContent) {
            mainTL.current.play();
        } else {
            mainTL.current.reverse();
        }
    }, [showContent]);

    return (
        
        <div
            key={projectObj.id}
            className="project-card relative w-[80vw] max-w-6xl h-[80vh] rounded-3xl shadow-2xl overflow-hidden p-8 max-md:p-6"
            style={{ backgroundColor: projectObj.darkBGColor }}
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
        >

            {/* Card Glow Layer */}
            <div className="absolute z-0 top-0 left-0 w-42 h-[calc(100%+200px)] bg-white opacity-15 -translate-y-3/10 -rotate-65 blur-[96px]"></div>

            {/* Project Content */}
            <div className="relative z-4 w-full h-full flex-col-center">

                {/* Card Head */}
                <div className="w-full flex-start-between">

                    {/* Minimal Project Info */}
                    <div className="w-full flex-col-start gap-5">

                        {/* Logo + projectName */}
                        <div className="flex items-center gap-4.5">
                            <div className="relative w-14 h-14 p-2.5 rounded-lg bg-main-black border-t border-t-white/10 border-r border-r-white/10 flex-center-all">
                                <img 
                                    src={projectObj.logo}
                                    alt="logo"
                                    className="w-full h-full"
                                />
                            </div>

                            <h3 style={{ wordSpacing: "2px" }} className="relative text-[28px] max-md:text-[25px] font-semibold tracking-[-0.010em]">
                                {projectObj.name}
                            </h3>
                        </div>

                        <div className="flex items-start flex-col max-lg:flex-row max-lg:items-center gap-4">
                            {/* Technologies */}
                            <div className="relative w-fit flex items-center group">
                                {projectObj.technologies.map((tech, index) => (
                                    <img
                                        key={`tech-${index + 1}`}
                                        src={tech}
                                        alt={`tech-${index + 1}`}
                                        className={clsx("relative bg-linear-to-tr from-white/5 to-white/20 border-t border-t-white/35 border-l border-l-white/35 backdrop-blur-sm rounded-full flex-center-all w-11.5 h-11.5 p-2.5 duration-500 group-hover:border-t-white/50 group-hover:border-l-white/50 group-hover:ml-1", index !== 0 ? "-ml-1.5" : "0px")}
                                        style={{ marginLeft: index === 0 && "0px" }}
                                    />
                                ))}
                            </div>
                            
                            {/* Category */}
                            <div 
                                className={`category relative py-1.5 px-4 flex-center-all rounded-full backdrop-blur-sm bg-linear-to-tl from-white/5 to-white/10 border-t border-l overflow-hidden`}
                                style={{ borderTopColor: projectObj.lightPathColor, borderLeftColor: projectObj.lightPathColor }}
                            >
                                {/* SVG */}
                                <svg    
                                    className="wave absolute -z-1 bottom-1 scale-[2] opacity-20 blur-[1.6px]"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 1440 320"
                                >
                                    <path
                                        fill={projectObj.lightPathColor}
                                        fillOpacity={1}
                                        d="M0,256L16,240C32,224,64,192,96,170.7C128,149,160,139,192,165.3C224,192,256,256,288,245.3C320,235,352,149,384,133.3C416,117,448,171,480,165.3C512,160,544,96,576,96C608,96,640,160,672,170.7C704,181,736,139,768,138.7C800,139,832,181,864,208C896,235,928,245,960,229.3C992,213,1024,171,1056,144C1088,117,1120,107,1152,90.7C1184,75,1216,53,1248,74.7C1280,96,1312,160,1344,197.3C1376,235,1408,245,1424,250.7L1440,256L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
                                    />
                                </svg>

                                <span style={{ wordSpacing: "3px" }} className="relative font-inter text-[14px] leading-7.5 font-medium tracking-wide whitespace-nowrap">{projectObj.category}</span>
                            </div>
                        </div>
                        
                    </div>

                    {/* Buttons */}
                    <div className="relative z-2 flex items-center flex-row-reverse gap-3">
                        
                        {/* Show Centent BTN */}
                        <button 
                            className="tooltip-btn relative w-12 h-12 bg-transparent hover:bg-white/10 backdrop-blur-sm rounded-full cursor-pointer flex-center-all border-t border-t-white/15 border-r border-r-white/15 hover:border-t-white/20 hover:border-r-white/20 duration-500"
                            data-label={"Show Content"}
                            onClick={() => setShowContent((prev) => !prev)}
                        >
                            <div className="absolute w-full h-full flex-center-all overflow-hidden">
                                <RiMore2Fill color="white" size={23} className={clsx("absolute duration-500", showContent ? "-translate-y-18 opacity-0" : "translate-y-0 opacity-100")} />
                                <RiArrowLeftLongLine color="white" size={23} className={clsx("absolute duration-500", showContent ? "translate-y-0 opacity-100" : "translate-y-18 opacity-0")} />
                            </div>
                        </button>

                        {/* Live Demo */}
                        <a 
                            className={clsx("tooltip-btn relative w-12 h-12 bg-transparent hover:bg-white/10 backdrop-blur-sm rounded-full cursor-pointer flex-center-all border-t border-t-white/10 border-r border-r-white/15 hover:border-t-white/20 hover:border-r-white/20 duration-500", showContent ? "-translate-y-26 rotate-6" : "translate-y-0 rotate-0")}
                            data-label={projectObj.links[0].label}
                            href={projectObj.links[0].href}
                            target="_blank"
                        >
                            <RiGlobalLine size={23} color="white" />
                        </a>

                    </div>
                </div>

                {/* Card Details */}
                <div className={clsx("fade w-full h-full flex-center-between -mt-12")}>

                    {/* Description Area */}
                    <div className="relative w-5/10 h-full flex items-center max-lg:hidden">
                        
                        {/* Shiny Seperator */}
                        <div
                            className="absolute w-0.5 h-7/10 top-1/2 -translate-y-1/2 right-0"
                            style={{
                                background: "transparent",
                                backgroundImage: `radial-gradient(circle, ${projectObj.mainColor} 0%, rgba(74, 149, 188, 0) 100%)`
                            }}
                        ></div>
                            

                        <p className="font-inter text-[17px] leading-[1.6] text-[#ccc] w-full max-w-8/10">{projectObj.description}</p>
                        
                    </div>

                    {/* Features Area */}
                    <ul className="w-4/10 max-lg:w-full flex-col-start gap-5">
                        {projectObj.features.map((feature, index) => (
                            <li 
                                key={`feature-${index + 1}`}
                                className="flex items-center gap-2"
                            >

                                <RiCheckboxCircleFill size={25} color={projectObj.mainColor} />
                                <span className="font-inter text-[15px] max-sm:text-[14px] text-[#ccc]">{feature}</span>

                            </li>
                        ))}
                    </ul>

                </div>

            </div>
            
            {/* Card BTN's */}
            <div className={clsx("fade absolute z-5 bottom-8 max-md:bottom-6 left-8 max-md:left-6 flex items-center gap-4")}>

                {projectObj.links.map((link, index) => (
                    <a 
                        key={`link-${index + 1}`}
                        href={link.href}
                        className={`detailed-btn flex items-center gap-2.5 py-1.5 pl-2 pr-4 rounded-full backdrop-blur-sm bg-linear-to-tl from-white/5 to-white/10 cursor-pointer overflow-hidden group`}
                        target="_blank"
                        style={{ 
                            borderTop: `solid ${projectObj.mainColor} 1px`
                        }}
                    >

                        {/* Fill BG */}
                        <div 
                            className="absolute -z-1 -top-2 left-1/2 -translate-x-1/2 w-5/10 rounded-full h-2 duration-300 group-hover:h-[calc(100%+50px)] group-hover:w-[calc(100%+50px)] group-hover:translate-y-2 blur-sm"
                            style={{ backgroundColor: projectObj.mainColor }}
                        ></div>

                        {
                            link.about === "website" 
                            ? <RiGlobalLine size={32} />
                            : <RiGithubFill size={32} />
                        }
                        
                        <span className="text-[15px] font-inter">{link.label}</span>

                    </a>
                ))}

            </div>

            {/* Project Showcase */}
            <div className="absolute z-1 w-full h-full top-1/2 left-1/2 -translate-1/2 flex-center-all">
                
                {/* Video - Center Behind */}
                <div 
                    className={clsx("absolute w-[36%] max-lg:w-[40%] max-md:w-[44%] left-[4%] max-lg:left-[3%] max-md:left-[5%] translate-y-18 max-md:-translate-y-3 before:content-[''] before:absolute before:-inset-1 before:-z-1 before:bg-white/15 before:backdrop-blur-sm before:rounded-2xl before:border-b before:border-b-white/30 before:border-l before:border-l-white/30 duration-700", isCardHovered ? "-rotate-2" : "-rotate-5")}
                    style={{ filter: "drop-shadow(2px 6px 8px rgba(0, 0, 0, 0.8))" }}    
                >

                    <video 
                        className="relative rounded-2xl"
                        muted autoPlay loop
                    >
                        <source src={projectObj.showcase[2].src} type={projectObj.showcase[2].type} />
                    </video>

                </div>

                {/* Laptop - Center */}
                <img 
                    src={projectObj.showcase[0].img} 
                    alt={projectObj.showcase[0].type}
                    className={clsx("w-[63%] max-lg:w-[70%] max-md:w-[75%] translate-y-12 max-lg:translate-y-20 max-md:translate-y-32 translate-x-22 max-lg:translate-x-12 max-md:translate-x-0 duration-700", isCardHovered ? "rotate-0" : "rotate-1")}
                    style={{ filter: "drop-shadow(2px 6px 8px rgba(0, 0, 0, 0.8))" }}
                />

                {/* Mobile - Right */}
                <img 
                    src={projectObj.showcase[1].img} 
                    alt={projectObj.showcase[1].type}
                    className={clsx("absolute w-[13%] max-md:w-[15.5%] right-[6%] max-md:right-[8%] translate-y-15 max-lg:translate-y-25 max-md:translate-y-4 duration-700", isCardHovered ? "rotate-0" : "-rotate-3")}
                    style={{ filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.8))" }}
                />


            </div>
            
            {/* SVG Drawen Paths */}
            <div className="absolute z-2 left-1/2 top-1/2 -translate-1/2 w-full h-full flex-center-start">

                <div className="absolute">
                    <svg
                        width={1000}
                        height={973.913}
                        viewBox="0 0 1000 973.913"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="scale-[2] rotate-50 -translate-y-80"
                    >
                        <path
                            ref={(el) => pathsRef.current[0] = el}
                            className="animated-path animated-path-1"
                            d="M748.23 944.082c169.792 -47.543 217.392 -78.26 217.392 -143.478 0 -333.148 -830.792 293.327 -852.173 -39.13 -21.052 -327.252 827.243 101.313 808.697 -226.087 -18.93 -334.067 -724.613 285.76 -856.522 -21.74 -143.9 -335.448 991.303 82.608 900 -252.173C868.227 -95.633 4.752 474.518 26.492 200.603s330.433 -143.478 330.433 -143.478"
                            stroke={projectObj.lightPathColor}
                            strokeWidth={100}
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <div className="absolute">
                    <svg
                        width={1000}
                        height={1026.786}
                        viewBox="0 0 1000 1026.786"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="scale-[2] rotate-90 -translate-y-180"
                    >
                        <path
                            ref={(el) => pathsRef.current[1] = el}
                            className="animated-path animated-path-2"
                            d="M969.371 255.348c-48.817 -174.339 -80.357 -223.214 -147.321 -223.214 -342.071 0 301.183 853.045 -40.179 875 -336.018 21.616 104.027 -849.402 -232.143 -830.357 -343.013 19.433 293.415 744.022 -22.321 879.464 -344.433 147.754 84.821 -1017.857 -258.929 -924.107 -366.674 100 218.75 986.607 -62.5 964.286s-147.321 -339.286 -147.321 -339.286"
                            stroke={projectObj.darkPathColor}
                            strokeWidth={100}
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

            </div>

        </div>

    );
};

export default ProjectCard;