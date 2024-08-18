import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import './Header.css'
import { gsap } from "gsap";

const scrollToTop = () => {
    window.scrollTo(0, 0);
};

export default function Header(){
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return(
        <header className="nav-header">
            <NavLink to="/ncsjss2024.github.io/" onClick={scrollToTop}><img className="nav-logo" src='./ncs-logo.svg' alt='NCS logo'/></NavLink>
            {
                width > 590 ?
                <DeskTopNav/> :
                <PhoneNav/>
            }
        </header>
    )
}

function DeskTopNav(){
    return(
        <>
            <nav className="header-nav">
                <ul className="header-nav-links-container">
                    <li>
                        <NavLink 
                            className="header-nav-link" 
                            to="/ncsjss2024.github.io/" 
                            activeClassName="active"
                            onClick={scrollToTop}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="header-nav-link"
                            to="/ncsjss2024.github.io/projects"
                            onClick={scrollToTop}
                            activeClassName="active"
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="header-nav-link"
                            to="/ncsjss2024.github.io/team"
                            onClick={scrollToTop}
                            activeClassName="active"
                        >
                            Team
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="header-nav-link"
                            to="/ncsjss2024.github.io/alumni"
                            onClick={scrollToTop}
                            activeClassName="active"
                        >
                            Alumni
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <a href="#connect">
                <button className="connect-button" type="button">
                    Connect
                </button>
            </a>
        </>
    )
}

function PhoneNav(){
    const drawerHeaderButtonRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false)

    function openDrawer(){
        setMenuOpen(true);
    }

    return(
        <>
            {menuOpen ?
                <SideNav 
                    menuOpen = {menuOpen}
                    setMenuOpen = {setMenuOpen}
                /> :
                <Hamburger openDrawer={openDrawer} drawerHeaderButtonRef={drawerHeaderButtonRef}/>
            }
        </>
    )
}

function SideNav({menuOpen, setMenuOpen}){

    const sideNavRef = useRef(null);
    const drawerButtonRef = useRef(null);
    const tl = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {});
        if (menuOpen) {
            ctx.add(() => {
                // console.log("creating timeline");
                // tl.current && tl.current.progress(0).kill();
                tl.current = gsap.timeline()
                    .fromTo(".mobile-header-nav", 
                    {
                        x: 100,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.2,
                    })
                    .to(".mobile-header-nav-link",
                    {
                        opacity: 1,
                        duration: 0.2,
                        stagger: 0.1,
                        ease: "power2.in"
                    })
                    .to(".mobile-connect-button",
                    {
                        opacity: 1,
                        duration: 0.1,
                    });
                }
            );
        }
        return () => ctx.revert();
    }, [menuOpen]);

    const toggleComponent = () => {
        if (!menuOpen) return setMenuOpen(true);
        // tl.current && tl.current.progress(0).kill();
        tl.current = gsap.timeline()
        .to(".mobile-header-nav-link",
        {
            opacity: 0,
            duration: 0.2,
            stagger: 0.1,
            ease: "power2.in"
        })
        .to(".mobile-connect-button",
        {
            opacity: 0,
            duration: 0.1,
        })
        .to(".mobile-header-nav", 
        {
            x: 100,
            opacity: 0,
            duration: 0.2,
            onComplete() {
                setMenuOpen(false);
            }
        })
    };

    function closeDrawer(){
        toggleComponent();
    }

    return(
        <>
            <nav className="mobile-header-nav" ref={sideNavRef}>
                <button className="nav-button mobile-nav-button" onClick={closeDrawer} ref={drawerButtonRef}>
                    &#9932;
                </button>
                <ul className="mobile-header-nav-links-container">
                    <li>
                        <NavLink 
                            className="mobile-header-nav-link" 
                            to="/ncsjss2024.github.io/" 
                            onClick={scrollToTop}
                            activeClassName="active"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="mobile-header-nav-link"
                            to="/ncsjss2024.github.io/projects"
                            onClick={scrollToTop}
                            activeClassName="active"
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="mobile-header-nav-link"
                            to="/ncsjss2024.github.io/team"
                            onClick={scrollToTop}
                            activeClassName="active"
                        >
                            Team
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="mobile-header-nav-link"
                            to="/ncsjss2024.github.io/alumni"
                            onClick={scrollToTop}
                            activeClassName="active"
                        >
                            Alumni
                        </NavLink>
                    </li>
                </ul>
                <a href="#connect">
                    <button 
                        className="connect-button mobile-connect-button" 
                        type="button"
                        onClick={closeDrawer}
                    >
                        Connect
                    </button>
                </a>
            </nav>
        </>
    )
}

function Hamburger({openDrawer, drawerHeaderButtonRef}){
    useEffect(() => {
        gsap.to(
            drawerHeaderButtonRef.current,
            {
                opacity : 1,
                duration: 0.2,
            }
        )
    }, [])
    return(
        <button className="nav-button hamburger-closed" onClick={openDrawer} ref={drawerHeaderButtonRef}>
            &#9776;
        </button>
    )
}
