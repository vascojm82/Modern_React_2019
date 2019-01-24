import React from 'react';
import VideoItem from './VideoItem';

let VideoList = (props) => {
  return(
    <div className="ui relaxed divided list">
      {
        props.videos.map((video, index) => {
          return <VideoItem key={index} video={video} onVideoSelect={props.onVideoSelect} />
        })
      }
    </div>
  );
}

export default VideoList;
