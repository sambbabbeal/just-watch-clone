import axios from 'axios'

const movieDBServices = {
  nowMovies: () => {
    return axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=ae7c30248f874b6ff1052082be68d6c7`
    )
  }
}

export default movieDBServices
