import React from 'react';

const BlackFlagSelector = ({ blackFlags, onBlackFlagToggle }) => {
  const handleBlackFlagToggle = (flag) => {
    onBlackFlagToggle(flag);
  };

  return (
    <div className="mt-3">
      <h5>BlackFlags:</h5>
      <div className="d-flex flex-wrap">
        {['nsfw', 'religious', 'political', 'racist', 'sexist', 'explicit'].map((flag) => (
          <div className="form-check me-3" key={flag}>
            <input
              className="form-check-input"
              type="checkbox"
              id={flag}
              value={flag}
              checked={blackFlags.includes(flag)}
              onChange={() => handleBlackFlagToggle(flag)}
            />
            <label className="form-check-label" htmlFor={flag}>
              {flag}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlackFlagSelector;
