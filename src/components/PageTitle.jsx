import clsx from "clsx";

const PageTitle = ({ title, description, headingClasses, descClasses }) => {
    return (
        <div className='page-title relative w-full flex-center-all mx-auto pt-6 pb-60 mb-60 overflow-hidden'>

            {/* Shiny Top Border */}
            <div className='shiny-border absolute z-1 top-0 left-1/2 -translate-x-1/2 w-8/10 max-md:w-7/10 h-0.5'></div>

            {/* Glow */}
            <div className="absolute z-1 top-0 left-1/2 -translate-x-1/2 -translate-y-12 max-md:translate-y-0 w-4/10 h-30 rounded-b-full bg-linear-to-b from-soft-blue-primary to-main-blue blur-[150px] opacity-80 max-md:opacity-100"></div>

            {/* Text */}
            <div className="relative z-2 w-full flex-col-center gap-2.5">
                <h2 style={{ wordSpacing: "8px" }} className={clsx("page-heading mt-5 relative text-[50px] max-md:text-[40px] font-semibold tracking-[-0.020em]", headingClasses)}>{title}</h2>
                <p 
                    style={{ wordSpacing: "2px", fontStyle: "italic" }} 
                    className={clsx('font-inter text-[17px] max-md:text-[15.5px] text-[#ccc] max-w-8/10 text-center', descClasses)}
                >{description}</p>
            </div>


        </div>
    );
};

export default PageTitle;