import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo }
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree }
                </p>
                
                 <div className="buttons">
                  
                 <a
                        target="_blank"                   
                        className="cta-btn cta-btn--resume"
                        href="https://www.hackerrank.com/aniket_2005134"
                        >
                           HackerRank
                        </a>
                 <a
                        target="_blank"                   
                        className="cta-btn cta-btn--resume"
                        href="https://docs.google.com/document/d/1HhIOcxSSxVB33_S4nLYcxauzBzfnzb9I1YfHfU_FLy8/edit"
                        >
                         Guvi's Codekata

                        </a>
                 <a
                        target="_blank"                   
                        className="cta-btn cta-btn--resume"
                        href="https://drive.google.com/file/d/1I1pKNZAKJ0UJg_ZGkgSuJkXOy_2wUvRN/view?usp=sharing"
                        >
                         Resume

                        </a>
                        </div>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
