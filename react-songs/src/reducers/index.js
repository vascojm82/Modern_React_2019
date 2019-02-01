import { combineReducers } from 'redux';

let songsReducer = () => {
    return[
      { title: 'No Scrubs', duration: '4:05' },
      { title: 'Evenflow', duration: '3:00' },
      { title: 'All Star', duration: '3:15' },
      { title: 'Smells Like Teen Spirits', duration: '3:45' }
    ];
};

let selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }

  return selectedSong;
};

//REDUX store state variables will be the same names as the names the respective reducers map to down below
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
