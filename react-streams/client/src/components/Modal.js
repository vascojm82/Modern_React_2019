import React from 'react';
import ReactDOM from 'react-dom';

<<<<<<< HEAD
let Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">
          {props.title}
        </div>
        <div className="content">
          {props.content}
        </div>
        <div className="actions">
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
=======
let Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        asdadsf
      </div>
    </div>,
    document.querySelector("#modal")
>>>>>>> d56a1d4a3b9223d2976399557d2fb89d5f1be8f3
  );
};

export default Modal;
