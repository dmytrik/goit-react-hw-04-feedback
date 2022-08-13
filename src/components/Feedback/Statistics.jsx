import { FeedbackStatBox, FeedbackStat } from './Feedback.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <FeedbackStatBox>
        <FeedbackStat>Good : {good}</FeedbackStat>
        <FeedbackStat>Neutral : {neutral}</FeedbackStat>
        <FeedbackStat>Bad : {bad}</FeedbackStat>
        <FeedbackStat>Total : {total()}</FeedbackStat>
        <FeedbackStat>
          Positive feedback : {positivePercentage()} %
        </FeedbackStat>
      </FeedbackStatBox>
    </>
  );
};

export default Statistics;
