import PropTypes from 'prop-types';
import { FeedbackBtnContainer, FeedbackBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const { goodFeedback, neutralFeedback, badFeedback } = options;
  const { good, neutral, bad } = onLeaveFeedback;
  return (
    <FeedbackBtnContainer>
      <FeedbackBtn onClick={goodFeedback}>{good}</FeedbackBtn>
      <FeedbackBtn onClick={neutralFeedback}>{neutral}</FeedbackBtn>
      <FeedbackBtn onClick={badFeedback}>{bad}</FeedbackBtn>
    </FeedbackBtnContainer>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.func).isRequired,
  onLeaveFeedback: PropTypes.objectOf(PropTypes.string).isRequired,
};
