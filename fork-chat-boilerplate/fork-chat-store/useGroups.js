import { useState, useMemo, useCallback } from 'react';

const useGroups = () => {
  const [groups, setGroups] = useState([]);
  const mapGroups = useMemo(() => {
    const m = {};
    for (let i = 0; i < groups.length; i++) {
      m[groups[i].id] = i;
    }

    return m;
  }, [groups]);

  const getGroup = useCallback(id => groups[mapGroups[id]], [groups, mapGroups]);

  return {
    groups,
    mapGroups,
    getGroup,
    setGroups,
  };
};

export default useGroups;
