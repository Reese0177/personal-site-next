import styles from '../styles/Header.module.css';
import { Link } from "react-scroll";
import React from 'react';


const Header = React.forwardRef(({activePage}, ref) => {
    return (
        <header>
            <div className={styles.navbar} ref={ref}>
                <Link to="intro-hero" smooth={true} duration={500}><div className={styles.title}>Reese Gosain</div></Link>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={(activePage === "" ? styles.active + " " : "") + styles.navItem}>
                            <Link to="intro-hero" smooth={true} duration={500}>About Me</Link>
                        </li>
                        <li className={(activePage === "portfolio" ? styles.active + " " : "") + styles.navItem}>
                            <Link to="portfolio-hero" smooth={true} duration={500}>Portfolio</Link>
                        </li>
                        <li className={(activePage === "resume" ? styles.active + " " : "") + styles.navItem}>
                            <Link to="resume-hero" smooth={true} duration={500}>Resume</Link>
                        </li>
                        <li className={(activePage === "contact" ? styles.active + " " : "") + styles.navItem}>
                            <Link to="contact-hero" smooth={true} duration={500}>Contact Me</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
});
Header.displayName = "Header";
export default Header;