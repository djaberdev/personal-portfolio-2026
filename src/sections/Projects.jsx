import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import { Element } from "react-scroll";

import { PageTitle, ProjectCard } from "../components";

import { projects } from "../constants";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin);

const Projects = () => {

    // Sicky Cards on Scroll Animation
    const sectionRef = useRef(null);

    let cardsRef = useRef([]);

    useGSAP(() => {

        cardsRef.current = Array.from(document.querySelectorAll(".project-card"));

        // Initial Stack
        cardsRef.current.forEach((card, index) => {

            gsap.set(card, {

                y: index * 30,
                scale: 1 - index * 0.05,
                zIndex: projects.length - index,
                transformOrigin: "center center"

            });

        });

        // Timeline
        const tl = gsap.timeline({

            scrollTrigger: {
                trigger: sectionRef.current,
                start: "center 47%",
                end: `+=${projects.length * 860}`,
                pin: true,
                pinSpacing: true,
                scrub: 2,
            },

        });

        projects.forEach((_, index) => {

            if (index === projects.length - 1) return;

            // Current Card Leaves
            tl.to(cardsRef.current[index], {
                yPercent: -150,
                rotation: -6,
                
                // opacity: 0,

                duration: 1,
                ease: "expo.inOut"
            });

            // Remaining Cards Move Forward
            for (let i = index + 1; i < projects.length; i++) {

                tl.to(cardsRef.current[i], {
                    y: (i - (index + 1)) * 45,
                    scale: 1 - (i - (index + 1)) * 0.05,
                    duration: 1,
                    ease: "expo.inOut"
                }, "<");

            }

        });

    }, []);

    return (
        <Element name="projects">
            <section className="relative w-full min-h-screen pt-42 pb-62">
                
                {/* Page Title */}
                <PageTitle
                    title={"Featured Projects"}
                    description={"A selection of my best projects."}
                />

                {/* Projects Cards */}
                {/* <div ref={sectionRef} className="flex-col-center gap-6 -mt-62"> */}
                <div ref={sectionRef} className="relative h-screen flex-center-all -mt-50">

                    {projects.map((project, index) => (

                        <ProjectCard 
                            key={`project-${index + 1}`}
                            projectObj={project}
                        />

                    ))}

                </div>

            </section>
        </Element>
    )
}

export default Projects;