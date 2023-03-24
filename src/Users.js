import React from 'react';
import { useQuery } from 'react-query';
import { fetchUsers } from './api';

const Users = () => {
  const { data, isLoading, error } = useQuery('users', fetchUsers);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default Users;