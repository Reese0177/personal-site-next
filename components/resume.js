import styles from '../styles/resume.module.css';
import { Link } from "react-scroll";
import bg from '../images/DJI_0007-Edited.jpg';
import { items } from '../data/resume-items';

const Resume = ({height}) => {
  return (
    <>
      <section className="hero" style={{backgroundImage: `url(${bg.src})`}} id="resume-hero">
        <h1 id="title">Resume</h1>
        <Link to="resume" smooth={true} offset={-height} duration={500} className="btn">View</Link>
      </section>
      <section className={styles.resume} id="resume">
        <div>
          <div className="row">
            <div className={styles.column + " column"}>
              <h2 className="columnHeader">Experience</h2>
              <ul className={styles.timeline}>
                {items.experience.map((item, index) =>
                  <li className={styles.timelineItem} key={index}>
                    <div className={styles.time}>{item.title} ({item.dates})</div>
                    <p className={styles.text}>{item.text}</p>
                  </li>  
                )}
              </ul>
            </div>
            <div className={styles.column + " column"}>
              <h2 className="columnHeader">Education</h2>
              <ul className={styles.timeline}>
                {items.education.map((item, index) => 
                  <li className={styles.timelineItem} key={index}>
                    <div className={styles.time}>{item.title}</div>
                    <p className={styles.text}>{item.text}</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;