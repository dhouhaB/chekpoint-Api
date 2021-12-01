import React from 'react';

import classes from './User.module.css';

const User = (props) => {
  return (
    <li className={classes.user}>
      
      <h2>{props.name}</h2>
      <h3>{props.username}</h3>
      <h3>{props.email}</h3>
      <p>{`Address : ${props.address.street}, ${props.address.suite}, ${props.address.city}`}</p>
      <p>{props.phone}</p>
      <p>{props.website}</p>
      <p>{`Company : ${props.company.name}, ${props.company.catchPhrase}`}</p>

    </li>
  );
};

export default User;
