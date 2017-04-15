import React from 'react';
import PropTypes from 'prop-types';
import formatCaptions from './actions';

const Table = (props) => {
  return (
    <div className="card-panel">
      <h5>{props.category}</h5>
      {props.parameters.map(parameter =>
        <div className="b-parameter" key={parameter.Caption}>
          <div className="b-parameter__caption">{formatCaptions(parameter.Caption)}</div>
          <div className="b-parameter__value">{parameter.Values.Value}</div>
        </div>,
      )}
    </div>
  );
};

Table.propTypes = {
  category: PropTypes.string.isRequired,
  parameters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
