import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';


const Header = React.forwardRef((props, ref) => {
    const router = useRouter();
    return (
        <header>
            <div className={styles.navbar} ref={ref}>
                <Link href="/" passHref><div className={styles.title}>Reese Gosain</div></Link>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={(router.pathname === "/" ? styles.active + " " : "") + styles.navItem}>
                            <Link href="/">About Me</Link>
                        </li>
                        <li className={(router.pathname === "/portfolio" ? styles.active + " " : "") + styles.navItem}>
                            <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li className={(router.pathname === "/resume" ? styles.active + " " : "") + styles.navItem}>
                            <Link href="/resume">Resume</Link>
                        </li>
                        <li className={(router.pathname === "/contact" ? styles.active + " " : "") + styles.navItem}>
                            <Link href="/contact">Contact Me</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
});
Header.displayName = "Header";
export default Header;