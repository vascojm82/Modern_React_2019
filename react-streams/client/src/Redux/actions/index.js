import streams from '../../apis/streams.js';
import history from '../../history';
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS ,FETCH_STREAM, EDIT_STREAM, DELETE_STREAM } from './types';

export let signIn = (userId) => {   //No AXIOS async ops so no need to use redux-thunk(dispatch), no promise returned, just plain JS object.
  return{
    type: SIGN_IN,
    payload: userId
  };
}

export let signOut = () => {        //No AXIOS async ops so no need to use redux-thunk(dispatch), no promise returned, just plain JS object.
  return{
    type: SIGN_OUT
  };
}

export let createStream = (formValues) => {
  return async (dispatch, getState) => {
    let { userId } = getState().auth;
    let response = await streams.post('/streams', { ...formValues, userId });
    dispatch({
      type: CREATE_STREAM,
      payload: response.data
    });
    history.push('/');
  }
}

export let fetchStreams = () => {
  return async (dispatch) => {
    let response = await streams.get('/streams');

    dispatch({
      type: FETCH_STREAMS,
      payload: response.data
    });
  }
}

export let fetchStream = (id) => {
  return async (dispatch) => {
    let response = await streams.get(`/streams/${id}`);

    dispatch({
      type: FETCH_STREAM,
      payload: response.data
    });
  }
}

export let editStream = (id, formValues) => {
  return async (dispatch) => {
    let response = await streams.put(`/streams/${id}`, formValues);

    dispatch({
      type: EDIT_STREAM,
      payload: response.data
    });
  }
}

export let deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);

    dispatch({
      type: DELETE_STREAM,
      payload: id
    });
  }
}
