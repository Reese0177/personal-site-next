import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';


const Header = React.forwardRef((props, ref) => {
    const router = useRouter();
    return (
        <header>
            <div className={styles.navbar} ref={ref}>
                <a href="/" className={styles.title}>Reese Gosain</a>
                <nav>
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
                    </ul>
                </nav>
            </div>
        </header>
    );
});

export default Header;