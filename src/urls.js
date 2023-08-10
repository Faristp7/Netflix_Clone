import { api_key } from "./constants/constants"
export const originals = `discover/tv?api_key=${api_key}&with_networks=213`
export const action = `/discover/movie?api_key=${api_key}&with_genres=28`
export const upcoming = `/movie/upcoming?api_key=${api_key}`
export const topRated = `/movie/top_rated?api_key=${api_key}`