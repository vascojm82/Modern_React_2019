/*** USING ACTIONS WITHIN ACTIONS METHODOLOGY WITH LODASH TO FETCH ALL USERS THE MINIMUM AMOUNT OF TIMES (ONCE) ***/

import HttpService from '../../services/HttpService.js';
import _ from 'lodash';

export let fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());   //Here we're dispatching the function returned by 'fetchPosts'
    let posts = getState().posts;   //'getState' is a Redux function to get the state from the store
    let userIds = _.map(posts, 'userId');   //lodash version of 'map', iterate through all posts and get userId, returns array with e/a post's userId, there will be repeated ids
    userIds = _.uniq(userIds);    //return an array of each id that repeats, each Id only once

    userIds.forEach((id) => {       //With this methodology each user will be fetched ONLY once
      dispatch(fetchUser(id));      //Here we're dispatching the function returned by 'fetchUser'
    });

    /*** ALTERNTE LODASH SYNTAX TO DO THE SAME ***/
    // _.chain(getState().posts)   //list of posts gets passed to '.map' automatically
    //   .map('userId')            //then just need to provide '.map' with all other parameters after the posts list
    //   .uniq()                   //list of repeating 'userIds' gets passed to '.uniq' automatically
    //   .forEach((id) => {
    //     dispatch(fetchUser(id));      //Here we're dispatching the function returned by 'fetchUser'
    //   })
    //   .value()       //execute all chain steps above
    /*********************************************/
  }
}

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
  return async (dispatch) => {
    let response = await HttpService.get('/users/' + id);
    dispatch({
      type: 'FETCH_USER',
      payload: response.data
    });
  }
};
