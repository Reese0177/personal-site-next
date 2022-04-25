import Layout from '../components/Layout';
import styles from '../styles/index.module.css';
import { useState, useEffect, useRef } from 'react';

const Index = (props) => {
  const [height, setHeight] = useState(0)
  const header = useRef(null)

  useEffect(() => {
    setHeight(header.current.clientHeight)
  })
  return (
    <Layout ref={header}>
      <section className={styles.hero}>
        <h1 id={styles.welcome}>Hi! My name is Reese.</h1>
      </section>
    </Layout>
  );
}

export default Index;