import styles from '../styles/contact.module.css';
import { Link } from "react-scroll";
import { useState, useRef } from 'react';
import bg from '../images/Florida.jpg';
import TextareaAutosize from 'react-textarea-autosize';
import handleViewport from 'react-in-viewport';

const Contact = ({height}) => {
  const Block = (props) => {
    const { forwardedRef } = props;
    return (
      <button ref={forwardedRef} type="submit">Send</button>
    );
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      return;
    }
    fetch("https://formspree.io/f/xknyprrl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message, _subject: 'Contact request from personal site' }),
    });
    setName('');
    setEmail('');
    setMessage('');
  };
  const focusedInput = useRef(null);
  const ViewportBlock = handleViewport(Block);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [focused, setFocused] = useState(false);
  const handleEnterViewport = () => {
    if (!focused) {
      focusedInput.current.focus();
      setFocused(true);
    }
  }
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${bg.src})` }} id="contact-hero">
        <h1 id="title">Let&apos;s Get in Touch</h1>
        <Link to="contact" smooth={true} offset={-height} duration={500} className="btn">Do it!</Link>
      </section>
      <section className={styles.contact} id="contact">
        <div className={styles.container}>
          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <h2>Contact Me</h2>
            <input type="text" name="name" placeholder="Your name" ref={focusedInput} required value={name} onInput={(e) => {setName(e.target.value);}} />
            <input type="email" name="email" placeholder="Your email" required value={email} onInput={(e) => {setEmail(e.target.value);}} />
            <TextareaAutosize minRows={10} className={styles.textarea} name="message" placeholder="Your message" required value={message} onInput={(e) => {setMessage(e.target.value);}}></TextareaAutosize>
            <ViewportBlock onEnterViewport={handleEnterViewport}/>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;