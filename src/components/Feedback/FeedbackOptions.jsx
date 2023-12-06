import React from 'react';

const FeedbackOptions = ({ options }) => {
  return (
    <div>
      {options.map(option => (
        <button key={option.name} onClick={option.leaveFeedback}>
          {option.name}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
