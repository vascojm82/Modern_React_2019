import React from 'react';

let Comment = (props) => {    //ES6 Syntax, have to pass the props object in
  return(
    <div className="comment">
      <a href="/" className="avatar">
        {props.avatar}
      </a>
      <div className="content">
        <a href="/" className="author">{props.author}</a>  {/*ES6 Syntax, no need to use 'this.props' here because the 'props' object is passed in above*/}
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default Comment;
