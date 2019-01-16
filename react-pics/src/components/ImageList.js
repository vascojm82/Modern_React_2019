import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

let ImageList = (props) => {
  return(
    <div className="image-list">
      {
        props.images.map((image) => {
          console.log("id: ",image.id);     //This key/id shows up only in the virtualDOM not on the real DOM
          return(
            <ImageCard key={image.id} image={image} />
          );
        })
      }
    </div>

  );
}

export default ImageList;
