import React from 'react';
import useResources from './useResources';

let UserList = () => {
  let users = useResources('users');

  return(
    <ul>
      {users.map(user => (<li key={user.id}>{user.name}</li>))}
    </ul>
  );
};

export default UserList;
