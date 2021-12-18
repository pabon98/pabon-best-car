import React from 'react';

const Button = ({ btnClass, name, type, children, ...other }) => {
  return (
    <button type={type || 'button'} className={`btn ${btnClass}`} {...other}>
      {children} {name} 
    </button>
  );
};

export default Button;

/**props
btnClass
name
 */