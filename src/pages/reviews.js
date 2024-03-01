import React from 'react';
import ReviewForm from '../components/reviewform';


const Review = () => {
  const handleSubmit = (formData) => {
    // Send formData to your backend API
    fetch('/api/reviews/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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