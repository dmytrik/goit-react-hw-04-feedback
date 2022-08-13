import { FeedbackBtnContainer, FeedbackBtn } from './Feedback.styled';

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
