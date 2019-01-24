import React from 'react';

let VideoDetail = ({ video }) => {  //de-structured the props to just video
  if(!video){
    return <div>Now Loading...</div>;
  }

  let videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return(
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} style={{border: "2px solid #fff"}} title="video player" allowFullScreen />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
