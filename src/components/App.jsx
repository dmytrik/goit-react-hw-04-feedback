import React, { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import FeedbackStatList from './Feedback/Statistics';
import {
  FeedbackContainer,
  FeedbackTitle,
  StartStatTitle,
  FeedbackStatTitle,
} from './Feedback/Feedback.styled';

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
      <FeedbackContainer>
        <FeedbackTitle>Please leave Feadback</FeedbackTitle>
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
        <FeedbackStatTitle>Statistics</FeedbackStatTitle>
        {total > 0 ? (
          <FeedbackStatList
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <StartStatTitle>No feedback given</StartStatTitle>
        )}
      </FeedbackContainer>
    );
  }
}

export default App;
