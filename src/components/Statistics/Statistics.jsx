import PropTypes from 'prop-types';
import { FeedbackStatBox, FeedbackStat } from './Statistics.styled';

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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
