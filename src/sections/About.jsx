import clsx from "clsx";

import { Element } from "react-scroll";

import { PageTitle } from "../components";

import {
    BuildCard,
    TechCard,
    FastCard,
    UXCard,
    ResponsiveCard,
    CodeCard,
    AICard,
    AnimationCard,
    ThreeDCard,
    CTACard
} from "../components";

const About = () => {
    return (
        <Element name="about">
            <section>

                {/* Page Title */}
                <PageTitle
                    title={"About Djaber.T"}
                    description={"Informations About ⇾ what i build, what i know and what are the benifits in my work ?"}
                />

                {/* Bento Grid */}
                <section className="relative w-[90vw] max-w-300 -mt-72 pb-64 max-md:pb-48 mx-auto flex-col-center gap-3 max-lg:gap-6.5">
                    
                    {/* Top Bento */}
                    <div className="relative w-full h-screen max-xl:h-[150vh] max-lg:h-auto grid gap-2.5 grid-cols-4 max-lg:grid-cols-1 grid-rows-2 max-xl:grid-rows-3 max-lg:grid-rows-auto max-lg:flex max-lg:flex-col max-lg:gap-6.5">

                        {/* 01 - What I Build ? — ✅ */}
                        <div className="col-span-2 max-xl:col-span-3 row-span-1 max-lg:h-84 max-lg:w-full">
                            <BuildCard />
                        </div>

                        {/* 02 - My Tech Stack — ✅ */}
                        <div className="col-span-1 row-span-1 max-xl:order-1 max-lg:h-84 max-lg:w-full max-lg:order-[unset]">
                            <TechCard />
                        </div>

                        {/* 03 - Fast and Performance — ✅ */}
                        <div className="col-span-1 row-span-2 max-xl:row-span-3 max-lg:h-84 max-lg:w-full">
                            <FastCard />
                        </div>

                        {/* 05 - Attention to details -> UX — ✅ */}
                        <div className="col-span-1 max-xl:col-span-2 row-span-1 max-xl:order-1 max-lg:h-84 max-lg:w-full max-lg:order-[unset]">
                            <UXCard />
                        </div>

                        {/* 04 - Responsiveness — ✅ */}
                        <div className="col-span-2 max-xl:col-span-3 row-span-1 max-lg:h-84 max-lg:w-full">
                            <ResponsiveCard />
                        </div>

                    </div>


                    {/* Bottom Bento */}
                    <div className="relative w-full h-screen max-xl:h-[150vh] max-lg:h-auto grid gap-2.5 grid-cols-4 max-lg:grid-cols-1 grid-rows-2 max-xl:grid-rows-3 max-lg:grid-rows-auto max-lg:flex max-lg:flex-col max-lg:gap-6.5">

                        {/* 01 - Clean Code  — ✅ */}
                        <div className="col-span-1 row-span-2 max-xl:row-span-3 max-lg:h-84 max-lg:w-full">
                            <CodeCard />
                        </div>

                        {/* 02 - Work with AI — ✅ */}
                        <div className="col-span-1 max-xl:col-span-2 row-span-1 max-xl:order-1 max-lg:order-[unset] max-lg:h-84 max-lg:w-full">
                            <AICard />
                        </div>

                        {/* 03 - Smooth Animations — ✅ */}
                        <div className="col-span-2 max-xl:col-span-3 row-span-1 max-lg:h-84 max-lg:w-full">
                            <AnimationCard />
                        </div>

                        {/* 04 - 3D Experiences — ✅ */}
                        <div className="col-span-2 max-xl:col-span-3 row-span-1 max-lg:h-84 max-lg:w-full">
                            <ThreeDCard />
                        </div>

                        {/* 05 - CTA  — ✅ */}
                        <div className="col-span-1 row-span-1 max-xl:order-1 max-lg:order-[unset] max-lg:h-84 max-lg:w-full">
                            <CTACard />
                        </div>

                    </div>

                </section>

            </section>
        </Element>
    )
}

export default About;