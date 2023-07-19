import { PASSWORD_STRENGTH } from '../constants/PasswordStrength';

export const getPasswordStrength = (password) => {
  if (password.length >= 8) {
    if (
      /\d/.test(password) &&
      /[a-zA-Z]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      return PASSWORD_STRENGTH.strong; // Strong password (contains letters, symbols, and numbers)
    } else if (
      (/\d/.test(password) && /[a-zA-Z]/.test(password)) ||
      (/\d/.test(password) && /[!@#$%^&*]/.test(password)) ||
      (/[a-zA-Z]/.test(password) && /[!@#$%^&*]/.test(password))
    ) {
      return PASSWORD_STRENGTH.medium; // Medium password (combinations of two types)
    } else {
      return PASSWORD_STRENGTH.easy; // Easy password (contains only one type)
    }
  } else if (password.length > 0 && password.length < 8) {
    return PASSWORD_STRENGTH.short; // Password is less than 8 characters
  }
};
