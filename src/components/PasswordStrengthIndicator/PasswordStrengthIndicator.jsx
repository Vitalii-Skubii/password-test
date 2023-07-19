import React from 'react';
import './PasswordStrengthIndicator.css';

export const PasswordStrengthIndicator = ({ strength}) => {
 
  return (
    <div className="strength-section">
      <div
        className={`strength-box ${
          strength === 'easy' || strength === 'short'
            ? 'red'
            : strength === 'medium'
            ? 'yellow'
            : strength === 'strong'
            ? 'green'
            : ''
        }`}
      ></div>
      <div
        className={`strength-box ${
          strength === 'short'
            ? 'red'
            : strength === 'medium'
            ? 'yellow'
            : strength === 'strong'
            ? 'green'
            : ''
        }`}
      ></div>
      <div
        className={`strength-box ${
          strength === 'short' ? 'red' : strength === 'strong' ? 'green' : ''
        }`}
      ></div>
    </div>
  );
};
