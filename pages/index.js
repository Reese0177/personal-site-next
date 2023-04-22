import Layout from '../components/Layout';
import styles from '../styles/index.module.css';
import { Link } from "react-scroll";
import { useState, useEffect, useRef } from 'react';
import bg from '../images/Nashville.JPG';

const Index = (props) => {
  const [height, setHeight] = useState(0)
  const header = useRef(null)

  useEffect(() => {
    setHeight(header.current.clientHeight)
  }, [])
  return (
    <Layout ref={header}>
      <section className="hero" style={{backgroundImage: `url(${bg.src})`}} >
        <h1 id="title">Hi! My name is Reese.</h1>
        <Link to="bio" smooth={true} offset={-height} duration={500} className="btn">Learn About Me</Link>
      </section>
      <section className={styles.about} id="bio">
        <div id={styles.timeline}>
          <div className="row">
            <div className={styles.column + " column"}>
              <h2 className="columnHeader">Past</h2>
              <p>I have had an interest in computers and technology for as long as I can remember. My first related memory is of a toy Superman laptop that I loved as a kid. From there, I started teaching myself Python at age 11, and followed that up with Ruby. Since then, I have also worked with Java, PHP, JS (including React), C++, MySQL, HTML, and CSS.</p>
              <p>Throughout high school, I continued to develop my skills. I took all of the available computer science classes, was in a technology support internship class for 3 semesters (during which I helped teach new students as one of the two lead interns), interned with my school district IT department one summer helping prepare for the upcoming school year, and interned at a local building technologies company as an Intern Controls Automation Project Engineer for a semester.</p>
              <p>After graduating in the top 5% of my class, I decided to take a gap year before college, and moved 500 miles to Nashville, TN (I took the above photo there with my drone.) with my girlfriend. I started studying computer science at Vanderbilt University a year later, but decided to take a leave of absence after two months to begin pursuing apprenticeships.</p>
            </div>
            <div className={styles.column + " column"}>
              <h2 className="columnHeader">Present</h2>
              <p>Currently, I am a Software Developer Apprentice at ConvergeOne, which I found through Multiverse. After completing Multiverse&apos;s 12-week software engineering bootcamp, I started working with ConvergeOne using PHP, SQL, and JavaScript.</p>
              <p>On the job, I frequently implement new features, refresh old components, and fix bugs. My biggest project so far has been creating a full-stack reporting system, enabling internal end-users to create dynamic reports using various filters and fields.</p>
              <p>I&apos;ve also had the chance to continue developing soft skills by: communicating with other developer and non-technical teammates, attending daily scrum meetings, and working with other developers to implement new features.</p>
              <p>Currently, I enjoying living in the Nashville area, which I recently moved back to with my girlfriend.</p>
            </div>
            <div className={styles.column + " column"}>
              <h2 className="columnHeader">Future</h2>
              <p>In the future, I hope to lead a small team of people, while also continuing to write code myself. I enjoy the work and can get lost in it at times, and I know that I would never want to give that up to manage people. This role would also allow me to help others learn, which I enjoy doing almost as much as I enjoy coding. I hope to be able to get to this position in a quicker fashion than most, because I believe I have very strong skills and am excited to be able to showcase them in the coming years.</p>
              <p>Ideally, this would be in an environment that will force me to keep learning new skills and technologies, in a way that keeps me motivated. I love being able to see the product of my work, so I hope to work on something consumer-facing.</p>
              <p>In terms of more personal goals, I am hoping to buy my first house in the Nashville area once my current lease is up.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Index;