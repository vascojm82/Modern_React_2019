import { useState, useEffect } from 'react';
import axios from 'axios';

//*** Reusable Hook, witn any component ***
let useResources = (resource) => {
  let [resources, setResources] = useState([]);

  useEffect(() => {
    (async (resource) => {
      let response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};
/************/

export default useResources;
