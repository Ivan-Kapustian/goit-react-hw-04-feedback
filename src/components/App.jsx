import React, { useState } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Feedback/Section';
import Statistics from './Feedback/Statistics';
import Notification from './Feedback/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  });

  const { good, neutral, bad, total } = feedback;

  const options = [
    {
      name: 'Good',
      leaveFeedback: () =>
        setFeedback({ ...feedback, good: good + 1, total: total + 1 }),
    },
    {
      name: 'Neutral',
      leaveFeedback: () =>
        setFeedback({ ...feedback, neutral: neutral + 1, total: total + 1 }),
    },
    {
      name: 'Bad',
      leaveFeedback: () =>
        setFeedback({ ...feedback, bad: bad + 1, total: total + 1 }),
    },
  ];

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const percentage = total > 0 ? (good / total) * 100 : 0;
    return Math.round(percentage);
  };

  const totalFeedback = countTotalFeedback();
  const isFeedbackGiven = totalFeedback > 0;

  return (
    <div>
      {isFeedbackGiven ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}

      <Section title="Please leave feedback">
        <FeedbackOptions options={options} />
      </Section>
    </div>
  );
};

export default App;
