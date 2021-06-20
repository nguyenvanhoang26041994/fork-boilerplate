import { useState, useCallback, useEffect, useRef } from 'react';
const DARK_MODE_KEY = '__DARK_MODE__';

const initIsDark = !!localStorage.getItem(DARK_MODE_KEY);
if (initIsDark) {
  window.document.body.classList.add('dark-mode');
  window.document.body.classList.remove('light-mode');

} else {
  window.document.body.classList.add('light-mode');
  window.document.body.classList.remove('dark-mode');
}

export default () => {
  const [isDark, setDark] = useState(initIsDark);
  const callback = useCallback(([mutation]) => {
    if (mutation.attributeName === 'class') {
      setDark(window.document.body.classList.contains('dark-mode'));
    }
  }, []);
  const mutationObserver = useRef(new MutationObserver(callback));

  useEffect(() => {
    mutationObserver.current.observe(window.document.body, { attributes: true });

    return () => {
      mutationObserver.current.disconnect();
    }
  }, []);

  const toggleDark = useCallback(() => {
    const currentIsDark = window.document.body.classList.contains('dark-mode');

    if (currentIsDark) {
      window.document.body.classList.add('light-mode');
      window.document.body.classList.remove('dark-mode');
      localStorage.removeItem(DARK_MODE_KEY);
      
    } else {
      window.document.body.classList.add('dark-mode');
      window.document.body.classList.remove('light-mode');
      localStorage.setItem(DARK_MODE_KEY, true);
    }
  }, []);

  const toDark = useCallback(() => {
    window.document.body.classList.add('dark-mode');
    window.document.body.classList.remove('light-mode');
    localStorage.setItem(DARK_MODE_KEY, true);
  }, []);

  const toLight = useCallback(() => {
    window.document.body.classList.add('light-mode');
    window.document.body.classList.remove('dark-mode');
    localStorage.removeItem(DARK_MODE_KEY);
  }, []);

  return {
    isDark,
    toggleDark,
    toDark,
    toLight,
  };
};
