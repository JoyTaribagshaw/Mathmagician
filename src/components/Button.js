import React from 'react';
import PropTypes from 'prop-types';

function Button({ value, className }) {
  return <button type="button" className={className}>{value}</button>;
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
