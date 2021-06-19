import React from 'react';

export default React.createContext({
  isDark: false,
  toggleDark: f => f,
});
