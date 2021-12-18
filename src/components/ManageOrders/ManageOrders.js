import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';
import './ManageOrders.css';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      
        const url = `https://murmuring-castle-14767.herokuapp.com/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setLoading(false)
            })
    }, [])

    const handleApproveOrder = (id) => {
        console.log(id);
        const updatedorder = orders.find(order => order._id === id);
        updatedorder.status = 'Shipped';

        
        const url = `https://murmuring-castle-14767.herokuapp.com/approve/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedorder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Shipped Successfully');

                    const remaining = orders.filter(order => order._id !== id);
                    remaining.push(updatedorder);
                    setOrders(remaining);
                }
            })
    }

    const handleCancelOrder = (id) => {
        console.log(id);
        const proceed = window.confirm('Are you sure, you want to cancel the order?')
        if (proceed) {
            const url = `https://murmuring-castle-14767.herokuapp.com/deleteOrder/${id}`
            
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('successfullly canceled!')
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
        }

    }

    return (
        <>
            {!loading ?
                <div className='container border p-2 rounded-3 mt-5 mb-5'>
                    <div id='table-container'>
                        <table>
                            <tr>
                                <th>Email</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Order Date</th>
                                <th>Status</th>
                                <th>Approve</th>
                                <th>Delete</th>
                            </tr>
                            {
                                orders.map(order => <ManageOrder
                                    key={order._id}
                                    order={order}
                                    handleApproveOrder={handleApproveOrder}
                                    handleCancelOrder={handleCancelOrder}
                                ></ManageOrder>)
                            }
                        </table>
                    </div>
                </div>
                :
                <div className='container text-center mt-5'>
                    <Spinner animation="border" variant="info" />
                </div>
            }
        </>
    );
};

export default ManageOrders;