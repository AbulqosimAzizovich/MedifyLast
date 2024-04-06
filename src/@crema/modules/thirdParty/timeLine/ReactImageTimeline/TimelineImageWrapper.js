import React from 'react';
import PropTypes from 'prop-types';
import {StyledTimelineImage} from './index.styled';

const TimelineImageWrapper = ({children}) => {
  return <StyledTimelineImage>{children}</StyledTimelineImage>;
};

export default TimelineImageWrapper;

TimelineImageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
