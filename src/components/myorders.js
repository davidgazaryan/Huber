import React from "react";
import { useState,useEffect } from "react";

export const MyOrders = () => {
    const [orderlist, setOrderList] = useState([]);
    const [orderId, setOrderId] = useState(null);

    useEffect (() =>{
        const fetchOrders = async () => {
            try {
                const response = await fetch('https://localhost:8000/api/orders'); // Adjust the endpoint as per your backend API
                if (!response.ok) {
                    throw new Error('Failed to fetch orders');
                }
                const data = await response.json();
                setOrderList(data); // Update orderlist state with fetched orders
            } catch (error) {
                console.error('Error fetching orders:', error.message);
            }
        };
    
        // Call fetchOrders when component mounts
        fetchOrders();
    },[])

    const handleSubmit = () => {
        fetch(`https://localhost:8000/api/update_order/${orderId}/`, {
        method: 'POST',  // or 'POST' depending on your update method
        headers: {
        'Content-Type': 'application/json',
        // Other headers as needed (e.g., authorization token)
        },
        body: JSON.stringify({ /* Updated order data */ }),
    })
        .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update order');
        }
        return response.json();
        })
        .then(data => {
        console.log('Order updated successfully:', data);
        })
        .catch(error => {
        console.error('Error updating order:', error);
        })};


        return(
            <div>
                {/* {for i in range len of order list , make buttons } */}
                <button onClick={handleSubmit}>Update order</button>
            </div>
        )

}