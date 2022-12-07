import axios from 'axios'
import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})



export const bcwApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/gifts',
  timeout: 8000
})


export const giphyApi = Axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/search',
  timeout: 8000,
  params: {
    api_key: 'EwJOhpWt8u33x9pGekeDhLr8s50lUL3F',
    limit: 10,
    rating: 'g',
    q: "wolf",
    lang: "en"
  }
})
