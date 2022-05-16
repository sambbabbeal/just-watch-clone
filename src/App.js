import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import { MovieGrid } from "./stories/Moviegrid"
const  App = () => {


  useEffect(()   => {
    let ctx = this;
    const [listMovie, setListMovie] = useState([])
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=ae7c30248f874b6ff1052082be68d6c7`)
      .then(res => {
        const movies = res.data.results;
        setListMovie(movies)
      })
  },[])



    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          {!!this.state.listMovie ? <MovieGrid listMovie={  props.listMovie}></MovieGrid> : <p>unfind</p>}
        </div>
      </div>
    );
  
}

export default App;
