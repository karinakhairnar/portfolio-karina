import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { CgEricsson } from 'react-icons/cg';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import {
  SiExpress,
  SiStyledcomponents,
  SiChakraui,
  SiMaterialui,
  SiTypescript,
} from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <AiFillHtml5 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <CgEricsson />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <BsBootstrap />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiStyledcomponents />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiChakraui />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiMaterialui />
      </Col>
      <i class='fa-regular fa-code'></i>
    </Row>
  );
}

export default Techstack;
