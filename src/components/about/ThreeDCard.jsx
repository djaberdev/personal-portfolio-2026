import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import { StaticGrid } from "../index";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(useGSAP, MorphSVGPlugin);

const ThreeDCard = () => {

    const [isCardHovered, setIsCardHovered] = useState(false);

    // Grab All 3D Paths 
    let cubePathRef = useRef(null);
    let diamondPathRef = useRef(null);
    let trianglePathRef = useRef(null);
    let cylinderPathRef = useRef(null);
    let weightPathRef = useRef(null);
    let watchPathRef = useRef(null);
    let spherePathRef = useRef(null);
    let complexPathRef = useRef(null);

    let morphTL = useRef(null);

    useGSAP(() => {
    
        // Morph 3D Shapes Animation
        morphTL.current = gsap.timeline({ paused: true });

        // From 3D Cube
        // To Diamond
        morphTL.current.to(cubePathRef.current, {
            duration: 1,
            ease: "expo.inOut",

            morphSVG: diamondPathRef.current,
        }, "+=0.5");

        // To Triangle
        morphTL.current.to(cubePathRef.current, {
            duration: 1,
            ease: "expo.inOut",

            morphSVG: trianglePathRef.current,
        }, "+=0.3");

        // To Cylinder
        morphTL.current.to(cubePathRef.current, {
            duration: 1,
            ease: "expo.inOut",

            morphSVG: cylinderPathRef.current,
        }, "+=0.3");

        // To Weight Shape
        morphTL.current.to(cubePathRef.current, {
            duration: 1,
            ease: "expo.inOut",

            morphSVG: weightPathRef.current,
        }, "+=0.3");

        // To Old Watch Shape
        morphTL.current.to(cubePathRef.current, {
            duration: 1,
            ease: "expo.inOut",

            morphSVG: watchPathRef.current,
        }, "+=0.3");

        // To Sphere
        morphTL.current.to(cubePathRef.current, {
            duration: 1,
            ease: "expo.inOut",

            morphSVG: spherePathRef.current,
        }, "+=0.3");

        // To Complex Shape
        morphTL.current.to(cubePathRef.current, {
            duration: 1,
            ease: "expo.inOut",

            morphSVG: complexPathRef.current,
        }, "+=0.3");

        // To Origin
        morphTL.current.to(cubePathRef.current, {
            duration: 1,
            ease: "expo.inOut",

            morphSVG: cubePathRef.current,
        }, "+=0.3");

    }, []);

    // Handle Animation Play Based on "isCardHovered"
    useEffect(() => {
        
        isCardHovered 
        ? morphTL.current.play()
        : morphTL.current.reverse()

    }, [isCardHovered]);

    return (
        <div 
            className='about-card'
            onMouseEnter={() => setIsCardHovered(true)}    
            onMouseLeave={() => setIsCardHovered(false)}    
        >
            
            <div className="absolute z-1 top-1/2 left-1/2 -translate-1/2 w-[calc(100%-3px)] h-[calc(100%-3px)] pointer-events-none overflow-hidden rounded-xl">
            
                {/* Text */}
                <div className="absolute z-2 bottom-8 left-1/2 -translate-x-1/2 w-full h-auto flex-center-all">
                    <div className="relative w-full h-auto flex-col-center gap-1 max-md:gap-1.5">
                        <h3 
                            style={{ wordSpacing: "5px" }} 
                            className={clsx("gradient-heading text-[22.5px] max-md:text-[20px] font-semibold")}
                        >
                            Beyond 2D, It's Time To 3D
                        </h3>

                        <h4
                            style={{ wordSpacing: "2px", fontStyle: "italic" }} 
                            className="font-inter text-[17px] max-md:text-[16px] font-medium text-[rgb(150,150,150)] opacity-85 text-center"
                        >Engage your Website with Real & Interactive 3D Experiences</h4>
                    </div>
                </div>

                {/* Animated Icon Layer */}
                <div className="absolute z-1 top-1/2 left-1/2 -translate-1/2 w-full h-full flex-center-all">

                    {/* 3D Shapes */}
                    <div className="absolute z-2 top-[40%] max-md:top-[36%] left-1/2 -translate-1/2 w-full h-full flex-center-all">
                    
                        {/* Cube */}
                        <svg
                            fill="rgba(255,255,255,0.2)"
                            width="120px"
                            height="120px"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            className={clsx("absolute duration-400", isCardHovered ? "opacity-100 scale-130" : "opacity-85 scale-110")}
                        >
                            <path ref={cubePathRef} d="M94.98,19.8a1.00729,1.00729,0,0,0-.78-.78L50.3,5.05a.88322.88322,0,0,0-.6,0L5.8,19.02a1.00729,1.00729,0,0,0-.78.78A1.22986,1.22986,0,0,0,5,20V80a1.22986,1.22986,0,0,0,.02.2.99414.99414,0,0,0,.68.75l.1.03L49.61,94.92l.09.03a.88393.88393,0,0,0,.6,0l.09-.03L94.3,80.95A.99621.99621,0,0,0,95,80V20A1.22986,1.22986,0,0,0,94.98,19.8ZM50,7.05,90.7,20,50,32.95,9.3,20ZM7,21.36,49,34.73v57.9L7,79.27ZM93,79.27,51,92.63V34.73L93,21.36Z" />
                        </svg>

                        {/* Diamond */}
                        <svg
                            fill="rgba(255,255,255,0.2)"
                            width="120px"
                            height="120px"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute opacity-0"
                        >
                            <path ref={diamondPathRef} d="M94.71,49.29l-44-44a1.01424,1.01424,0,0,0-1.42,0l-44,44a.035.035,0,0,1-.00995.02.9901.9901,0,0,0,0,1.38.035.035,0,0,1,.00995.02l44,44a1.01409,1.01409,0,0,0,1.42,0l44-44a1.01416,1.01416,0,0,0,0-1.42ZM49,91.59,9.6,52.19,49,64.73Zm0-28.95L7.86,49.55,49,8.41Zm2,28.95V64.73L90.38,52.2Zm0-28.95V8.41L92.13,49.55Z" />
                        </svg>

                        {/* Triangle */}
                        <svg
                            fill="rgba(255,255,255,0.2)"
                            width="120px"
                            height="120px"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute opacity-0"
                        >
                            <path ref={trianglePathRef} d="M94.86,79.49l-44-74a.99969.99969,0,0,0-1.72,0l-44,74a1.01977,1.01977,0,0,0-.07.87.97488.97488,0,0,0,.63.59L49.61,94.92a.99045.99045,0,0,0,.78,0L94.3,80.95a.97488.97488,0,0,0,.63-.59A1.01977,1.01977,0,0,0,94.86,79.49ZM49,92.63,7.5,79.43,49,9.64Zm2,0V9.64L92.5,79.43Z" />
                        </svg>

                        {/* Cylinder */}
                        <svg
                            fill="rgba(255,255,255,0.2)"
                            width="120px"
                            height="120px"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute opacity-0"
                        >
                            <path ref={cylinderPathRef} d="M88.1,16.69a13.82827,13.82827,0,0,0-5.08-4.8,45.66057,45.66057,0,0,0-13.9-5.01A93.15882,93.15882,0,0,0,50,5C39.41,5,29.81,6.58,22.78,9.16a27.51224,27.51224,0,0,0-8.45,4.64,10.81378,10.81378,0,0,0-2.43,2.89A6.77349,6.77349,0,0,0,11,20V80a6.77383,6.77383,0,0,0,.9,3.31,13.82875,13.82875,0,0,0,5.08,4.8,45.66375,45.66375,0,0,0,13.9,5.01A93.15882,93.15882,0,0,0,50,95c10.59,0,20.19-1.58,27.22-4.16a27.51221,27.51221,0,0,0,8.45-4.64,10.81471,10.81471,0,0,0,2.43-2.89A6.77383,6.77383,0,0,0,89,80V20A6.77349,6.77349,0,0,0,88.1,16.69Zm-74.45.97a11.82427,11.82427,0,0,1,4.37-4.06A43.678,43.678,0,0,1,31.29,8.83,91.85312,91.85312,0,0,1,50,7c10.39,0,19.8,1.56,26.52,4.04a25.7621,25.7621,0,0,1,7.84,4.26,9.05234,9.05234,0,0,1,1.99,2.36,4.53688,4.53688,0,0,1,0,4.68,11.82379,11.82379,0,0,1-4.37,4.06,43.67639,43.67639,0,0,1-13.27,4.77A91.8529,91.8529,0,0,1,50,33c-10.39,0-19.8-1.56-26.52-4.04A25.76211,25.76211,0,0,1,15.64,24.7a9.05251,9.05251,0,0,1-1.99-2.36,4.53688,4.53688,0,0,1,0-4.68ZM87,80a4.73886,4.73886,0,0,1-.65,2.34,11.82379,11.82379,0,0,1-4.37,4.06,43.67639,43.67639,0,0,1-13.27,4.77A91.8529,91.8529,0,0,1,50,93c-10.39,0-19.8-1.56-26.52-4.04A25.76211,25.76211,0,0,1,15.64,84.7a9.05251,9.05251,0,0,1-1.99-2.36A4.73886,4.73886,0,0,1,13,80V24.86a16.18592,16.18592,0,0,0,3.98,3.25,45.66375,45.66375,0,0,0,13.9,5.01A93.15882,93.15882,0,0,0,50,35c10.59,0,20.19-1.58,27.22-4.16a27.51221,27.51221,0,0,0,8.45-4.64A12.776,12.776,0,0,0,87,24.88Z" />
                        </svg>

                        {/* Weight Shape */}
                        <svg
                            fill="rgba(255,255,255,0.2)"
                            width="120px"
                            height="120px"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute opacity-0"
                        >
                            <path ref={weightPathRef} d="M94.971,79.761l-16-65c-.00269-.01123-.011-.01905-.01416-.03009a.99459.99459,0,0,0-.15308-.32447c-.00806-.01092-.01953-.01758-.02808-.02813a.80945.80945,0,0,0-.33593-.26246.96908.96908,0,0,0-.13379-.06787l-27.99994-9a.99952.99952,0,0,0-.612,0l-28,9a1703.32858,1703.32858,0,0,1-.23932.12152.98833.98833,0,0,0-.23083.20917c-.0083.01038-.01978.017-.02765.02765a.991.991,0,0,0-.15308.32459c-.00311.011-.01141.01886-.01416.03009l-16,65a.94709.94709,0,0,0-.007.166.99661.99661,0,0,0-.0083.19745.95978.95978,0,0,0,.054.184.59987.59987,0,0,0,.18353.32691.96711.96711,0,0,0,.12744.14062.997.997,0,0,0,.17413.0968.94408.94408,0,0,0,.14417.08014L49.69678,94.95288a.99008.99008,0,0,0,.60638,0l43.99994-14A1.00209,1.00209,0,0,0,94.971,79.761ZM49.99988,7.05042,74.73193,15l-24.732,7.94965L25.26788,15ZM22.71472,16.28015,49,24.72894V92.63239L7.19458,79.33069ZM51,92.63239V24.72894l26.28516-8.44885L92.8053,79.33069Z" />
                        </svg>

                        {/* Old Watch Shape */}
                        <svg
                            fill="rgba(255,255,255,0.2)"
                            width="120px"
                            height="120px"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute opacity-0"
                        >
                            <path ref={watchPathRef} d="M75.2,50S94.82,20.57,94.83,20.55A.96681.96681,0,0,0,95,20a.9902.9902,0,0,0-.7-.95c-.03-.01-44-14-44-14a.88322.88322,0,0,0-.6,0s-43.97,13.99-44,14A.9902.9902,0,0,0,5,20a.96681.96681,0,0,0,.17.55C5.18,20.57,24.8,50,24.8,50S5.18,79.43,5.17,79.45A.96681.96681,0,0,0,5,80a.9902.9902,0,0,0,.7.95c.03.00995,44,14,44,14a.88393.88393,0,0,0,.6,0s43.97-13.99005,44-14A.9902.9902,0,0,0,95,80a.96681.96681,0,0,0-.17-.55C94.82,79.43,75.2,50,75.2,50Zm-1.84-.85L51,56.27V34.73L91.59,21.82ZM49,92.63,7.57,79.45,26.41,51.18,49,58.37Zm0-36.36L26.64,49.15,8.41,21.82,49,34.73ZM50,32.95,9.3,20,50,7.05,90.7,20Zm1,59.68V58.37l22.59-7.19L92.43,79.45Z" />
                        </svg>

                        {/* Sphere */}
                        <svg
                            fill="rgba(255,255,255,0.2)"
                            width="120px"
                            height="120px"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute opacity-0"
                        >
                            <path ref={spherePathRef} d="M50,5A45,45,0,1,0,95,50,45.00058,45.00058,0,0,0,50,5ZM19.59448,19.59448A42.99068,42.99068,0,0,1,92.82184,46.1806c-.08295-.06793-.15088-.14068-.23779-.20739a1,1,0,0,0-1.2165,1.58752,5.52943,5.52943,0,0,1,1.18756,1.18677.97211.97211,0,0,0,.42145.3266c.00653.309.02344.61535.02344.9259a2.04347,2.04347,0,0,1-.63708,1.34625,13.4011,13.4011,0,0,1-5.08332,2.90253,73.77635,73.77635,0,0,1-15.508,3.43475A170.6829,170.6829,0,0,1,50,59c-12.087.001-23.03278-1.11688-30.891-2.904A38.14808,38.14808,0,0,1,9.93109,53.0116a8.54533,8.54533,0,0,1-2.294-1.66535A2.04318,2.04318,0,0,1,7,50c0-.31055.01691-.61694.02344-.9259a.97211.97211,0,0,0,.42145-.3266,5.528,5.528,0,0,1,1.18756-1.18677A1,1,0,0,0,7.416,45.97321H7.41589c-.08691.06665-.15478.13946-.23773.20733A42.85482,42.85482,0,0,1,19.59448,19.59448Zm60.811,60.811A42.98816,42.98816,0,0,1,7.16205,53.60712,18.72517,18.72517,0,0,0,12.01978,56.122a75.60894,75.60894,0,0,0,15.94946,3.54468A172.6715,172.6715,0,0,0,50,61c12.21332-.0011,23.26752-1.1217,31.33423-2.9538a39.96337,39.96337,0,0,0,9.68133-3.27282,13.01557,13.01557,0,0,0,1.823-1.17365A42.85352,42.85352,0,0,1,80.40552,80.40552Z" />
                        </svg>

                        {/* Complex Shape */}
                        <svg
                            fill="rgba(255,255,255,0.2)"
                            width="120px"
                            height="120px"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute opacity-0"
                        >
                            <path ref={complexPathRef} d="M88.534,29.15448l-38-24-.01807-.00812a.99432.99432,0,0,0-.18744-.08392c-.02069-.00726-.03973-.019-.06073-.0249a.97369.97369,0,0,0-.53552,0c-.021.00586-.04.01764-.06073.0249a.99432.99432,0,0,0-.18744.08392l-.01807.00812-38,24A.99708.99708,0,0,0,11,30V70a.99445.99445,0,0,0,.02307.18219c.00421.02258.00281.04565.00861.06793a.99112.99112,0,0,0,.09729.23981l.00195.00476c.01025.018.02564.03131.03687.04852a.98281.98281,0,0,0,.11456.15082.97281.97281,0,0,0,.09308.07678.99577.99577,0,0,0,.09057.07465l38,24a1.00013,1.00013,0,0,0,1.068,0l38-24a.9247.9247,0,0,0,.29821-.30225c.01123-.01721.02662-.03051.03687-.04852l.002-.00476a.99112.99112,0,0,0,.09729-.23981c.00611-.0235.0047-.04785.009-.07159A.99428.99428,0,0,0,89,70V30A.99708.99708,0,0,0,88.534,29.15448ZM13,31h2a.99524.99524,0,0,0,.34558-1.9303l31.67-20.00207L13,66.35706ZM50,92.81726,15.45605,71H35.72687a1.0216,1.0216,0,0,0,.12719.37341L36.88989,73.166a.96578.96578,0,0,0,1.34351.35186,1.023,1.023,0,0,0,.34247-1.38049L37.91864,71H62.08142l-.65729,1.13751a1.02305,1.02305,0,0,0,.34247,1.3805.96579.96579,0,0,0,1.34351-.35187l1.03583-1.7926A1.02221,1.02221,0,0,0,64.27319,71H84.544ZM13.75671,69,24.26038,51.30963l.19958.3454a.9658.9658,0,0,0,1.34351.35193,1.02312,1.02312,0,0,0,.34247-1.38056L25.416,49.36328,36.43591,30.80353A.97449.97449,0,0,0,37,31h2a1,1,0,0,0,0-2H37.50671L50,7.95868,62.49329,29H61a1,1,0,0,0,0,2h2a.9747.9747,0,0,0,.56409-.19653L74.584,49.36328l-.72992,1.26331a1.023,1.023,0,0,0,.34241,1.38049A.96587.96587,0,0,0,75.54,51.65515l.19965-.34546L86.24329,69ZM87,66.35706,52.98444,9.06763l31.67,20.00207A.99524.99524,0,0,0,85,31h2Z" />
                        </svg>
                        
                    </div>

                    {/* Grid Layer */}
                    <div 
                        className="absolute z-1 w-9/10 h-9/10 top-1/2 -translate-y-6/10 left-1/2 -translate-x-1/2 mask-t-from-50% mask-t-from-[rgb(30,30,30)] mask-circle mask-radial-farthest-corner mask-radial-at-center mask-radial-from-[rgb(30,30,30)]"
                    >
                        <StaticGrid
                            strokeWidth={1}
                            strokeColor="rgba(255,255,255,0.1)"
                            opacity={0.42}
                        />
                    </div>

                </div>
            
            </div>

        </div>
    );
};

export default ThreeDCard;