import { SIGN_IN, SIGN_OUT } from './types';

export let signIn = (userId) => {
  return{
    type: SIGN_IN,
    payload: userId
  };
};

export let signOut = () => {
  return{
    type: SIGN_OUT
  };
};
