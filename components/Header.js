import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
    const router = useRouter();

    return (
        <header id="header">
            <div className={styles.navbar}>
                <a href="/" className={styles.title}>Reese Gosain</a>
                <nav>
                    <ul className={styles.navList}>
                        <li className={(router.pathname === "/" ? styles.active + " " : "") + styles.navItem}>
                            <Link href="/">About Me</Link>
                        </li>
                        <li className={(router.pathname === "/portfolio" ? styles.active + " " : "")  + styles.navItem}>
                            <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li className={(router.pathname === "/resume" ? styles.active + " " : "") + styles.navItem}>
                            <Link href="/resume">Resume</Link>
                        </li>
                        <li className={(router.pathname === "/contact" ? styles.active + " ": "") + styles.navItem}>
                            <Link href="/contact">Contact Me</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;