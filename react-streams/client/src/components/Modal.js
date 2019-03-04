import React from 'react';
import ReactDOM from 'react-dom';

let Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        asdadsf
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
