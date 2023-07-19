import React from 'react';

export const PasswordInput = ({ password, handlePasswordChange }) => {
  return (
    <div>
      <h1>Password Strength Indicator</h1>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      />
    </div>
  );
};
