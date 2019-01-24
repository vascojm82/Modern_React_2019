import React from 'react';
import './VideoItem.css';

let VideoItem = (props) => {
  return(
    <div className="ui container video-item item" onClick={() => { props.onVideoSelect(props.video) }}>
      <div className="ui stackable grid">
        <div className="ui row">
          <div className="eight wide column">
            <img className="ui image" style={{margin: "auto", minHeight: 100, marginTop: 15}} src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
          </div>
          <div className="eight wide column" style={{padding: 20, background:"#fff"}}>
            <div className="content">
              <div className="header" style={{textAlign: "center"}}>
                {props.video.snippet.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
