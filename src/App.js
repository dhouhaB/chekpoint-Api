import React, { useState,useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [list,setList] = useState([])
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  
  useEffect(()=>{
    setLoading(true)
    setError(false)
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      setList(res.data)
      setLoading(false)
    })
    .catch(()=>setError(true))
  },[])

  console.log(list)
  

  return (
    <React.Fragment>
      <section>
        <h1> Api</h1>
      </section>
      <section>
        {!loading && !error && <UserList users={list} />}
        {loading && !error && <p>Loading...</p>}
        {error && <p>an error occurred</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
