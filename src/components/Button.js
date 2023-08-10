import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, className, value }) {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Button;
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
