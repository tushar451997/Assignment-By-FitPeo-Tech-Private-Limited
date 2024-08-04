import React from 'react';
import { Card, Row, Col, Container, Badge, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTruck, faTimes, faDollarSign, faArrowUp, faArrowDown, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import BarChart from './BarChart';

function App() {
  return (
    <Container fluid style={{ border: "1px solid red" }} className='m-0 p-0'>

      <Row className="gap-2">
        <Card  bg="dark" style={{  maxWidth: '150px' }}>
          <Card.Body>
            <Card.Text style={{ color: 'white', fontSize: '12px', whiteSpace: 'nowrap' }} >
              <Row>
                <Col md={4}>
                  <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'green', backgroundColor: 'white', padding: '5px', borderRadius: '5px' }} />
                  <br />
                  <span style={{ color: 'white' }}>Total Orders</span>
                  <h3 style={{ color: 'white' }}>75</h3>
                </Col>
                <Col md={8} className="d-flex justify-content-end align-items-end">
                  <span style={{ color: 'green' }}>
                    <FontAwesomeIcon icon={faArrowUp} /> 3%
                  </span>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>


        <Card  bg="dark" style={{  maxWidth: '150px' }} >
          <Card.Body>
            <Card.Text style={{ color: 'white', fontSize: '12px', whiteSpace: 'nowrap' }}>
              <Row>
                <Col md={4}>
                  <FontAwesomeIcon icon={faTruck} style={{ color: 'blue', backgroundColor: 'white', padding: '5px', borderRadius: '5px' }} />
                  <br />
                  <span style={{ color: 'white' }}>Total Deliverred</span>
                  <h3 style={{ color: 'white' }}>70</h3>
                </Col>
                <Col md={8} className="d-flex justify-content-end align-items-end">
                  <span style={{ color: 'red' }}>
                    <FontAwesomeIcon icon={faArrowDown} /> 3%
                  </span>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>


        <Card  bg="dark" style={{  maxWidth: '150px' }}>
          <Card.Body>
            <Card.Text style={{ color: 'white', fontSize: '12px', whiteSpace: 'nowrap' }}>
              <Row>
                <Col md={4}>
                  <FontAwesomeIcon icon={faTimes} style={{ color: 'orange', backgroundColor: 'white', padding: '5px', borderRadius: '5px' }} />
                  <br />
                  <span style={{ color: 'white' }}>Total Cancellred</span>
                  <h3 style={{ color: 'white' }}>70</h3>
                </Col>
                <Col md={8} className="d-flex justify-content-end align-items-end">
                  <span style={{ color: 'green' }}>
                    <FontAwesomeIcon icon={faArrowUp} /> 3%
                  </span>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>


        <Card  bg="dark" style={{  maxWidth: '150px' }}>
          <Card.Body>
            <Card.Text style={{ color: 'white', fontSize: '12px', whiteSpace: 'nowrap' }}>
              <Row>
                <Col md={4}>
                  <FontAwesomeIcon icon={faDollarSign} style={{ color: 'purple', backgroundColor: 'white', padding: '5px', borderRadius: '5px' }} />
                  <br />
                  <span style={{ color: 'white' }}>Total Revenue</span>
                  <h3 style={{ color: 'white' }}>70</h3>
                </Col>
                <Col md={8} className="d-flex justify-content-end align-items-end">
                  <span style={{ color: 'red' }}>
                    <FontAwesomeIcon icon={faArrowDown} /> 3%
                  </span>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>


        <Card  bg="dark" style={{ maxWidth: '500px' }}>
          <Card.Body>
            <Card.Text style={{ color: 'white', fontSize: '12px', whiteSpace: 'nowrap' }}>
              <Row>
                <Col md={4}>
                  <span style={{ color: 'white' }}>Net Profit</span>
                  <h3 style={{ color: 'white' }}>$ 6759.25</h3>
                  <span style={{ color: 'green' }}><FontAwesomeIcon icon={faArrowDown} /> 3%</span>
                </Col>
                <Col md={8} className="d-flex justify-content-end align-items-end">
                <div className="circular-loader">
      <svg width="120" height="120">
        <circle cx="60" cy="60" r="50" fill="none" stroke="#e9ecef" strokeWidth="10" />
        <circle cx="60" cy="60" r="50" fill="none" stroke="#007bff" strokeWidth="10" strokeDasharray="314" strokeDashoffset={(314 / 100) * (100 - 80)} />
      </svg>
      <div className="center-text">
        <h5 style={{ color: 'white' }}>70% <br />
        <span style={{fontSize:"10px"}}>Goal Completed</span>
        </h5>
        
      </div>
    </div>

                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>

      </Row>

<Row className='mt-3'>
<Col>
<Card bg="dark">
          <Card.Body className='m-0 p-0'>
            <BarChart/>
          </Card.Body>
      </Card></Col>

<Col style={{border:'1px solid black',gap:'100px'}}>
<Card bg="dark" text="white" style={{border:'1px solid black',gap:'100px'}}>
  <Card.Body gap={10}>
    <Card.Title className="mb-2 d-flex align-items-center m-3">
      <FontAwesomeIcon icon={faLocationArrow} size="2x" style={{ backgroundColor: 'lightred', borderRadius: 50, padding: 10, marginRight: 5, color: 'red' }} />
      Location
    </Card.Title>
    <Card.Title className="mb-2 d-flex align-items-center m-3">
      <FontAwesomeIcon icon={faLocationArrow} size="2x" style={{ backgroundColor: 'lightgreen', borderRadius: 50, padding: 10, marginRight: 5, color: 'green' }} />
      Location
    </Card.Title>
    <Card.Title className="mb-2 d-flex align-items-center m-3">
      <FontAwesomeIcon icon={faLocationArrow} size="2x" style={{ backgroundColor: 'lightblue', borderRadius: 50, padding: 10, marginRight: 5, color: 'blue' }} />
      Location
    </Card.Title>
  </Card.Body>
</Card>
</Col>
</Row>
    </Container>
  );
}

export default App;