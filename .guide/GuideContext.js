import React from 'react';

export default React.createContext({
  isDark: true,
  toggleIsDark: f => f,
  setIsDark: f => f,
});
