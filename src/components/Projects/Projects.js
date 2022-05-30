import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import credo from '../../Assets/Projects/credo.png';
import myntra from '../../Assets/Projects/myntra.png';
import uboric from '../../Assets/Projects/uboric.png';
function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={credo}
              isBlog={false}
              title='Clean Beauty Website'
              description='We live for discovering the best, cleanest indie and luxury brands around, and carry the largest collection of safe, non-toxic beauty products. A collaborative project built by a team of 5 developers executed in 7 days.'
              link='https://github.com/Thannzz/credo-beauty-clone'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={myntra}
              isBlog={false}
              title='Myntra online Fashion Store'
              description="This is a Clone website of myntra.com built by 4 developers of the team including me in 6 days. It's an online fashion store where users can come and buy products related to beauty care, fashion, Home living, etc."
              link='https://github.com/yashtomar15/myntra-clone'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={uboric}
              isBlog={false}
              title='Uboric.com- Clone'
              description='Here at ‘Uboric’.com, we realize that style and prosperity begin with the correct shoes. We likewise understand that effectively finding the size and style to meet your requirements is vital to your web based shopping knowledge. Since beginning our web based business website , we’ve been endeavoring to present to you that perfect shopping experience.'
              link='https://github.com/Saraswati121/Uboric'
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
