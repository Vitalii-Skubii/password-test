import React from 'react';
import { PASSWORD_STRENGTH } from '../../constants/PasswordStrength';
import './PasswordInfo.css'

export const PasswordInfo = ({ strength }) => {
  return (
    <div>
        <div className="strength-text">
        <p>Password Strength:</p>
        {strength === PASSWORD_STRENGTH.easy && (
          <p>{PASSWORD_STRENGTH.easy.toUpperCase()}</p>
        )}
        {strength === PASSWORD_STRENGTH.medium && (
          <p>{PASSWORD_STRENGTH.medium.toUpperCase()}</p>
        )}
        {strength === PASSWORD_STRENGTH.strong && (
          <p>{PASSWORD_STRENGTH.strong.toUpperCase()}</p>
        )}
        {strength === PASSWORD_STRENGTH.short && (
          <p>{PASSWORD_STRENGTH.short.toUpperCase()}</p>
        )}
      </div>
    </div>
  );
};
