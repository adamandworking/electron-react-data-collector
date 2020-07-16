import React from 'react';
import './App.css';
import { Button, Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import BarOfProgress from './component/BarOfProgress'

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="my-5">
              <BarOfProgress progress={23} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-5">
            <Image src="./image/square.jpg" thumbnail />
          </Col>
          <Col>
          <Row>
              <Col>
                <h2> Test Instruction</h2>
                <ListGroup variant="flush">
                  <ListGroup.Item>1. Wash your hand</ListGroup.Item>
                  <ListGroup.Item>2. Be gentle to everyone</ListGroup.Item>
                  <ListGroup.Item>3. Say goodbye before you leave</ListGroup.Item>
                  <ListGroup.Item>4. Enjoy!</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row className="justify-content-around arrr">
      
                <Button size="lg">　　　Yes　　　</Button>  {/*need to make it to be no space*/}
                <Button size="lg">　　　No　　　</Button>
      
            </Row>     
          </Col>
        </Row>
        <Row>
        <Col>
        <div className="my-5">
        <h5>Media Heading</h5>
          <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
          ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
          tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
          Donec lacinia congue felis in faucibus.
          </p>
        </div>
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App;
