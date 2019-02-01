//Action Creator
export let selectSong = (song) => {
  //Return an action
  return{
    type: 'SONG_SELECTED',
    payload: song
  }
};
