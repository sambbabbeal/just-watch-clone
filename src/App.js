import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import { MovieGrid } from './stories/Moviegrid'
import { Card } from './stories/Card'
import Layout from './Layout'
import { Header } from './stories/Header'
import movieDBServices from './services/movieDBServices'

const App = () => {
  const [listMovie, setListMovie] = useState([])

  useEffect(() => {
    movieDBServices.nowMovies().then((res) => {
      setListMovie(res.data.results)
    })
  }, [])

  const CompoLayout = Layout(
    <Header />,
    <MovieGrid>
      {listMovie?.map((resp, index) => {
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
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<div>about</div>} />

          <Route path="/users" element={<div>users</div>} />
          <Route path="/" element={<CompoLayout />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
