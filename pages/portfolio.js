import Layout from '../components/Layout';
import styles from '../styles/portfolio.module.css';
import { Link } from "react-scroll";
import { useState, useEffect, useRef } from 'react';

const Index = (props) => {
  const [height, setHeight] = useState(0)
  const header = useRef(null)

  useEffect(() => {
    setHeight(header.current.clientHeight)
  }, [])

  return (
    <Layout ref={header}>
      <section className={styles.hero + " hero"}>
        <h1 id="title">My Portfolio</h1>
        <Link to="view" smooth={true} offset={-height} duration={500} className="btn">View</Link>
      </section>
      <section className={styles.portfolio} id="view">
        <div className={styles.container}>
        <a href="https://dki0lqd9ti84f.cloudfront.net/" target="_blank" rel="noreferrer">
            <div className={styles.item}>
              <div className={styles.imgWrap} id={styles.td}/>
              <h2 className="columnHeader">Tatted Dragons</h2>
            </div>
          </a>
          <a href="https://reese0177.github.io/swe_us_2022_landing_page_starter/" target="_blank" rel="noreferrer">
            <div className={styles.item}>
              <div className={styles.imgWrap} id={styles.el}/>
              <h2 className="columnHeader">EdgeLedger</h2>
            </div>
          </a>
          <a href="https://test.d3sdcani5maaj3.amplifyapp.com/" target="_blank" rel="noreferrer">
            <div className={styles.item}>
              <div className={styles.imgWrap} id={styles.rs}/>
              <h2 className="columnHeader">React Store</h2>
            </div>
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default Index;