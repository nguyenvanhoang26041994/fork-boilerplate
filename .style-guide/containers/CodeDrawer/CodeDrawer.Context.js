import React from 'react';

export default React.createContext({
  isOpen: false,
  doClose: f => f,
  doOpen: f => f,
  code: null,
  header: null,
});
