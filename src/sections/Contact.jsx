import clsx from "clsx";

import { Element } from "react-scroll";

import { FloatingDock, PageTitle, ASCIIHand, CoreCTA } from "../components";

import { socialLinks } from "../constants/index";

import {
    leftHand,
    rightHand
} from "../assets";

import { RiHome4Fill } from "@remixicon/react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact = () => {

    // ASCII Hands Slides In - onScroll
    const contactSection = useRef(null);

    useGSAP(() => {

        // Left Hand
        gsap.fromTo(".left-hand", 
            {
                left: "-38%",
            },
            {
                left: 0,
                ease: "back.inOut(1)",

                delay: 0.2,

                scrollTrigger: {
                    trigger: contactSection.current,
                    start: "top center",
                    end: "bottom bottom",
                    scrub: 2.6,
                }
            }
        );

        // Right Hand
        gsap.fromTo(".right-hand",
            {
                right: "-38%",
            },
            {
                right: 0,
                ease: "back.inOut(1)",

                scrollTrigger: {
                    trigger: contactSection.current,
                    start: "top center",
                    end: "bottom bottom",
                    scrub: 2.6,
                }
            }
        );

    }, []);

    return (
        <Element name="contact">
            <footer
                ref={contactSection}
                className="relative min-h-[140vh] max-lg:min-h-[136vh] max-md:min-h-[126vh] overflow-hidden"
            >
                
                <PageTitle 
                    title={"Let's Build Something Great."}
                    headingClasses={"text-[40px]! max-lg:text-[35px]! max-md:text-[30px]!"}
                    description={"Have an idea ? Let's turn it into a fast, interactive and purposeful web experience."}
                    descClasses={"text-[18px]! max-lg:text-[17px]! max-md:text-[16px]"}
                />

                {/* CTA Area */}
                <div className="absolute z-2 left-1/2 -translate-x-1/2 top-38 w-auto flex flex-row-reverse items-center mx-auto gap-3">

                    {/* Actual CTA */}
                    <CoreCTA
                        hoverCount={6}
                        clickCount={14}
                    >
                        Start Project
                    </CoreCTA>

                    {/* Back To Home */}
                    <button 
                        className="relative mt-6 rounded-full w-14 h-14 flex-center-all bg-neutral-800/90 cursor-pointer duration-300 hover:bg-neutral-800 active:scale-98 active:-translate-y-1 p-3.5"
                        style={{
                            boxShadow: "inset 0 0 0 2px rgba(255, 255, 255, 0.03), inset 0 2px rgba(255, 255, 255, 0.05), 0px 0px 2px 4px rgba(0, 0, 0, 0.025), inset 0px -5px 6px 0px rgba(255, 255, 255, 0.056)"
                        }}
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            })
                        }}
                    >
                        <RiHome4Fill className="w-full h-full" />
                    </button>
                </div>


                {/* ASCII Hands Area */}
                <div className="absolute top-[35%] translate-y-[-26%] max-md:translate-y-[-18%] w-full h-6/10 flex-center-between">
                
                    {/* Left Hand */}
                    <ASCIIHand
                        imgSrc={leftHand}
                        imgAlt="left-ASCII-hand"
                        imgClassName={"absolute left-0 top-1/2 -translate-y-1/2 w-full h-full"}
                        className="left-hand relative w-[44%] max-lg:w-[46%] max-md:w-[48%] h-6/10 max-lg:h-[38%] max-md:h-[32%] overflow-visible max-lg:-translate-x-6.5"
                        parallaxStrength={20}
                        rotateStrength={7}
                    />

                    {/* Right Hand */}
                    <ASCIIHand
                        imgSrc={rightHand}
                        imgAlt="right-ASCII-hand"
                        imgClassName={"absolute right-0 top-1/2 -translate-y-1/2 w-full h-full"}
                        className="right-hand relative w-[44%] max-lg:w-[46%] max-md:w-[48%] h-6/10 max-lg:h-[38%] max-md:h-[32%] overflow-visible"
                        parallaxStrength={20}
                        rotateStrength={7}
                    />

                </div>

                {/* Bottom Area */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-2/10 flex-col-center justify-center gap-6">

                    {/* Social Links */}
                    <FloatingDock
                        items={socialLinks}
                    />

                    {/* Professional & Additional Infos */}
                    <p 
                        style={{ wordSpacing: "2px", fontStyle: "italic" }} 
                        className={clsx('font-inter text-[17px] max-md:text-[15.5px] text-[rgba(160,160,160,1)] max-w-8/10 text-center')}
                    >
                        Frontend Developer <span className="mx-1 text-main-blue-shiny">•</span> Interactive Web Experiences <span className="mx-1 text-main-blue-shiny">•</span> Algeria © {new Date().getFullYear()}
                    </p>

                </div>

            </footer>
        </Element>
    );
};

export default Contact;