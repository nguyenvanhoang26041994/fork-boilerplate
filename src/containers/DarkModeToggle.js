import React, { useContext, useCallback } from 'react';
import { Switch, Button } from '@@/fork-ui/src/components/core';
import { Moon, Sun } from '@@/fork-ui/src/components/icons';

import AppContext from '@/AppContext';

const DarkModeToggle = (props) => {
  const { isDark, setIsDark } = useContext(AppContext);

  return isDark
    ? <Button primary circle icon={<Sun />} onClick={() => setIsDark(false)} />
    : <Button primary circle icon={<Moon />} onClick={() => setIsDark(true)} />;
};

export default DarkModeToggle;
