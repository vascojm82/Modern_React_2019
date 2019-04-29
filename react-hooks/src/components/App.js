import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

let App = () => {               //returns array with two elements
  let [resource, setResource] = useState('posts');    //Each hook state value is an individual line
      //Array destructuring             //initial value for this state

  //ie:
  //let [count, setCount] = setState(0);
  //let [color, setColor] = setState("Blue");

  //**Each time 'setResource()' is called the component is re-rendered
  return(
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
}

export default App;
