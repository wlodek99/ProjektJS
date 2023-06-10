import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategorySelector from './CategorySelector';
import BlackFlagSelector from './BlackFlagSelector';
import LanguageSelector from './LanguageSelector';
import JokeCard from './JokeCard';
import JokeHistory from './JokeHistory';

const JokeApp = () => {
  const [categories, setCategories] = useState(['Any']);
  const [joke, setJoke] = useState('');
  const [blackFlags, setBlackFlags] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    fetchJoke();
  }, [categories, blackFlags, selectedLanguage]);

  const fetchJoke = async () => {
    try {
      const params = {};

      if (blackFlags.length > 0) {
        const blacklistFlags = blackFlags.join(',');
        params.blacklistFlags = blacklistFlags;
      }

      const queryString = new URLSearchParams(params).toString();
      const categoryParam = categories.join(',');
      const apiUrl = `https://v2.jokeapi.dev/joke/${categoryParam}?lang=${selectedLanguage}&${queryString}`;

      const response = await axios.get(apiUrl);
      const data = response.data;

      if (data.type === 'single') {
        setJoke(data.joke);
      } else {
        setJoke(`${data.setup} ${data.delivery}`);
      }
    } catch (error) {
      console.error('Błąd podczas pobierania żartu:', error);
    }
  };

  const handleCategoryToggle = (value) => {
    if (categories.includes(value)) {
      setCategories(categories.filter((item) => item !== value));
    } else {
      setCategories([...categories, value]);
    }
  };

  const handleBlackFlagToggle = (flag) => {
    if (blackFlags.includes(flag)) {
      setBlackFlags(blackFlags.filter((item) => item !== flag));
    } else {
      setBlackFlags([...blackFlags, flag]);
    }
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Jokes database</h1>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <CategorySelector
                categories={categories}
                onCategoryToggle={handleCategoryToggle}
              />
              <BlackFlagSelector
                blackFlags={blackFlags}
                onBlackFlagToggle={handleBlackFlagToggle}
              />
              <LanguageSelector
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
              />
              <div className="d-grid gap-2">
                <button className="btn btn-primary" onClick={fetchJoke}>
                  Confirm
                </button>
                <button className="btn btn-secondary" onClick={() => setCategories(['Any'])}>
                  Random
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {joke && (
        <div className="row justify-content-center mt-4">
          <div className="col-lg-6">
            <JokeCard joke={joke} />
          </div>
        </div>
      )}
      <div className="row justify-content-center mt-4">
        <div className="col-lg-6">
          <JokeHistory joke={joke} />
        </div>
      </div>
    </div>
  );
};

export default JokeApp;
