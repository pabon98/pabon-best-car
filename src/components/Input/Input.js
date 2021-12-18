import React from 'react';

const Input = (props) => {
  const {
    isFloatingLabelInput,
    label,
    name,
    type,
    value,
    placeholder,
    errorMessage,
    ...other
  } = props;
  return (
    <>
      <div className={`${isFloatingLabelInput && 'form-floating'} mb-3`}>
        {!isFloatingLabelInput && <Label label={label} name={name} />}
        <input
          type={type || 'text'}
          className="form-control"
          name={name}
          defaultValue={value}
          placeholder={placeholder}
          {...other}
        />
        {isFloatingLabelInput && <Label label={label} name={name} />}
        <span className="text-danger">{errorMessage}</span>
      </div>
    </>
  );
};

export default Input;

const Label = ({ name, label }) => {
  return (
    <label htmlFor={name} className="form-label">
      {label}
    </label>
  );
};

/* props
isFloatingLabelInput
label
name
value
type
placeholder
errorMessage
 */