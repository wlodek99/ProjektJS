import React, { useState } from 'react';

const JokeHistory = ({ joke }) => {
  const [jokeHistory, setJokeHistory] = useState([]);

  const addToHistory = () => {
    setJokeHistory((prevHistory) => [...prevHistory, joke]);
  };

  return (
    <div className="card">
      <div className="card-body">
        <button className="btn btn-primary" onClick={addToHistory}>
          Add to history
        </button>
        <h5> </h5>
        <h5>History:</h5>
        {jokeHistory.map((joke, index) => (
          <p key={index}>{joke}</p>
        ))}
      </div>
    </div>
  );
};

export default JokeHistory;
