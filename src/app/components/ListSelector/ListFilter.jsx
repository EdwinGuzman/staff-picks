// Library import
import React from 'react';
import PropTypes from 'prop-types';
import utils from '../../utils/utils';

const ListFilter = ({ fieldsetProps, handleChange }) => {
  const selectName = fieldsetProps.fieldsetName;
  const selectId = `${selectName}-input`;
  let defaultValue;
  const optionList = (fieldsetProps.options.length) ? fieldsetProps.options.map(
    opt => <option value={opt.value} key={opt.value}>{opt.name}</option>
  ) : null;

  if (fieldsetProps.currentValue) {
    defaultValue = fieldsetProps.currentValue;
  } else {
    defaultValue = (fieldsetProps.options.length && fieldsetProps.options[0].value) ?
      fieldsetProps.options[0].value : '';
  }

  return (
    <fieldset>
      <label htmlFor={selectId}>{`Select ${utils.capitalize(selectName)}`}</label>
      <select
        id={selectId}
        name={selectName}
        value={defaultValue}
        onChange={handleChange}
      >
        {optionList}
      </select>
    </fieldset>
  );
};

ListFilter.propTypes = {
  fieldsetProps: PropTypes.object,
  handleChange: PropTypes.func,
};

export default ListFilter;
