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
              isBlog='https://medium.com/@karinakhairnar/clean-beauty-website-969ed17085d5'
              title='Clean Beauty Website'
              info='We live for discovering the best, cleanest indie and luxury brands around, and carry the largest collection of safe, non-toxic beauty products. So you can play, get inspired and find that you love clean beauty.A collaborative project built by a team of 5 members executed in 7 days.'
              feature='
              Functionality of Filtering 
              | Functionality of Hovering
              | Media Query
              | Sign-in/Sign-up Authentication
              | Add-To-Card 
              | Payment '
              res='
              Build Checkout Page - In Checkout page related to payment and shipping/billing details , it basically collects customers shipping details. 
              | Build Payment page - In payment page customers are allowed to purchase items easily and secretly.
              | Change the CSS of every page for getting same look as original site
              Tech Stack- HTML | CSS | Javascript '
              link='https://github.com/Thannzz/credo-beauty-clone'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={myntra}
              isBlog='https://medium.com/@karinakhairnar/myntra-online-fashion-store-dfc32d20fa8b'
              title='Myntra online Fashion Store'
              info='This is an Clone website of myntra.com which are built by 4 members of team including me in 6 days ,Its an online fashion store where user can come and buy products related to beauty care , fashion , Home living, etc.'
              feature='Signin and Signup Authentication.
              | Navigation bar for exploring.
              | User can add products to cart.
              | Sorting the products by price and brands.
              | User can place orders.'
              res='Signin and Signup Authentication.
              | Add to cart - user can add product in card/bag.
              | WishList Page - if user links products that can be store in this page.
              | Change CSS in some of the pages.
              Tech Stack- HTML | CSS | Javascript '
              link='https://github.com/yashtomar15/myntra-clone'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={uboric}
              isBlog='https://medium.com/@karinakhairnar/uboric-com-clone-4543c72bbfe9'
              title='Uboric.com- Clone'
              info='On Uboric you can Shop Online for Men & Women Clothing, Shoes, fashion, Home Decor & Kitchen Appliances & Much More. A collaborative project built by a team of 6 members executed in 7 days.'
              feature='Sign-in/Sign-up Authentication | Functionality of Filtering | Functionality of Hovering | Add-To-Card | Payment'
              res=' Add to cart - user can add product in card/bag. | Build Checkout Page - In Checkout page related to payment and shipping/billing details , it basically collects customers shipping details | Build Payment page - In payment page customers are allowed to purchase items easily and secretly | Change CSS in some of the pages | Team Leading'
              link='https://github.com/Saraswati121/Uboric'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={uboric}
              isBlog='https://medium.com/@karinakhairnar/karina-khairnar-4f7349a02b9b'
              title='
              Clone of Cronometer'
              info='This was a collaborative construct week project at Masai School. In this project, we have tried to create a full stack clone of the cronometerwebsite using ReactJs for the front-end and NodeJs, ExpressJs, and MongoDB for the backend. This project was built by a team of 4 developers in 5 Days.'
              feature='Sign-in/Sign-up Authentication | Functionality of Hovering | Add-To-Card | Payment'
              res='Building Sign-up and Login Page with all functionality.
              | Storing all data in MongoDB server also in Localstorage.
              | Providing Authentication to both pages by using the backend.
              Tech Stack: React | Redux | Styled Component | Chakra UI | Node.JS | Express.JS | Mongoose | MongoDB'
              link='https://github.com/Mohd-Haroon/gusty-adjustment-6018'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={uboric}
              isBlog='https://medium.com/@callmeabhi1997/cloning-kimaye-website-ff45bb15c8e'
              title='Clone OF Kimaye'
              info='This was a collaborative construct week project at Masai School. In this project, we have tried to create a full stack clone of the Kimaye website using ReactJs for the front-end and NodeJs, ExpressJs, and MongoDB for the backend. This project was built by a team of 5 developers in 5 Days.'
              feature='Sign-in/Sign-up Authentication | Functionality of Hovering | Add-To-Card | Payment'
              res='Building a Cart Page with all functionality.
              | Building Checkout and Shipping Page with all functionality.
              | Building Learn and Grow Pages with functionality.
              | Providing CSS on the Same pages.
              Tech Stack: React | Redux | Styled Component | Chakra UI | Node.JS | Express.JS | Mongoose | MongoDB'
              link='https://github.com/Mohd-Haroon/gusty-adjustment-6018'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
