import axios from 'axios'
const API_URL = 'https://api.themoviedb.org/3/movie'

const movieDBServices = {
  nowMovies: () => {
    return axios.get(
      `${API_URL}/now_playing?api_key=ae7c30248f874b6ff1052082be68d6c7`
    )
  }
}

export default movieDBServices
