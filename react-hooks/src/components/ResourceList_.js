import React, { useState, useEffect } from 'react';
import axios from 'axios';

let ResourceList = (props) => {
  let [resources, setResources] = useState([]);

  let fetchResource = async (resource) => {
    let response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  }

  useEffect(() => {     //Runs when component is mounted then every time the component is updated, notice, no endless loops like with 'ComponentDidUpdate' without a sentinel
    fetchResource(props.resource);    //Must put async ops inside another function, that's a rule for useEffect.
  }, [props.resource]);   //If value inside array is the same as before, the callback inside useEffect won't run again.  IF there's no array, endless loop
                          //Empty array, the callback gets run only once.
  return (
    <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
  );
}

export default ResourceList;
