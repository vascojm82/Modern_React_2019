import Axios from 'axios';
let baseUrl = "https://api.unsplash.com";

let HttpService = {
  get: async (url, term) => {
    let response = await Axios.get(baseUrl + url, {
      params: {
        query: term
      },
      headers:{
        Authorization: 'Client-ID <ENTER-HERE>'
      }
    });

    return response;
  }
}

export default HttpService;
