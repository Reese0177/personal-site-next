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
              <p>After graduation, I decided to take a gap year before college, and moved 500 miles to Nashville, TN (I took the above photo there with my drone.) with my girlfriend. I started studying computer science at Vanderbilt University a year later, and quickly realized it wasn&apos;t for me. After two months, I left and began pursuing apprenticeships.</p>
            </div>
            <div className={styles.column + " column"}>
              <h2 className="columnHeader">Present</h2>
              <p>Currently, I am in a software engineering bootcamp with Multiverse. Through them, I was able to land my job as a Software Developer Apprentice at ConvergeOne. I am happy to be able to say that I am exactly (if not farther than) where I hoped I would be when I left Vanderbilt.</p>
              <p>So far, the bootcamp has been a great opportunity for me to help others. Since I have been self-teaching for nearly a decade, I have had a pretty good handle on everything we have covered so far, so I have enjoyed using my time to help others learn, as well as tackle extra challeges to further improve my own skills.</p>
              <p>Up to this point in the bootcamp, we have covered JS fundamentals, HTML, CSS, and Git. I&apos;ve been surprised how much I&apos;ve enjoyed learning more about HTML and CSS. I used to think I could only do backend well, but now I know that I could be successful on the frontend as well. I&apos;m looking forward to learning more about React, and refreshing my PHP skills. </p>
            </div>
            <div className={styles.column + " column"}>
              <h2 className="columnHeader">Future</h2>
              <p>In the future, I hope to lead a small team of people, while also continuing to write code myself. I enjoy the work and can get lost in it at times, and I know that I would never want to give that up to manage people. This role would also allow me to help others learn, which I enjoy doing almost as much as I enjoy coding. I hope to be able to get to this position in a quicker fashion than most, because I believe I have very strong skills and am excited to be able to showcase them in the coming years.</p>
              <p>Ideally, this would be in an environment that will force me to keep learning new skills and technologies, in a way that keeps me motivated. I love being able to see the product of my work, so I hope to work on something consumer-facing.</p>
              <p>In terms of more personal goals, I would like to move back to a place like Nashville, although Atlanta is on the list, too, and buy my own house. I hope to accomplish that in the very near future, hopefully in the next few years.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Index;