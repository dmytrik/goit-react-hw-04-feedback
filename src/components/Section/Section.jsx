import PropTypes from 'prop-types';

import { SectionTitle, SectionBox } from './Section.styled';
const Section = ({ title = '', children }) => {
  return (
    <SectionBox>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionBox>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
