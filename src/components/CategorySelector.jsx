import React from 'react';

const CategorySelector = ({ categories, onCategoryToggle }) => {
  const handleCategoryToggle = (value) => {
    onCategoryToggle(value);
  };

  return (
    <div className="mb-3">
      <label className="form-label">Categories:</label>
      <div className="d-flex flex-wrap">
        {['Any', 'Programming', 'Dark', 'Pun', 'Spooky'].map((category) => (
          <div className="form-check me-3" key={category}>
            <input
              className="form-check-input"
              type="checkbox"
              id={category}
              value={category}
              checked={categories.includes(category)}
              onChange={() => handleCategoryToggle(category)}
            />
            <label className="form-check-label" htmlFor={category}>
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
