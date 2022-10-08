import PropTypes from 'prop-types';
import { Notify } from './Notification.styled';

const Notification = ({ message }) => {
  return <Notify>{message}</Notify>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
