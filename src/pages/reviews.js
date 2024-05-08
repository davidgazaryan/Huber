import React from 'react';
import ReviewForm from '../components/reviewform';
import '../styles/reviews.css';
import { useState,useEffect } from 'react';


export const Review = () => {

  const [authToken, setAuthToken] = useState('');

  // Function to extract the auth token from cookies
  const getAuthTokenFromCookie = () => {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === 'authtoken') {
        return value;
      }
    }
    return null;
  };

  // Get auth token on component mount
  useEffect(() => {
    const token = getAuthTokenFromCookie();
    if (token) {
      setAuthToken(token);
    }
  }, []);


  const handleSubmit = (formData) => {
    // Send formData to your backend API
    fetch('https://localhost:8000/api/review/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ae620423c37e510d692c5b901b4a82bec9214027`
      },
      mode:'cors',
      credentials:'include',
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Review submitted:', data);
        // Optionally, handle success or display a message to the user
      })
      .catch((error) => {
        console.error('Error submitting reviews try again:', error);
        // Optionally, handle errors or display an error message to the user
      });
  };

  return (
    <div className='main-review'>
      <h1>Leave A Review</h1>
      <ReviewForm onSubmit={handleSubmit} />
    </div>
  );
};
