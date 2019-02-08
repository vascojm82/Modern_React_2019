/*** USING MEMOIZE TO FETCH ALL USERS THE MINIMUM AMOUNT OF TIMES (ONCE) ***/

import HttpService from '../../services/HttpService.js';
import _ from 'lodash';

export let fetchPosts =  () => {
  return async (dispatch) => {
    let response = await HttpService.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    });
  }
};

export let fetchUser = (id) => {
  return (dispatch) => {
    _fetchUser(id, dispatch);   //Memoized so it runs only the first time it's called. Any other time after that when it gets called,
  }                             //it will NOT run and will always return the same result as the first time it was invoked, that result
};                              //was memoized so it's kept in memory.

let _fetchUser = _.memoize(async (id, dispatch) => {
  let response = await HttpService.get('/users/' + id);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
});
