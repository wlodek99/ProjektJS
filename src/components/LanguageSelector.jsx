import React from 'react';

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  const handleLanguageChange = (e) => {
    const language = e.target.value;
    onLanguageChange(language);
  };

  return (
    <div className="mt-3">
      <h5>Language:</h5>
      <div className="d-flex flex-wrap">
        {['cs', 'de', 'en', 'es', 'fr', 'pt'].map((language) => (
          <div className="form-check me-3" key={language}>
            <input
              className="form-check-input"
              type="radio"
              id={language}
              value={language}
              checked={selectedLanguage === language}
              onChange={handleLanguageChange}
            />
            <label className="form-check-label" htmlFor={language}>
              {language}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
