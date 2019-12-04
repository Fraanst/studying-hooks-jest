import React from 'react';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import PropTypes from 'prop-types';

const InputField = ({
  field,
  form: { errors, setFieldValue, submitCount },
  label,
  caption,
  onChange,
  ...props
}) => {
  const hasError = submitCount > 0 && errors[field.name];
  const handleChange = (event) => {
    setFieldValue(field.name, event.currentTarget.value);
    onChange(event.currentTarget.value);
  };

  return (
    <FormControl
      label={label}
      caption={caption}
      error={hasError && errors[field.name]}
    >
      <Input
        {...field}
        {...props}
        value={field.value !== undefined ? field.value : ''}
        onChange={handleChange}
        error={hasError}
      />
    </FormControl>
  );
};

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
  caption: PropTypes.string,
  onChange: PropTypes.func,
};

InputField.defaultProps = {
  onChange: () => {},
};

export default InputField;
