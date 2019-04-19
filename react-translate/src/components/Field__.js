import React from 'react';
import Button2 from './Button2'
import LanguageContext from '../context/LanguageContext';

class Field extends React.Component{
  static contextType = LanguageContext;

  render(){
    let text = this.context === "english"? "Name": "Naam";

    return(
      <div className="ui field">
        <label>{text}</label>
        <input />
        <Button2 />
      </div>
    );
  }
}

export default Field;
