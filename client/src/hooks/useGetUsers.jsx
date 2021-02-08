import { useEffect, useState } from 'react';
import Axios from 'axios';

const useGetUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      let data = [];
      try {
        data = await (await Axios.get('http://localhost:9000/api/users')).data;
      } catch (error) {
        console.error(error);
      }
      if (users.length === 0 && data.length !== 0) {
        setUsers(data);
      }
    }
    getUsers();
  }, [users]);
  return [users];
};

export default useGetUsers;
