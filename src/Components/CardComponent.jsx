import React from 'react';
import { Card, CardBody, CardHeader, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const feedbackData = [
  {
    image: 'https://via.placeholder.com/50',
    name: 'John Doe',
    rating: 4,
    feedback: 'This is a great product! I love it.'
  },
  {
    image: 'https://via.placeholder.com/50',
    name: 'Jane Doe',
    rating: 5,
    feedback: 'This product is amazing! I highly recommend it.'
  },
  {
    image: 'https://via.placeholder.com/50',
    name: 'Bob Smith',
    rating: 3,
    feedback: 'This product is okay. It could be better.'
  }
];

const CardComponent = () => {
  return (
    <Card className="bg-dark text-white">
    <Card.Header className="bg-dark text-white">Customers Feedback</Card.Header>
    <Card.Body>
      {feedbackData.map((feedback, index) => (
        <div key={index} className="feedback-item mb-3">
          <div className="image-container">
            <img src={feedback.image} alt={feedback.name} className="rounded-circle" style={{ width: '40px', height: '40px' }} />
            <span className="ml-2">{feedback.name}</span>
          </div>
          <div className="rating-container">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} size="lg" color={i < feedback.rating ? '#ffd700' : '#ccc'} />
            ))}
          </div>
          <p className="mt-2">{feedback.feedback}</p>
        </div>
      ))}
    </Card.Body>
  </Card>
  );
};

export default CardComponent;