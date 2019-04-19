import React from 'react';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class App extends React.Component{
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  }

  render(){
    return(
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />

        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />                {/*Will be assigned dynamically to the context object*/}
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
