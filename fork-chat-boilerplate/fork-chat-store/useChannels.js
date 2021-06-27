import { useState, useCallback, useMemo } from 'react';

const useChannels = () => {
  const [channels, setChannels] = useState([]);
  const mapChannels = useMemo(() => {
    const m = {};
    for (let i = 0; i < channels.length; i++) {
      m[channels[i].id] = i;
    }

    return m;
  }, [channels]);

  const getChannel = useCallback(id => channels[mapChannels[id]], [channels, mapChannels]);

  const addChannel = useCallback(() => {

  }, [setChannels]);

  const removeChannel = useCallback((id) => {

  }, [setChannels]);

  return {
    channels,
    mapChannels,
    getChannel,
    setChannels,
    addChannel,
    removeChannel,
  };
};

export default useChannels;
