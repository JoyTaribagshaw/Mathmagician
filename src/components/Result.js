import React from 'react';
import PropTypes from 'prop-types';

function Result({ value }) {
  return <div className="input">{value}</div>;
}

Result.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Result;
