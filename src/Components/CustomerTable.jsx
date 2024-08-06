import React from 'react';
import { Card, Table } from 'react-bootstrap';

import './CustomerTable.css';

const data = [
  {
    image: 'https://via.placeholder.com/50',
    name: 'John Doe',
    orderNo: '12345',
    amount: '$100.00',
    status: 'Pending',
  },
  {
    image: 'https://via.placeholder.com/50',
    name: 'Jane Doe',
    orderNo: '67890',
    amount: '$200.00',
    status: 'Shipped',
  },
  {
    image: 'https://via.placeholder.com/50',
    name: 'Bob Smith',
    orderNo: '34567',
    amount: '$50.00',
    status: 'Delivered',
  },
  {
    image: 'https://via.placeholder.com/50',
    name: 'Alice Johnson',
    orderNo: '90123',
    amount: '$150.00',
    status: 'Pending',
  },
  {
    image: 'https://via.placeholder.com/50',
    name: 'Mike Brown',
    orderNo: '45678',
    amount: '$250.00',
    status: 'Shipped',
  },
];

const CustomerTable = () => {
  return (
    <Card bg="dark" text="white" className='m-0 p-0 h-70'>
      <Card.Body>
      <Card.Header className="bg-dark text-white">Customer Orders</Card.Header>
        <Table  bordered hover variant="dark" className='m-0 p-0'>
          <thead>
            <tr>
              <th className="col-md-2">Customer</th>
              <th className="col-md-2">Order No</th>
              <th className="col-md-2">Amount</th>
              <th className="col-md-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="col-md-2">
                  <img src={item.image} alt={item.name} className="customer-image" />
                  <span>{item.name}</span>
                </td>
                <td className="col-md-2">{item.orderNo}</td>
                <td className="col-md-2">{item.amount}</td>
                <td className="col-md-2">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default CustomerTable;