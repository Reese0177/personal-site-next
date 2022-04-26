import Layout from '../components/Layout';
import styles from '../styles/contact.module.css';
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
      <section className={styles.hero + " hero"}>
        <h1 id="title">Let's Get in Touch</h1>
        <Link to="view" smooth={true} offset={-height} duration={500} className="btn">Do it!</Link>
      </section>
      <section className={styles.contact} id="view">
        <div className={styles.container}>
          <form
            action="https://formspree.io/f/xknyprrl"
            method="POST"
            className={styles.form}
            target="_blank"
          >
            <h2>Contact Me</h2>
            <input type="hidden" name="_subject" value="Contact request from personal site" />
            <input type="text" name="name" placeholder="Your Name" required/>
            <input type="email" name="email" placeholder="Your Email" required/>
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default Index;