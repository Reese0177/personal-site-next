import styles from '../styles/portfolio.module.css';
import { items } from '../data/portfolio-items';
import bg from '../images/DJI_0011.JPG';
import { Link } from "react-scroll";
import Image from 'next/image';
import {SocialIcon} from 'react-social-icons';


const Portfolio = ({height}) => {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${bg.src})` }} id="portfolio-hero">
        <h1 id="title">Portfolio</h1>
        <Link to="portfolio" smooth={true} offset={-height} duration={500} className="btn">View</Link>
      </section>
      <section className={styles.portfolio} id="portfolio">
        <div className={styles.container}>
          {items.map((portfolioItem, index) =>
            <a href={portfolioItem.href ?? null} key={index} target="_blank" rel="noreferrer">
              <div className={styles.item}>
                <div className={styles.imgWrap}>
                  <Image src={portfolioItem.image} alt={portfolioItem.alt} />
                </div>
                <h2 className={styles.itemHeader}>{portfolioItem.title}</h2>
                <p className={styles.desc}>{portfolioItem.desc}</p>
                {portfolioItem.git && <div className={styles.iconDiv}>
                  <SocialIcon className={styles.icon} url={portfolioItem.git} target="_blank" rel="noreferrer"/>
                </div>}
              </div>
            </a>
          )}
        </div>
      </section>
    </>
  );
}

export default Portfolio;