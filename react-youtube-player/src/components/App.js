import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import HttpService from '../services/HttpService';

class App extends React.Component{
  state= { videos: [], selectedVideo: null }
  onSearchSubmit = async (query) => {      //So 'this' is binded correctly
    let response = await HttpService.get('/search', query);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[1]
    });
  }
  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    });
  }
  componentDidMount(){
    this.onSearchSubmit('Champions League Anthem');   //To make a default video appear
  }
  render(){
    return(
      <div className="ui container">
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="sixteen wide column" style={{paddingRight: 0}}>
              <SearchBar onFormSubmit={this.onSearchSubmit} />
            </div>
          </div>
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column" style={{padding: 20, background:"#fff"}}>
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
