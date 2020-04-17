import { createContext } from 'react';

export default createContext({
  isDark: true,
  setIsDark: f => f,
});
