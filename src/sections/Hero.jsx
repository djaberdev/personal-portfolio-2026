import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import { Element, Link } from "react-scroll";

import { navbarLinks } from "../constants";

import { RiCloseLargeFill, RiMenuFill } from "@remixicon/react";

import { profile1, profile2, profile3, profile4, profile5, } from "../assets/index";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

import { CursorGrid, Magnet } from "../components";

gsap.registerPlugin(useGSAP, SplitText);

const Hero = () => {

    const [activeNavItem, setActiveNavItem] = useState(navbarLinks[0]);
    const [isAreaHovered, setIsAreaHovered] = useState(false);
    const [isCardHovered, setIsCardHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });

    const cardRef = useRef(null);
    
    const profileImages = [profile1, profile2, profile3, profile4, profile5];

    // Animating The Floating Layer Of Navbar Links
    useGSAP(() => {

        gsap.to(".floating-layer", {
            x: (Number(activeNavItem.id) * 124),
            duration: 0.5,
            ease: "expo.out"
        });

    }, [activeNavItem]);

    // Handle The Tilt Effect
    const handleCardMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        setIsCardHovered(true);
        setCardTilt({
            x: y * -14,
            y: x * 14
        });
    };

    const handleCardLeave = () => {
        setIsCardHovered(false);
        setCardTilt({ x: 0, y: 0 });
    };

    // Handle The Flash Effect — Profile Card
    useGSAP(() => {
        gsap.set(".flash-layer", { translateX: -120, rotate: 45 })

        gsap.to(".flash-layer", {
            translateX: 180,
            duration: 3.6,
            ease: "power3.inOut",
            repeat: -1,
            yoyo: true,
            repeatDelay: 20
        });
    });

    // fullScreen Navigation Animation
    let navbarTL = useRef(null); 

    useGSAP(() => {
        
        navbarTL.current = gsap.timeline({ paused: true });

        navbarTL.current.fromTo(".screen-nav", 
            {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            },
            {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1.3,
                ease: "expo.inOut",
            }
        );

        navbarTL.current.fromTo(".hero-info", 
            {
                y: 0
            },
            {
                y: "75%",
                duration: 1.3,
                ease: "expo.inOut"
            },
            "<"
        );

        // Links Chars Animation
        let navbarLinksChars = [
            { label: "home", characters: [] },
            { label: "projects", characters: [] },
            { label: "services", characters: [] },
            { label: "about", characters: [] },
            { label: "contact", characters: [] },
        ];

        // * This works very fine
        navbarLinksChars.forEach((item) => {

            let split = SplitText.create(`.${item.label}-link`, {
                type: "chars",
            });

            item.characters = split.chars;

        });

        // ! There is a problem here
        // navbarLinksChars.forEach((item) => (
        //     navbarTL.current.fromTo(item.characters, 
        //         {
        //             y: -30,
        //         }.6,
        //         {
        //             y: 0,
        //             duration: 0.65,
        //             ease: "expo.inOut"
        //         },
        //         "<"
        //     )
        // ));

    });

    useEffect(() => {
        if (isMenuOpen) {
            navbarTL.current.play();
        } else {
            navbarTL.current.reverse();
        }

    }, [isMenuOpen]);

    // Show Navbar onScrollUp and Hide on onScrollDown 
    const [showMenu, setShowMenu] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            setShowMenu(false); // Hide down scroll
        } else {
            setShowMenu(true);  // Show up scroll
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    return (
        <Element name="home">
            <section className="relative flex-center-all w-full h-screen overflow-hidden">

                <CursorGrid
                    cellSize={80}
                    color="#4A95BC"
                    radius={140}
                    falloff="smooth"
                    holdTime={800}
                    fadeDuration={800}
                    lineWidth={1.2}
                    maxOpacity={1}
                    fillOpacity={0}
                    gridOpacity={0.042}
                    cellRadius={0}
                    clickPulse
                    pulseSpeed={600}
                />

                {/* Name Badge */}
                <Magnet
                    padding={30}
                    magnetStrength={5}
                    wrapperClassName="name-badge absolute z-2 bottom-6 left-8 max-md:top-9.5 w-36 max-md:w-34 h-11 max-md:h-10 group"
                    innerClassName="h-full w-full flex-center-all"
                >
                    <div className={clsx("magic-bg opacity-80 saturate-50 duration-500 group-hover:opacity-100 group-hover:saturate-[0.8]", isAreaHovered && "saturate-[1] opacity-100 -inset-2.5")}></div>
                    <div className="content-wrapper relative w-full h-full flex-center-all bg-main-grey/90 backdrop-blur-sm rounded-xl">
                        <span style={{ wordSpacing: "5px", letterSpacing: "0.84px" }} className="absolute text-[13.8px] font-semibold uppercase tracking-[0.28em] max-md:text-[12.8px]">Djaber Touati</span>
                    </div>
                </Magnet>

                {/* Navbar — Wider Screens */}
                <nav className={clsx("navbar fixed z-5 top-6 max-md:right-8 p-2 rounded-full w-full max-w-fit h-16 flex-center-between bg-main-grey/40 backdrop-blur-sm duration-500", showMenu ? "opacity-100 rotate-0 translate-y-0" : "opacity-0 -rotate-4 -translate-y-24")}>

                    {/* Hamburger Menu BTN */}
                    <button 
                        className="menu-btn h-full w-12 bg-main-blue/60 rounded-full flex-center-all duration-300 active:bg-main-blue/70 active:scale-[0.96] cursor-pointer md:hidden"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        <div className="relative w-full h-full rounded-full overflow-hidden flex-center-all">
                            <RiMenuFill
                                color="white"
                                size={24}
                                className={clsx("absolute duration-500", isMenuOpen ? "opacity-0" : "opacity-100")}
                            />
                            
                            <RiCloseLargeFill
                                color="white"
                                size={24}
                                className={clsx("absolute duration-500", isMenuOpen ? "opacity-100" : "opacity-0")}
                            />
                        </div>
                    </button>

                    {/* Links */}
                    <div className="relative h-full">

                        {/* Floating Active Layer */}
                        <div className="floating-layer absolute h-full w-25 bg-main-blue/60 rounded-full max-md:hidden"></div>

                        <div className="flex items-center gap-6 h-full max-md:hidden">
                            {navbarLinks.map((navItem) => (
                                <Link
                                    key={`nav-${navItem.id}`}
                                    className="relative h-full w-25 flex-center-all rounded-full text-[15px] font-medium cursor-pointer duration-500 hover:bg-main-blue/20"
                                    to={navItem.to}
                                    smooth
                                    duration={500}
                                    onClick={() => setActiveNavItem(navItem)}
                                >
                                    {navItem.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                </nav>

                {/* Full Screen Sidebar — Small Screens */}
                <aside className="screen-nav fixed inset-0 w-full h-full z-3 bg-black">
                    
                    <Magnet
                        padding={30}
                        magnetStrength={5}
                        wrapperClassName="name-badge absolute max-md:fixed z-5 bottom-6 left-8 max-md:top-9.5 w-36 max-md:w-34 h-11 max-md:h-10 group"
                        innerClassName="h-full w-full flex-center-all"
                    >
                        <div className={clsx("magic-bg opacity-80 saturate-50 duration-500 group-hover:opacity-100 group-hover:saturate-[0.8]", isAreaHovered && "saturate-[1] opacity-100 -inset-2.5")}></div>
                        <div className="content-wrapper relative w-full h-full flex-center-all bg-main-grey/90 backdrop-blur-sm rounded-xl">
                            <span style={{ wordSpacing: "5px", letterSpacing: "0.84px" }} className="absolute text-[13.8px] font-semibold uppercase tracking-[0.28em] max-md:text-[12.8px]">Djaber Touati</span>
                        </div>
                    </Magnet>

                    <CursorGrid
                        cellSize={80}
                        color="#4A95BC"
                        radius={140}
                        falloff="smooth"
                        holdTime={800}
                        fadeDuration={800}
                        lineWidth={1.2}
                        maxOpacity={1}
                        fillOpacity={0}
                        gridOpacity={0.042}
                        cellRadius={0}
                        clickPulse
                        pulseSpeed={600}
                    />

                    <div className="flex-center-all h-8/10 mt-22">
                        <div className="w-6/10 flex-col-center gap-4">
                            {navbarLinks.map((navItem) => (
                                <Link
                                    key={`nav-${navItem.id}`}
                                    activeClass="active-link"
                                    to={navItem.to}
                                    spy={true}
                                    smooth={true}
                                    duration={500}

                                    className={`navlink ${navItem.to}-link relative text-[42px] text-white font-semibold tracking-wider uppercase cursor-pointer`}
                                    onClick={() => setActiveNavItem(navItem)}
                                >
                                    {navItem.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                </aside>

                {/* Text & Info */}
                <div
                    className="hero-info relative flex-col-center w-full max-w-148"
                    onMouseEnter={() => setIsAreaHovered(true)}
                    onMouseLeave={() => setIsAreaHovered(false)}
                >
                    
                    {/* Top infos */}
                    <div className="flex items-center gap-5">

                        {/* Profesional Profile */}
                        <div
                            className="relative flex h-36 w-36 items-center justify-center shadow-xl"
                            onMouseEnter={() => setIsCardHovered(true)}
                            onMouseLeave={handleCardLeave}
                            onMouseMove={handleCardMove}
                        >

                            <div
                                ref={cardRef}
                                className={clsx(
                                    "profile-card relative h-32 w-32 p-1 rounded-3xl flex items-center gap-6 bg-main-blue/25 backdrop-blur-sm border-b border-b-white/20 overflow-hidden duration-500 cursor-pointer",
                                    isCardHovered && "scale-[1.05]"
                                )}
                                style={{
                                    transform: `perspective(1200px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
                                    transformStyle: "preserve-3d",
                                    transition: isCardHovered ? "transform 180ms ease-out" : "transform 600ms ease-out"
                                }}
                            >

                                <div className="relative h-full w-full rounded-3xl overflow-hidden">
                                    <div className="flash-layer absolute z-2 -top-30 w-6 h-[calc(100%+200px)] bg-white/10 blur-sm"></div>
                                    {profileImages.map((image, index) => (
                                        <img
                                            key={`profile-${index + 1}`}
                                            className="absolute inset-0 h-full w-full object-cover"
                                            src={image}
                                            alt={`profile-${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Heading */}
                    <h1 style={{ wordSpacing: "8px" }} className="hero-heading mt-5 relative text-[48px] max-md:text-[42px] font-semibold">Frontend Developer</h1>

                    {/* Paragraph */}
                    <p className={clsx("font-inter text-center text-[17px] max-md:text-[15px] mt-5 leading-[1.8] mx-auto duration-500 max-md:px-6", isAreaHovered ? "text-[#3d3d3d]" : "text-[#ccc]")}>
                        I develop and build creative, modern also fast <span className="mx-1 max-md:hidden">⇾</span>
                        <span className="relative inline-block align-baseline ml-1 mr-1 max-md:mr-3">
                            <span className={clsx("absolute bottom-[0.15em] max-md:bottom-[0.12em] h-6.5 max-md:h-5.5 z-0 rounded-sm bg-main-blue/45 backdrop-blur-lg border-t border-t-white/20 border-r border-r-white/15 duration-500", isAreaHovered ? "-inset-x-1.5 opacity-100" : "inset-x-full opacity-0")}></span>
                            <span className="relative whitespace-nowrap text-[#ccc]">websites & web.Apps</span>
                        </span>
                        that featured responsivness,
                        <span className="relative inline-block align-baseline ml-2.5">
                            <span className={clsx("absolute bottom-[0.15em] max-md:bottom-[0.12em] h-6.5 max-md:h-5.5 z-0 rounded-sm bg-main-blue/45 backdrop-blur-lg border-t border-t-white/20 border-r border-r-white/15 duration-500 delay-300", isAreaHovered ? "-inset-x-1.5 opacity-100" : "inset-x-full opacity-0")}></span>
                            <span className="relative whitespace-nowrap text-[#ccc]">interactivity & atention to detail</span>
                        </span>
                    </p>

                </div>

            </section>
        </Element>
    );
};

export default Hero;