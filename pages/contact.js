import Layout from '../components/Layout';
import styles from '../styles/contact.module.css';
import { Link } from "react-scroll";
import { useState, useEffect, useRef } from 'react';
import bg from '../images/Florida.jpg';
import TextareaAutosize from 'react-textarea-autosize';
import handleViewport from 'react-in-viewport';

const Index = (props) => {
  const [height, setHeight] = useState(0)
  const header = useRef(null)

  useEffect(() => {
    setHeight(header.current.clientHeight)
  }, [])
  const Block = (props) => {
    const { forwardedRef } = props;
    return (
      <h2 ref={forwardedRef}>Contact Me</h2>
    );
  };
  const focusedInput = useRef(null);
  const ViewportBlock = handleViewport(Block);
  return (
    <Layout ref={header}>
      <section className="hero" style={{ backgroundImage: `url(${bg.src})` }} >
        <h1 id="title">Let&apos;s Get in Touch</h1>
        <Link to="view" smooth={true} offset={-height} duration={500} className="btn">Do it!</Link>
      </section>
      <section className={styles.contact} id="view">
        <div className={styles.container}>
          <form
            action="https://formspree.io/f/xknyprrl"
            method="POST"
            className={styles.form}
            target="_blank"
            rel="noreferrer"
          >
            <ViewportBlock onEnterViewport={() => focusedInput.current.focus()}/>
            <input type="hidden" name="_subject" value="Contact request from personal site" />
            <input type="text" name="name" placeholder="Your Name" ref={focusedInput} required />
            <input type="email" name="email" placeholder="Your Email" required />
            <TextareaAutosize minRows={10} className={styles.textarea} name="message" placeholder="Your Message" required></TextareaAutosize>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default Index;