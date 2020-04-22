import { createContext } from 'react';

export default createContext({
  isDark: false,
  setIsDark: f => f,
});
