import React from 'react';

import User from './User';
import classes from './UserList.module.css';

const UserList = (props) => {
  return (
    <ul className={classes['User-list']}>
      {props.users.map((user) => (
        <User
          key={user.id}
          name = {user.name}
          username ={user.username}
          email = {user.email}
          address ={user.address}
          phone ={user.phone}
          website ={user.website}
          company = {user.company}
        />
      ))}
    </ul>
  );
};

export default UserList;
