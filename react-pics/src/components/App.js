import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import HttpService from '../services/HttpService';

class App extends React.Component {
  state= { images: [] };  //Set as an empty array so we can use .map & .length without getting an error when the array is empty

  onSearchSubmit = async (term) => {      //So 'this' is binded correctly
    let response = await HttpService.get('/search/photos', term);
    this.setState({
      images: response.data.results
    });
  }

  render(){
    return(
      <div className="ui container" style={{marginTop: 10}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
