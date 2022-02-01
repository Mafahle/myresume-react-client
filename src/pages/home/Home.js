import './Home.css';
import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (<>
    <div className='home' style={{ paddingTop: '15rem'}}>
      <Container>
        <Row>
          <Col style={{ paddingRight: '0px'}}>
            <Button className='big-btn candidate-btn' style={{ float: 'right'}}>
              <Link to="/apply" className='remove-link-style'>I'm a Candidate</Link>
            </Button>
          </Col>
          <Col style={{ paddingLeft: '0px' }}>
            <Button className='big-btn recruiter-btn'style={{ float: 'left'}}>
              <Link to="/view-talent" className='remove-link-style'>I'm a Recruiter</Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  </>);
}

export default Home;
