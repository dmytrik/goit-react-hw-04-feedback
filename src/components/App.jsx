import React, { useState, useMemo } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Box from './Box/Box';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFeedback = () => {
    setGood(state => state + 1);
  };

  const neutralFeedback = () => {
    setNeutral(state => state + 1);
  };

  const badFeedback = () => {
    setBad(state => state + 1);
  };

  const countTotalFeedback = useMemo(() => {
    return good + neutral + bad;
  }, [good, neutral, bad]);

  const countPositiveFeedbackPercentage = useMemo(() => {
    const goodFeedbackPercent = (good * 100) / countTotalFeedback;
    return Number(goodFeedbackPercent.toFixed());
  }, [good, countTotalFeedback]);

  return (
    <Box>
      <Section title="Please leave Feadback">
        <FeedbackOptions
          options={{
            goodFeedback,
            neutralFeedback,
            badFeedback,
          }}
          onLeaveFeedback={{
            good: 'Good',
            neutral: 'Neutral',
            bad: 'Bad',
          }}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Box>
  );
};

export default App;
