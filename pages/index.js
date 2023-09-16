import Layout from '../components/Layout';
import Intro from '../components/intro';
import Portfolio from '../components/portfolio';
import Resume from '../components/resume';
import Contact from '../components/contact';
import React, { useState, useEffect, useRef } from 'react';
import handleViewport from 'react-in-viewport';

const Index = ({page}) => {
  const [activePage, setActivePage] = useState(null);
  const [height, setHeight] = useState(0);
  const header = useRef(null);
  const introRef = useRef(null);
  const portfolioRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);
  const [thresholdHeight, setThresholdHeight] = useState(0);

  const IntroDiv = () => {
    return (
      <div ref={introRef}>
        <Intro height={height} />
      </div>
    );
  };
  const PortfolioDiv = () => {
    return (
      <div ref={portfolioRef}>
        <Portfolio height={height} />
      </div>
    );
  };
  const ResumeDiv = () => {
    return (
      <div ref={resumeRef}>
        <Resume height={height} />
      </div>
    );
  };
  const ContactDiv = () => {
    return (
      <div ref={contactRef}>
        <Contact height={height} />
      </div>
    );
  };

  const IntroBlock = ({ forwardedRef }) => {
    return (
      <div ref={forwardedRef}>
        <IntroDiv />
      </div>
    );
  };
  const PortfolioBlock = ({ forwardedRef }) => {
    return (
      <div ref={forwardedRef}>
        <PortfolioDiv />
      </div>
    );
  };
  const ResumeBlock = ({ forwardedRef }) => {
    return (
      <div ref={forwardedRef}>
        <ResumeDiv />
      </div>
    );
  };
  const ContactBlock = ({ forwardedRef }) => {
    return (
      <div ref={forwardedRef}>
        <ContactDiv />
      </div>
    );
  };

  useEffect(() => {
    setThresholdHeight(document.documentElement.clientHeight/2);
  }, []);

  const IntroViewport = handleViewport(IntroBlock, {threshold: thresholdHeight/(introRef.current?.clientHeight ?? 1)});
  const PortfolioViewport = handleViewport(PortfolioBlock, {threshold: thresholdHeight/(portfolioRef.current?.clientHeight ?? 1)});
  const ResumeViewport = handleViewport(ResumeBlock, {threshold: thresholdHeight/(resumeRef.current?.clientHeight ?? 1)});
  const ContactViewport = handleViewport(ContactBlock, {threshold: thresholdHeight/(contactRef.current?.clientHeight ?? 1)});

  useEffect(() => {
    setHeight(header.current.clientHeight);
  }, []);
  useEffect(() => {
    if (page) {
      document.getElementById(page + "-hero")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }, [page]);

  const handleViewportEnter = (section) => {
    setActivePage(section);
    window.history.replaceState(null, null, "/" + section);
  };

  return (
    <Layout ref={header} activePage={activePage}>
      <IntroViewport onEnterViewport={() => {handleViewportEnter('');}}/>
      <PortfolioViewport onEnterViewport={() => {handleViewportEnter('portfolio');}}/>
      <ResumeViewport onEnterViewport={() => {handleViewportEnter('resume');}}/>
      <ContactViewport onEnterViewport={() => {handleViewportEnter('contact');}}/>
    </Layout>
  );
}

export default Index;