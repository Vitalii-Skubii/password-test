import React, { useState } from 'react';
import { getPasswordStrength } from './helpers/getPasswordStrength';
import './App.css';
import { PasswordStrengthIndicator } from './components/PasswordStrengthIndicator/PasswordStrengthIndicator';
import { PasswordInput } from './components/PasswordInput/PasswordInput';
import { PasswordInfo } from './components/PasswordInfo/PasswordInfo';

const App = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const strength = getPasswordStrength(password);

  return (
    <div className="App">
      <PasswordInput
        password={password}
        handlePasswordChange={handlePasswordChange}
      />
      <PasswordStrengthIndicator strength={strength} />
      <PasswordInfo strength={strength} />
    </div>
  );
};

export default App;
