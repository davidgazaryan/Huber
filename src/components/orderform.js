import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    services: '',
    order_description: '',
    order_date: '',
    approximate_distance: '',
    order_destination: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/orders/', formData);
      alert('Order placed successfully!');
      // Reset the form after successful submission
      setFormData({
        services: '',
        order_description: '',
        order_date: '',
        approximate_distance: '',
        order_destination: '',
      });
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Services:
        <select name="services" value={formData.services} onChange={handleChange}>
          <option value="airport_pickup">Airport Pickup</option>
          <option value="hourly_ride">Hourly Booking</option>
          <option value="long_distance_trip">Long Distance Trip</option>
        </select>
      </label>
      <label>
        Description:
        <textarea name="order_description" value={formData.order_description} onChange={handleChange} />
      </label>
      <label>
        Date:
        <input type="datetime-local" name="order_date" value={formData.order_date} onChange={handleChange} />
      </label>
      <label>
        Approximate Distance:
        <input type="number" name="approximate_distance" value={formData.approximate_distance} onChange={handleChange} />
      </label>
      <label>
        Destination:
        <input type="text" name="order_destination" value={formData.order_destination} onChange={handleChange} />
      </label>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;