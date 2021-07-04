import { useState, useMemo, useCallback } from 'react';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const mapUsers = useMemo(() => {
    const m = {};
    for (let i = 0; i < users.length; i++) {
      m[users[i].id] = i;
    }

    return m;
  }, [users]);

  const getUser = useCallback(id => users[mapUsers[id]], [users, mapUsers]);

  return {
    users,
    mapUsers,
    getUser,
    setUsers,
  };
};

export default useUsers;
