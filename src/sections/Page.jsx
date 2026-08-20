import { useRef, useEffect } from 'react'

// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const Page = ({ children }) => {

    const pageRef = useRef(null);
    
    // ! Stopped For Now
    // useEffect(() => {
        
    //     let pageHeight = pageRef.current.offsetHeight;
    //     let triggerHeight = pageHeight - Number(document.querySelector(".about-section").offsetHeight);

    //     const controlPageBG = () => {
    //         console.log(window.scrollY);

    //         if (window.scrollY === triggerHeight) {
    //             console.log("Start Changing the BG !");
    //         }
    //     };
        
    //     window.addEventListener('scroll', controlPageBG);
        
    //     return () => window.removeEventListener('scroll', controlPageBG);

    // });

    // Change Page Color Close To The "About" Section
    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         // ensure initial background
    //         gsap.set(pageRef.current, { backgroundColor: "#111111" });

    //         gsap.to(pageRef.current, {
    //             backgroundColor: "#555555",
    //             duration: 0.2,
    //             ease: "expo.inOut",
    //             scrollTrigger: {
    //                 trigger: ".about-section",
    //                 // trigger when about section gets close to viewport
    //                 start: "top 75%",
    //                 // play when entering, reverse when scrolling back above
    //                 toggleActions: "play reverse play reverse",
    //                 // do not scrub (use tween for smoothness)
    //             }
    //         });
    //     }, pageRef);

    //     return () => ctx.revert();
    // }, []);

    return (
        <main ref={pageRef} className='relative bg-main-black duration-500'>
            {children}
        </main>
    );
};

export default Page;