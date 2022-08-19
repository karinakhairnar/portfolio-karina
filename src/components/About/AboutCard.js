import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'> Karina Khairnar </span>
            from Dhule, Maharashatra.
            {/* <br />I am a junior pursuing IMSC in Maths and Computing in BIT
            Mesra. */}
            <br />
            <br />
            <li className='about-activity'>
              <ImPointRight /> Here are my some hardskills and softskills
            </li>
            <p className='purple'>
              Front End | Back End | TypeScript Data Structures and Algorithms |
              JavaScript Strong Communication | Project Management Tools
              Computer Literacy | Problem-Solving Positive Mindset
            </p>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Playing Badminton
            </li>
            <li className='about-activity'>
              <ImPointRight /> Writting and Reading Tech Blogs
            </li>
            <li className='about-activity'>
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "When you have a dream, you've got to grab it and never let go!"{' '}
          </p>
          <footer className='blockquote-footer'>Karina</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
