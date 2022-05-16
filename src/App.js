import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
import { MovieGrid } from './stories/Moviegrid'
import { Card } from './stories/Card'
import Layout from './Layout'
import { Header } from './stories/Header'
const App = () => {
  const [listMovie, setListMovie] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=ae7c30248f874b6ff1052082be68d6c7`
      )
      .then((res) => {
        const movies = res.data.results
        setListMovie(movies)
      })
  }, [])

  const CompoLayout = Layout(
    <Header />,
    <MovieGrid>
      {listMovie.map((resp, index) => {
        return (
          <Card title={resp.title} key={`movie${index}`}>
            <div className="imageContainer">
              <img
                src={`https://image.tmdb.org/t/p/original/${resp.poster_path}`}
                alt={resp.overview}
              />
            </div>
          </Card>
        )
      })}
    </MovieGrid>
  )

  return (
    <div className="App">
      <CompoLayout />
    </div>
  )
}

export default App
