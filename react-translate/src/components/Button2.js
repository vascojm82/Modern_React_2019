import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Button2 extends React.Component{
  //An instance of a variable before the class itself is instantiated like in JAVA.
  static contextType = LanguageContext;
         //Context Object needs to have this name specifically, 'contextType'

  render(){     //'this.context' points to the context object 'contextType'
    console.log(this.context);
    const text = this.context === "english"? "Submit": "Voorleggen";
    return <div><br /><br/ ><button className="ui button primary">{text}</button></div>;
  }
}

export default Button2;
