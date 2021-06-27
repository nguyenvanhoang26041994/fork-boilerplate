import { useState, useCallback } from 'react';

const useChannels = () => {
  const [channels, setChannels] = useState([]);
  const addChannel = useCallback(() => {

  }, [setChannels]);

  const removeChannel = useCallback((id) => {

  }, [setChannels]);

  return {
    channels,
    setChannels,
    addChannel,
    removeChannel,
  };
};

export default useChannels;
