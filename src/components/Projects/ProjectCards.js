import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiLinkExternal } from 'react-icons/bi';

function ProjectCards(props) {
  return (
    <Card className='project-card-view' style={{padding:'1em'}}>
      <Card.Img variant='top' src={props.imgPath} alt='card-img' />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>{props.info}</Card.Text>
        <Card.Text style={{ textAlign: 'justify' }}>
          <h5 style={{ color: 'purple' }}>Features :-</h5> {props.feature}
        </Card.Text>
        <Card.Text style={{ textAlign: 'justify' }}>
          <h5 style={{ color: 'purple' }}>Areas of responsibility :-</h5>{' '}
          {props.res}
        </Card.Text>
        <div style={{ textAlign: 'center', display: 'flex',justifyContent: 'space-between',padding:'1em'}}>
          <div>
            <Button variant='primary' href={props.link} target='_blank'>
            Github <BiLinkExternal /> &nbsp;
            </Button>
          </div>
          <div>
            <Button variant='primary' href={props.isBlog} target='_blank'>
              Blogs<BiLinkExternal /> &nbsp;
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
