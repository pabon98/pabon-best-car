import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Order = (props) => {
    const { orderId, image, title, description, price, status, date } = props.car;
    const { handleCancelOrder } = props;

    return (
        <div className='mb-5'>
            <Col>
                <Card className='p-0 shadow-sm'>
                    <Card.Img variant="top" className='img-fluid' src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text><small >{description.slice(0, 200)}</small></Card.Text>
                        <Card.Text><small >Price: {price}</small></Card.Text>
                        <Card.Text><small className='text-dark'>Order Date: {date}</small></Card.Text>
                        <Card.Text><small className='text-dark'>Order Status: <b> <span className={status === 'pending' ? 'text-danger' : 'text-success'}>{status}</span></b></small></Card.Text>

                        <Button onClick={() => handleCancelOrder(orderId)} variant='outline-danger' className='w-100'>Cancel Order</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Order;