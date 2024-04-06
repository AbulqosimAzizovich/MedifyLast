import React from 'react';
import PropTypes from 'prop-types';

const imgWithClick = {cursor: 'pointer'};

const Photo = ({index, onClick, photo, margin, direction, top, left}) => {
  const imgStyle = {margin: margin};
  if (direction === 'column') {
    imgStyle.position = 'absolute';
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = (event) => {
    onClick(event, {photo, index});
  };

  return (
    <img
      style={onClick ? {...imgStyle, ...imgWithClick} : imgStyle}
      {...photo}
      onClick={onClick ? handleClick : null}
      alt='img'
    />
  );
};

export default Photo;

Photo.propTypes = {
  index: PropTypes.number,
  onClick: PropTypes.func,
  photo: PropTypes.object,
  margin: PropTypes.number,
  direction: PropTypes.string,
  top: PropTypes.number,
  left: PropTypes.number,
  selected: PropTypes.bool,
};
