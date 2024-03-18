import React from 'react';
import ReviewForm from '../components/reviewform';
import '../styles/reviews.css';


export const Review = () => {
  const handleSubmit = (formData) => {
    // Send formData to your backend API
    fetch('http://127.0.0.1:8000/api/review/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials:'include',
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Review submitted:', data);
        // Optionally, handle success or display a message to the user
      })
      .catch((error) => {
        console.error('Error submitting review:', error);
        // Optionally, handle errors or display an error message to the user
      });
  };

  return (
    <div>
      <h1>Submit a Review</h1>
      <ReviewForm onSubmit={handleSubmit} />
    </div>
  );
};
