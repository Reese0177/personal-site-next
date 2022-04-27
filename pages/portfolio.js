import Layout from '../components/Layout';
import styles from '../styles/portfolio.module.css';
import el from '../images/el.PNG';
import rs from '../images/rs.png';
import td from '../images/td.PNG';
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
      <section className="hero" style={{backgroundImage: `url(${bg.src})`}} >
        <h1 id="title">My Portfolio</h1>
        <Link to="view" smooth={true} offset={-height} duration={500} className="btn">View</Link>
      </section>
      <section className={styles.portfolio} id="view">
        <div className={styles.container}>
          <a href="https://dki0lqd9ti84f.cloudfront.net/" target="_blank" rel="noreferrer">
            <div className={styles.item}>
              <div className={styles.imgWrap}>
                <Image src={td} alt="Tatted Dragons Website Photo" />
              </div>
              <h2 className={styles.itemHeader}>Tatted Dragons</h2>
            </div>
          </a>
          <a href="https://reese0177.github.io/swe_us_2022_landing_page_starter/" target="_blank" rel="noreferrer">
            <div className={styles.item}>
              <div className={styles.imgWrap}>
                <Image src={el} alt="EdgeLedger Project Photo" />
              </div>
              <h2 className={styles.itemHeader}>EdgeLedger</h2>
            </div>
          </a>
          <a href="https://test.d3sdcani5maaj3.amplifyapp.com/" target="_blank" rel="noreferrer">
            <div className={styles.item}>
              <div className={styles.imgWrap}>
                <Image src={rs} alt="React Store Project Photo" />
              </div>
              <h2 className={styles.itemHeader}>React Store</h2>
            </div>
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default Index;