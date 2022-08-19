import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import karina from '../../Assets/karina.png';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              Strong in design and integration with intuitive problem- solving
              skills.
              <b className='purple'>
                Proficient in HTML, CSS, JavaScript, React, and Redux.
                Passionate about implementing and launching new projects.{' '}
              </b>
              Ability to translate business requirements into technical
              solutions. Looking to start my career as a web developer with a
              reputed firm driven by technology.
              <br />
              <br />I am fluent in classics like
              <b className='purple'>Javascript React ,Redux and Typescript.</b>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <b className='purple'>Web Technologies and Products </b> and also
              in areas related to{' '}
              <b className='purple'>
                Deep Learning and Natural Launguage Processing.
              </b>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className='purple'>Node.js</b> and
              <i>
                <b className='purple'>
                  {' '}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className='purple'> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={karina} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
              <p>
                <p style={{ color: 'white' }}>
                  karinakhairnar@gmail.com
                </p>
              </p>
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/karinakhairnar'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'>
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/karina-khairnar-13b520204/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'>
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
