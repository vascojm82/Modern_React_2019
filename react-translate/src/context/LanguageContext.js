import React from 'react';

let Context = React.createContext('english');

export class LanguageStore extends React.Component{
  state = { language: 'english' };

  onLanguageChange = (selectedLanguage) => {
    this.setState({
      language: selectedLanguage
    });
  }

  render(){
    return(
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;

//** Two things we can import from this file somewhere else: **
//import LanguageContext (the default export)
//import { LanguageStore }
