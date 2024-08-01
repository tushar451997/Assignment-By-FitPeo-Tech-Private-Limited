import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Col xs={2} className="text-center">
      <div className="icon-container">
        <i className="fas fa-home" />
      </div>
      <div className="icon-container">
        <i className="fas fa-user" />
      </div>
      <div className="icon-container">
        <i className="fas fa-chart-bar" />
      </div>
      <div className="icon-container">
        <i className="fas fa-cog" />
      </div>
      <div className="icon-container">
        <i className="fas fa-question" />
      </div>
    </Col>
  );
};

export default Sidebar;