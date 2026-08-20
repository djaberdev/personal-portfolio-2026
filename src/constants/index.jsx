import { 

    RiHome4Fill,
    RiHammerFill,
    RiShakeHandsLine,
    RiUser3Fill,
    RiPhoneFill,

    RiMailUnreadLine,
    RiGithubFill,
    RiTwitterLine,
    RiLinkedinBoxFill,
    RiInstagramFill,
    RiFacebookCircleFill,

} from "@remixicon/react";


import {
    react,
    tailwind,
    three,
    GSAP,
    framermotion,
    html,
    css,
    javascript
} from "../assets/index";

import {

    // Xora
    xoraLogo,
    xoraLaptop,
    xoraMobile,

    // Layers
    layersLogo,
    layersLaptop,
    layersMobile,

    // 3D Iphone
    iPhoneLogo,

    // 3D Shirt Customizer
    shirtLogo,

    // Adhkar & Dua
    adhkarLogo,

    // Notes
    notesLogo,
    

} from "../assets/index";

export const navbarLinks = [
    {
        id: 0,
        label: "Home",
        to: "home",
        icon: <RiHome4Fill />
    },

    {
        id: 1,
        label: "Projects",
        to: "projects",
        icon: <RiHammerFill />
    },

    // {
    //     id: 2,
    //     label: "Services",
    //     to: "services",
    //     icon: <RiShakeHandsLine />
    // },

    {
        id: 2,
        label: "About",
        to: "about",
        icon: <RiUser3Fill />
    },

    {
        id: 3,
        label: "Contact",
        to: "contact",
        icon: <RiPhoneFill />
    },
];

export const projects = [

    // * Landing Pages
    {
        id: 1,

        category: "Landing Page",

        name: "XORA — SaaS UI",
        logo: xoraLogo,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti commodi ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        features: [
            "Fully Responsive",
            "Super Fast ⇾ loads in < 01s",
            "Smooth and well-matched Gradients",
            "Magic shapes and icons",
            "Beautiful CTA's and Great Hovering Effects",
        ],

        mainColor: "#3e52d9",
        darkBGColor: "#07091b",
        darkPathColor: "#0c102b",
        lightPathColor: "#7785e4",

        technologies: [react, tailwind],

        showcase: [
            {
                type: "laptop",
                img: xoraLaptop
            },
            {
                type: "mobile",
                img: xoraMobile
            },
            {
                type: "video/mp4",
                src: ""
            },
        ],

        links: [
            {
                about: "website",
                label: "Live Website",
                href: "https://layers-sass.vercel.app/"
            },
            {
                about: "github",
                label: "Github Repo",
                href: "https://github.com/djaberdev/layers-sass"
            },
        ],

    },
    
    {
        id: 2,

        category: "Landing Page",

        name: "Layers — SaaS UI",
        logo: layersLogo,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti commodi ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        features: [
            "Fully Responsive",
            "Highly Interactive ⇾ Drag & Drop...",
            "Clean and Advanced Scroll Animations",
            "Magic Micro Animations",
            "Smooth and Functional Infinite Tickers",
        ],

        mainColor: "#a3e636",
        darkBGColor: "#101705",
        darkPathColor: "#202e0a",
        lightPathColor: "#b5eb5e",

        technologies: [react, tailwind, GSAP, framermotion],

        showcase: [
            {
                type: "laptop",
                img: layersLaptop
            },
            {
                type: "mobile",
                img: layersMobile
            },
            {
                type: "video/mp4",
                src: ""
            },
        ],

        links: [
            {
                about: "website",
                label: "Live Website",
                href: "https://layers-sass.vercel.app/"
            },
            {
                about: "github",
                label: "Github Repo",
                href: "https://github.com/djaberdev/layers-sass"
            },
        ],

    },

    // * 3D & Interactive
    {
        id: 3,

        category: "3D & Interactive",

        name: "3D iPhone 15 Pro",
        logo: iPhoneLogo,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti commodi ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        features: [
            
        ],

        mainColor: "#444",
        darkBGColor: "#222",
        darkPathColor: "#333",
        lightPathColor: "#777",

        technologies: [html, css, javascript, GSAP, three],

        showcase: [
            {
                type: "laptop",
                img: ""
            },
            {
                type: "mobile",
                img: ""
            },
            {
                type: "video/mp4",
                src: ""
            },
        ],

        links: [
            {
                about: "website",
                label: "Live Website",
                href: "https://3d-iphone-15-pro.netlify.app/"
            },
            {
                about: "github",
                label: "Github Repo",
                href: "https://github.com/djaberdev/3d-iphone"
            },
        ],

    },

    {
        id: 4,

        category: "3D & Interactive",

        name: "3D Shirt Customizer",
        logo: shirtLogo,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti commodi ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        features: [
            
        ],

        mainColor: "#d5d5d5",
        darkBGColor: "#323232",
        darkPathColor: "#3f3f3f",
        lightPathColor: "#ddd",

        technologies: [react, tailwind, framermotion, three],

        showcase: [
            {
                type: "laptop",
                img: ""
            },
            {
                type: "mobile",
                img: ""
            },
            {
                type: "video/mp4",
                src: ""
            },
        ],

        links: [
            {
                about: "website",
                label: "Live Website",
                href: "https://3d-shirt-customizer-woad.vercel.app"
            },
            {
                about: "github",
                label: "Github Repo",
                href: "https://github.com/djaberdev/3d-shirt-customizer"
            },
        ],

    },

    // * Web Apps
    {
        id: 5,

        category: "Web Application",

        name: "Adhkar & Dua — App",
        logo: adhkarLogo,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti commodi ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        features: [
            
        ],

        mainColor: "#225b48",
        darkBGColor: "#0d241c",
        darkPathColor: "#123026",
        lightPathColor: "#88c0ae",

        technologies: [react, tailwind, GSAP],

        showcase: [
            {
                type: "laptop",
                img: ""
            },
            {
                type: "mobile",
                img: ""
            },
            {
                type: "video/mp4",
                src: ""
            },
        ],

        links: [
            {
                about: "website",
                label: "Live Website",
                href: "https://adhkar-and-dua.vercel.app"
            },
            {
                about: "github",
                label: "Github Repo",
                href: "https://github.com/djaberdev/adhkar-and-dua"
            },
        ],

    },
    
    {
        id: 5,

        category: "Web Application",

        name: "Notes Taking — App",
        logo: notesLogo,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti commodi ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        features: [
            
        ],

        mainColor: "#4e54ae",
        darkBGColor: "#121429",
        darkPathColor: "#171934",
        lightPathColor: "#8387c6",

        technologies: [react, css],

        showcase: [
            {
                type: "laptop",
                img: ""
            },
            {
                type: "mobile",
                img: ""
            },
            {
                type: "video/mp4",
                src: ""
            },
        ],

        links: [
            {
                about: "website",
                label: "Live Website",
                href: "https://notes-app-delta-ashen-15.vercel.app"
            },
            {
                about: "github",
                label: "Github Repo",
                href: "https://github.com/djaberdev/notes-app"
            },
        ],

    },

];


export const technologies = [
    
    // Big
    [
        { img: react, label: "React" },
        { img: tailwind, label: "Tailwind" },
        { img: GSAP, label: "GSAP" },
        { img: three, label: "Three.js" },
        { img: framermotion, label: "FramerMotion" },
    ],

    // Small
    [
        { img: html, label: "HTML" },
        { img: css, label: "CSS" },
        { img: javascript, label: "JS" },
    ]

];

export const socialLinks = [
    {
        title: "GitHub",
        icon: (
            <RiGithubFill className="h-full w-full text-neutral-300" />
        ),
        href: "https://github.com/djaberdev",
    },

    {
        title: "Linkedin",
        icon: (
            <RiLinkedinBoxFill className="h-full w-full text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Instagram",
        icon: (
            <RiInstagramFill className="h-full w-full text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Facebook",
        icon: (
            <RiFacebookCircleFill className="h-full w-full text-neutral-300" />
        ),
        href: "#",
    },
 
];