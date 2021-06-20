import { useState, useCallback } from 'react';

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState(null);
  const doClose = useCallback(({}) => {
    setIsOpen(false);
    setCode(null);
  }, [setIsOpen, setCode]);
  const doOpen = useCallback((_code, _header) => {
    setIsOpen(true);
    setCode(_code);
  }, [setIsOpen, setCode]);

  return {
    isOpen,
    setIsOpen,
    doClose,
    doOpen,
    code,
  }
};
