import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Box from './Box/Box';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalFeedBack = Object.values(this.state).reduce(
      (total, count) => (total += count),
      0
    );
    return totalFeedBack;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedBack = Object.values(this.state).reduce(
      (total, count) => (total += count),
      0
    );
    const goodFeedbackPercent = (good * 100) / totalFeedBack;
    return goodFeedbackPercent.toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <Box>
        <Section title="Please leave Feadback">
          <FeedbackOptions
            options={{
              goodFeedback: this.goodFeedback,
              neutralFeedback: this.neutralFeedback,
              badFeedback: this.badFeedback,
            }}
            onLeaveFeedback={{
              good: 'Good',
              neutral: 'Neutral',
              bad: 'Bad',
            }}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}

export default App;
