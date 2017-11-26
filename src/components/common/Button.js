import React from 'react';
import PropTypes from 'prop-types';
import {FlatButton} from 'material-ui';

const Button = props => {


  return (
    <FlatButton
      label={props.label}
      primary={props.primary}
    onClick={props.onClick}
    />

  );
};

Button.propTypes = {
  primary:PropTypes.bool,

};
Button.defaultProps = {
  primary:true
};

export default Button;
