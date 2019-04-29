import React from 'react';
import useResources from './useResources.js';

let ResourceList = (props) => {
  let resources = useResources(props.resource);

  return (
    <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
  );
}

export default ResourceList;
