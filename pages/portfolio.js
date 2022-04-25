import Layout from '../components/Layout';
import styles from '../styles/portfolio.module.css';
import { Link } from "react-scroll";
import { useState, useEffect, useRef } from 'react';

const Index = (props) => {
  const [height, setHeight] = useState(0)
  const header = useRef(null)

  useEffect(() => {
    setHeight(header.current.clientHeight)
  })
  return (
    <Layout ref={header}>
      <section className={styles.hero+" hero"}>
        <h1 id="title">My Portfolio</h1>
        <Link to="view" smooth={true} offset={-height} duration={500} className="btn">View</Link>
      </section>
      <section className={styles.portfolio} id="view">
        <div className={styles.container}>
          <div className={styles.item}>
            
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Index;