import React from 'react';
import PropsTypes from 'prop-types';
import {StyledSlideBasicWrapper} from './index.styled.js';

const MediaSlider = ({children}) => {
  return <StyledSlideBasicWrapper>{children}</StyledSlideBasicWrapper>;
};

export default MediaSlider;

MediaSlider.propTypes = {
  children: PropsTypes.node,
};
