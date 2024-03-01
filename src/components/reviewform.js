import React, { useState } from 'react';
import DjangoCSRFToken from 'django-react-csrftoken';

const ReviewForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    rating: 1, // Default rating value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Optionally, you can clear the form fields after submission
    setFormData({ title: '', body: '', rating: 1 });
  };

  return (
    <form onSubmit={handleSubmit}>
        <DjangoCSRFToken/>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        >
          {/* Generate options for ratings 1 to 5 */}
          {[...Array(5).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
