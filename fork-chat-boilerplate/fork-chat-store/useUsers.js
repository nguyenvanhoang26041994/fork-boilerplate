import { useState } from 'react';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  return {
    users,
    setUsers,
  };
};

export default useUsers;
