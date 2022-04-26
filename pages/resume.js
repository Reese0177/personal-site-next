import Layout from '../components/Layout';
import styles from '../styles/resume.module.css';
import { Link } from "react-scroll";
import { useState, useEffect, useRef } from 'react';
import bg from '../images/Florida.jpg';

const Index = (props) => {
  const [height, setHeight] = useState(0)
  const header = useRef(null)

  useEffect(() => {
    setHeight(header.current.clientHeight)
  }, [])

  return (
    <Layout ref={header}>
      <section className="hero" style={{backgroundImage: `url(${bg.src})`}} >
        <h1 id="title">My Resume</h1>
        <Link to="view" smooth={true} offset={-height} duration={500} className="btn">View</Link>
      </section>
      <section className={styles.resume} id="view">
        <div>
          <div className="row">
            <div className={styles.column + " column"}>
              <h2 className="columnHeader">Experience</h2>
              <ul className={styles.timeline}>
                <li className={styles.timelineItem}>
                  <div className={styles.time}>ConvergeOne (Mar 2022 - )</div>
                  <p className={styles.text}>Started as a Software Developer Apprentice. Currently in training with Multiverse in Software Engineering Bootcamp.</p>
                </li>
                <li className={styles.timelineItem}>
                  <div className={styles.time}>Delta Building Technologies (Aug 2019 - Dec 2019)</div>
                  <p className={styles.text}>Worked as an Intern Controls Automation Project Engineer creating functional GUIs for clients to monitor their systems. Also developed programs to automate creation of Excel spreadsheets necessary for projects.</p>
                </li>
                <li className={styles.timelineItem}>
                  <div className={styles.time}>Geneva CUSD 304 (Jun 2019 - Jul 2019)</div>
                  <p className={styles.text}>Worked as Summer Technology Support to assist school district&apos;s IT department at all locations to prepare for upcoming school year. Used ticketing and inventory management systems, worked with colleagues to tackle large-scale projects, imaged hundreds of devices, and more.</p>
                </li>
                <li className={styles.timelineItem}>
                  <div className={styles.time}>Darden Restaurants (Nov 2018 - Nov 2021)</div>
                  <p className={styles.text}>Started as a busser, and quickly worked my way up to host, server, and to-go specialist. As lead host, I was responsible for problem-solving, as well as directing the hosting and bussing teams. Worked in multiple restaurants resolving guests&apos; complaints and improve satisfaction. I also trained people in every role I was in at all restuarants I worked at.</p>
                </li>
                <li className={styles.timelineItem}>
                  <div className={styles.time}>Greenfields of Geneva (May 2018 - Mar 2020)</div>
                  <p className={styles.text}>Volunteered as tech support for the senior living community. Had many repeat clients, and help develop communication skills to explain technical issues and processes to the residents.</p>
                </li>
              </ul>
            </div>
            <div className={styles.column + " column"}>
              <h2 className="columnHeader">Education</h2>
              <ul className={styles.timeline}>
                <li className={styles.timelineItem}>
                  <div className={styles.time}>Bootcamp</div>
                  <p className={styles.text}>Currently in Software Engineering Bootcamp with Multiverse as I prepare for my job with ConvergeOne. I will cover JS, React, HTML, CSS, Git, Node.js, NoSQL, and PHP. So far, I have had experience with all of the topics we&apos;ve covered before starting the bootcamp, so I have spent most of my time helping and teaching others.</p>
                </li>
                <li className={styles.timelineItem}>
                  <div className={styles.time}>College</div>
                  <p className={styles.text}>I was accepted to Vanderbilt University in Nashville, TN to study computer science. Here, I began learning C++ and discrete structures before deciding the college path wasn&apos;t for me. </p>
                </li>
                <li className={styles.timelineItem}>
                  <div className={styles.time}>High School</div>
                  <p className={styles.text}>I graduated from Geneva Community High School in Geneva, IL in the top 5% of my class. In my time there, I took all the computer science classes offered, and received a 5 on my Computer Science A AP exam. I also finished all the calculus that was offered by the end of my junior year, receiving a 5 on my Calculus BC AP exam. I also took many other stem courses, including 2 years of chemistry, 2 years of physics, and biology. I also took 3 semesters of technology support internship, in which I worked with my school&apos;s IT department and helped teach new students.</p>
                </li>
                <li className={styles.timelineItem}>
                  <div className={styles.time}>Self-Teaching</div>
                  <p className={styles.text}>I began teaching myself Python at the age of 11 through websites like Codecademy. Since then, I have continued to teach myself new languages, such as PHP, HTML, CSS, JS (including React and Next.js), and Ruby. I have also worked with AWS services such as Amplify, S3, CloudFront, and Route 53. Most of my knowledge has come from my self-teaching, and I hope to continue that trend as I enter my career.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Index;