import Axios from 'axios';
let baseUrl = "https://www.googleapis.com/youtube/v3";
const KEY = 'AIzaSyAELdgvXp44dk1HTd5uM4yK0bvWNKGeIKY';

let HttpService = {
  get: async (url, query) => {
    console.log(query);
    let response = await Axios.get(baseUrl + url, {
      params: {
        part: 'snippet',
        maxResults: 5,
        q: encodeURIComponent(query),
        key: KEY
      },
    });

    return response;
  }
}

export default HttpService;
