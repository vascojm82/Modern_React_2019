import React, { Component } from 'react';
import { connect } from 'react-redux';

let SongDetail = (props) => {
  if(props.song === null)
    return <h4>Select a Song!</h4>
  return(
    <div>
      <h3>Details for:</h3>
      <p><strong>Title:&nbsp;</strong> {props.song.title}</p>
      <p><strong>Duration:&nbsp;</strong> {props.song.duration}</p>
    </div>
  );
}

//REDUX state needs to be passed to props manually
let mapStateToProps = (state) => {
  return {
    //New 'SongDetail'
    //component Prop
    song:               state.selectedSong
                        //REDUX state peoperty name, same name as reducer's name in the 'combineReducers' function
  }
}
                                        //Target Component
export default connect(mapStateToProps)(SongDetail);
                       //Maps REDUX state to this component's props

/** Every time the store gets changed by the 'SongList' component, 'SongDetail' props get automatically updated, when the 'song' prop in 'SongDetail'
    gets updated, this triggers a re-render of the 'SongDetail' component **/
