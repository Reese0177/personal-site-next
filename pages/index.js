import Layout from '../components/Layout';
import styles from '../styles/index.module.css';
import { Link } from "react-scroll";

const Index = (props) => {
  return (
    <Layout>
      <section className={styles.hero}>
        <h1 id={styles.welcome}>Welcome</h1>
        <Link to="bio" smooth={true} duration={500} className={styles.btn}>Learn About Me</Link>
      </section>
      <section className={styles.bio} id="bio">
        <div id={styles.timeline}>
          <div className={styles.row}>
            <div className={styles.column}>
              <h2 className={styles.subheader}>Past</h2>
              <p>Past</p>
            </div>
            <div className={styles.column}>
              <h2 className={styles.subheader}>Present</h2>
              <p>Present</p>
            </div>
            <div className={styles.column}>
              <h2 className={styles.subheader}>Future</h2>
              <p>Future</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Index;