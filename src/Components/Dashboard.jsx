import React from 'react';
import { Card, Row, Col, Container, Badge, ProgressBar, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTruck, faTimes, faDollarSign, faArrowUp, faArrowDown, faLocationArrow, faStar, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import BarChart from './BarChart';
import CustomerTable from './CustomerTable';
import CardComponent from './CardComponent';

function App() {
  return (
    <Container fluid style={{ backgroundColor:'black' }} className='m-0 p-0'>

      <Row className="gap-1">
  <Col  className="h-100 d-flex gap-2 mb-0 p-0" >
  <Card  bg="dark">
          <Card.Body >
            <Card.Text style={{ color: 'white', fontSize: '12px', whiteSpace: 'nowrap' }} >
              <Row >
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


        <Card  bg="dark"  >
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


        <Card  bg="dark" >
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


        <Card  bg="dark">
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
  </Col>


<Col className="m-0 p-0">
<Card  bg="dark" >
          <Card.Body className='m-0 p-0 '>
            <Card.Text  style={{ color: 'white', fontSize: '12px', whiteSpace: 'nowrap'}}>
              <Row>
                <Col md={4}>
                  <span style={{ color: 'white' }}>Net Profit</span>
                  <h3 style={{ color: 'white',marginBottom: 0 }}>$ 6759.25</h3>
                  <span style={{ color: 'green' }}><FontAwesomeIcon icon={faArrowDown} /> 3%</span>
                </Col>
                <Col md={8} className="d-flex justify-content-end align-items-end">
                <div className="circular-loader">
  <svg width="90" height="90">
    <circle cx="45" cy="45" r="37.5" fill="none" stroke="#e9ecef" strokeWidth="7.5" />
    <circle cx="45" cy="45" r="37.5" fill="none" stroke="#007bff" strokeWidth="7.5" strokeDasharray="235.5" strokeDashoffset={(235.5 / 100) * (100 - 70)} />
  </svg>
  <div className="center-text">
    <h5 style={{ color: 'white' }}>70% <br />
    <span style={{fontSize:"10px"}}>Goal</span>
    <span style={{fontSize:"10px"}}>Completed</span>
    </h5>
  </div>
</div>

                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
</Col>

      </Row>

<Row className='mt-3'>
<Col>
<Card bg="dark">
          <Card.Body className='m-0 p-0'>
            <BarChart/>
          </Card.Body>
      </Card></Col>

      <Col className='m-0 p-0'>
      <Card bg="dark" text="white" className='m-0 p-0'>
        <Card.Body gap={10} className='m-0 p-0'>
          <Card.Title className="mb-2 d-flex justify-content-between align-items-center m-3">
            <span>
              <FontAwesomeIcon icon={faLocationArrow} size="1x" style={{ backgroundColor: 'lightgreen', borderRadius: 50, padding: 10, marginRight: 5, color: 'red', verticalAlign: 'middle' }} />
             Goals
            </span>
            <FontAwesomeIcon icon={faChevronRight} size="1x" style={{ backgroundColor: 'gray', borderRadius: '50%', padding: 5, color: 'white' }} />
          </Card.Title>
          <Card.Title className="mb-2 d-flex justify-content-between align-items-center m-3">
            <span>
              <FontAwesomeIcon icon={faLocationArrow} size="1x" style={{ backgroundColor: 'lightgreen', borderRadius: 50, padding: 10, marginRight: 5, color: 'red', verticalAlign: 'middle' }} />
             Popular Dishes
            </span>
            <FontAwesomeIcon icon={faChevronRight} size="1x" style={{ backgroundColor: 'gray', borderRadius: '50%', padding: 5, color: 'white' }} />
          </Card.Title>
          <Card.Title className="d-flex justify-content-between align-items-center m-3">
            <span>
              <FontAwesomeIcon icon={faLocationArrow} size="1x" style={{ backgroundColor: 'lightgreen', borderRadius: 50, padding: 10, marginRight: 5, color: 'red', verticalAlign: 'middle' }} />
             Menus
            </span>
            <FontAwesomeIcon icon={faChevronRight} size="1x" style={{ backgroundColor: 'gray', borderRadius: '50%', padding: 5, color: 'white' }} />
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
</Row>

<Row className='mt-3 m-0 p-0' style={{ backgroundColor:'black' }}>
  <Col md={9}>
    <CustomerTable/>
  </Col>
  <Col md={3}>
     <CardComponent/>
  </Col>
</Row>
    </Container>
  );
}

export default App;