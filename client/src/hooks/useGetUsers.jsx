import { useEffect, useState } from 'react';
import Axios from 'axios';

const useGetUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    async function getUsers() {
      try {
        return await Axios.get('http://localhost:9000/api/users');
      } catch (error) {
        console.log(error);
      }
    }

    let data = [];

    try {
      const users = getUsers();
      data = [...users.data];
    } catch (error) {
      console.error(error);
    }

    if (users.length === 0 && data.length !== 0) {
      setUsers(data);
    }
  }, [users]);
  return [users];
};

export default useGetUsers;
