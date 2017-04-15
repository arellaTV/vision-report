import React from 'react';
import PropTypes from 'prop-types';

const Table = (props) => {
  console.log(true);
  return (
    <div>
      <h3>{props.category}</h3>
      {props.parameters.map(parameter =>
        <p key={parameter.Caption}>{parameter.Caption} {parameter.Values.Value}</p>,
      )}
    </div>
  );
};

Table.propTypes = {
  category: PropTypes.string.isRequired,
  parameters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
