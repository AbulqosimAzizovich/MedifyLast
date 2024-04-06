import React from 'react';
import {connect} from 'react-redux';
import {actions as appActions} from './reducer';

import {SketchPicker} from 'react-color';
import PropTypes from 'prop-types';

const WithRedux = ({color, onChangeColor}) => {
  return <SketchPicker color={color} onChangeComplete={onChangeColor} />;
};

WithRedux.propTypes = {
  color: PropTypes.string,
  onChangeColor: PropTypes.func,
};

const mapStateToProps = (state) => ({
  color: state.color,
});

const mapDispatchToProps = {
  onChangeColor: appActions.changeColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(WithRedux);
