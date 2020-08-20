import React, { useContext, useCallback } from 'react';
import { Switch } from '@@/fork-ui/src/components/core';

import AppContext from '@/AppContext';

const DarkModeToggle = (props) => {
  const { isDark, setIsDark } = useContext(AppContext);

  const onChange = useCallback(e => setIsDark(e.target.checked), [setIsDark]);

  return (
    <Switch checked={isDark} {...props} onChange={onChange} />
  );
};

export default DarkModeToggle;
