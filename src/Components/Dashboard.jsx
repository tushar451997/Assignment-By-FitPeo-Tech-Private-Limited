import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTruck, faTimes, faDollarSign, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="container">
      <Col>
      <Row gutters={10}>
        <Col md={3}>
          <Card style={{ backgroundColor: 'black', maxWidth: '150px' }}>
            <Card.Body>
              <Card.Text style={{ color: 'white', fontSize: '12px', whiteSpace: 'nowrap' }}>
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
        </Col>
        <Col md={3}>
          <Card style={{ backgroundColor: 'black', maxWidth: '150px' }}>
            <Card.Body>
              <Card.Text style={{ color: 'white', fontSize: '12px', whiteSpace: 'nowrap' }}>
                <Row>
                  <Col md={4}>
                    <FontAwesomeIcon icon={faTruck} style={{ color: 'blue', backgroundColor: 'white', padding: '5px', borderRadius: '5px' }} />
                    <br />
                    <span style={{ color: 'white' }}>Total Delivered</span>
                    <h3 style={{ color: 'white' }}>70</h3>
                  </Col>
                  <Col md={8} className="d-flex justify-content-end align-items-end">
                    <span style={{ color: 'ed' }}>
                      <FontAwesomeIcon icon={faArrowDown} /> 3%
                    </span>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ backgroundColor: 'black', maxWidth: '150px' }}>
            <Card.Body>
              <Card.Text style={{ color: 'white', fontSize: '12px', whiteSpace: 'nowrap' }}>
                <Row>
                  <Col md={4}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: 'orange', backgroundColor: 'white', padding: '5px', borderRadius: '5px' }} />
                    <br />
                    <span style={{ color: 'white' }}>Total Cancelled</span>
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
        </Col>
        <Col md={3}>
          <Card style={{ backgroundColor: 'black', maxWidth: '150px' }}>
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
                    <span style={{ color: 'ed' }}>
                      <FontAwesomeIcon icon={faArrowDown} /> 3%
                    </span>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Col>
    </div>
  );
}

export default App;