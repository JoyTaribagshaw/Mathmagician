import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, value, onClick }) {
  const handleButtonClick = () => {
    onClick(value);
  };

  return (
    <button type="button" className={className} onClick={handleButtonClick}>
      {value}
    </button>
  );
}

export default Button;

Button.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

// function Button({ className, value, onClick }) {
//   return (
//     <button type="button" className={className} onClick={() => onClick(value)}>
//       {value}
//     </button>
//   );
// }
