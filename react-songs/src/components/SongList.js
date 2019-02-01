import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component{
  renderList() {
    return this.props.songs.map((song) => {
      return(
        <div className="item" key={song.title}>
          <div className="right floated content">         {/*Action creators get passed as props automaticallly for us so we can call them whenever needed*/}
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render(){
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

//REDUX state needs to be passed to props manually
let mapStateToProps = (state) => {
  return {
    songs: state.songs       //'song' will be the newly created component prop
  }
}
                                          //Action Creators, get automatically wrapped in a dispatch function by 'connect', so that when an 'action' gets returned by 'selectSong' from it
                                          //being called somewhere else, then the wrapping 'dispatch' function will run sending the returned 'action' to the reducers automatically.
export default connect(mapStateToProps, { selectSong: selectSong })(SongList);  //'SongList' is the Target Component
                       //Maps REDUX state to this component's props
