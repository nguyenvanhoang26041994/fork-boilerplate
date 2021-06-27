import { useState } from 'react';

const useGroups = () => {
  const [groups, setGroups] = useState([]);
  return {
    groups,
    setGroups,
  };
};

export default useGroups;
