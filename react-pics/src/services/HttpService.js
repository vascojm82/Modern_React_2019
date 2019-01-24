import Axios from 'axios';
let baseUrl = "https://api.unsplash.com";

let HttpService = {
  get: async (url, term) => {
    let response = await Axios.get(baseUrl + url, {
      params: {
        query: term
      },
      headers:{
        Authorization: 'Client-ID 6b99e8f1828aa8177b9d1ed907d3e8c68ef18754583ce2da724033fc3317e191'
      }
    });

    return response;
  }
}

export default HttpService;
