import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import { MovieGrid } from "./stories/Moviegrid"
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listMovie: []
    };

  }
  componentDidMount() {
    let ctx = this;
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=ae7c30248f874b6ff1052082be68d6c7`)
      .then(res => {
        const movies = res.data.results;
        console.log(movies, this.state)
        //  this.setState(state => {

        //     ({ ...state, listMovie: movies })

        //  }, (state2) => {
        //     console.log(state2, "ok")
        //   })

        this.setState({ listMovie: [] }, () => this.setState({ listMovie: movies }))



        console.log("ok", ctx.listMovie, this.state, this.listMovie)

        //this.setState({ persons });
      })
    // this.listMovie = ctx.listMovie
    console.log(this.listMovie)
  }
  render() {
    console.log('in render' + this.state.listMovie)

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

        </div>
        <div>
          {!!this.state.listMovie ? <MovieGrid listMovie={this.state.listMovie}></MovieGrid> : <p>unfind</p>}

        </div>
        {console.log("coucou", this.listMovie)}
      </div>
    );
  }
}

export default App;
