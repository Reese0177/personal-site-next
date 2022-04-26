import {SocialIcon} from 'react-social-icons';
import styles from '../styles/Footer.module.css';

const Footer = ({height}) => {
    return (
        <footer style={{height: height}}>
            <div className={styles.footer}>
                <div className={styles.icons}>
                    <SocialIcon className={styles.icon} url="https://www.linkedin.com/in/reese-gosain/" target="_blank" rel="noreferrer"/>
                    <SocialIcon className={styles.icon} url="https://github.com/Reese0177" target="_blank" rel="noreferrer"/>
                </div>
                <div className={styles.text}>
                    &copy; Reese Gosain
                </div>
            </div>
        </footer>
    );
}

export default Footer;