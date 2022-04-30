import Layout from '../components/Layout';
import styles from '../styles/portfolio.module.css';
import { items } from '../data/portfolio-items';
import bg from '../images/DJI_0011.JPG';
import { Link } from "react-scroll";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Index = (props) => {
  const [height, setHeight] = useState(0)
  const header = useRef(null)

  useEffect(() => {
    setHeight(header.current.clientHeight)
  }, [])

  return (
    <Layout ref={header}>
      <section className="hero" style={{ backgroundImage: `url(${bg.src})` }} >
        <h1 id="title">My Portfolio</h1>
        <Link to="view" smooth={true} offset={-height} duration={500} className="btn">View</Link>
      </section>
      <section className={styles.portfolio} id="view">
        <div className={styles.container}>
          {items.map(portfolioItem =>
            <a href={portfolioItem.href} target="_blank" rel="noreferrer">
              <div className={styles.item}>
                <div className={styles.imgWrap}>
                  <Image src={portfolioItem.image[portfolioItem.imgName]} alt={portfolioItem.alt} />
                </div>
                <h2 className={styles.itemHeader}>{portfolioItem.title}</h2>
              </div>
            </a>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Index;