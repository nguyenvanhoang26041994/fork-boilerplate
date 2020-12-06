import React from 'react';

export default React.createContext({
  isDark: false,
  toggleIsDark: f => f,
  setIsDark: f => f,
});
