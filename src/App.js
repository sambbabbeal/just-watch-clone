import React, { useEffect, useState } from 'react'
import axios from 'axios'

import logo from './logo.svg'
import './App.css'
import { MovieGrid } from './stories/Moviegrid'
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

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <div>
        {!!listMovie ? (
          <MovieGrid>
            <div>test</div>
          </MovieGrid>
        ) : (
          <p>unfind</p>
        )}
      </div>
    </div>
  )
}
/*import Layout from "./Layout"

const FakeHeader = () => {
  return (<div>HELLO WORLD</div>)
}

const FakeContent = () => {
  return (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at felis non quam faucibus sodales. Aliquam sollicitudin leo ac commodo scelerisque. Duis urna leo, pretium vel ante ut, dapibus egestas diam. Nunc ultrices ullamcorper neque nec pretium. Nullam tincidunt odio at ipsum condimentum, non aliquam nisi pharetra. Vestibulum ultrices pharetra urna. Pellentesque vel aliquet justo. Sed lobortis luctus risus sed ultrices. Fusce luctus, augue id tempus dignissim, justo diam porta erat, eu tempor felis erat laoreet lacus. Sed eu dolor quis mi elementum venenatis. Phasellus vitae urna ullamcorper, vestibulum quam a, sollicitudin neque. Sed interdum venenatis lectus, nec placerat ante malesuada quis. Sed aliquam, odio nec congue feugiat, nisl ipsum malesuada tellus, ac pharetra felis mauris sed neque. Nunc scelerisque odio et urna venenatis accumsan. Praesent imperdiet risus vitae eleifend tristique.
    <br /><br />
  Suspendisse rhoncus pulvinar metus, a cursus augue viverra sed. Ut ultricies fringilla diam, id mattis ipsum eleifend et. Aliquam dignissim justo at iaculis varius. Aliquam viverra consequat nisl eu porta. Phasellus accumsan suscipit ipsum, sit amet blandit ipsum. Curabitur erat justo, posuere sit amet orci semper, lobortis tincidunt lectus. Proin ultrices rhoncus diam eu commodo.
    <br /><br />

  Quisque sed nunc et sapien efficitur lacinia at ut diam. Praesent id mauris sed magna bibendum aliquam. Cras vitae tortor et turpis lobortis maximus quis eget sem. In malesuada orci augue, eget consectetur tortor maximus faucibus. Vivamus eleifend dapibus iaculis. Nulla facilisi. Nunc vitae pellentesque lacus. Praesent sagittis sapien velit, non elementum dolor interdum sollicitudin. Suspendisse aliquet eu lorem faucibus egestas. Donec id mi nulla. Phasellus in nulla vitae nisi suscipit dictum at sed lacus. Donec enim magna, finibus et maximus vitae, commodo mattis odio. Nam viverra sem eu nibh eleifend lacinia. Quisque malesuada neque ut rutrum condimentum. Nam sollicitudin ante sit amet sapien facilisis finibus. Duis nibh dui, egestas eget velit at, dictum molestie nulla.
    <br /><br />

  Etiam at nibh tortor. Pellentesque et urna consectetur, pellentesque massa at, rhoncus elit. Etiam malesuada iaculis neque quis imperdiet. Donec vehicula tortor vel lacinia feugiat. Integer vestibulum, nisi a consectetur faucibus, libero arcu dapibus mi, non eleifend augue purus eu risus. Aliquam suscipit bibendum neque, vitae suscipit ex ultricies sed. Donec aliquam nibh vel bibendum faucibus. Pellentesque sagittis tincidunt nulla, finibus tristique dui rutrum at. Morbi aliquam magna a eros imperdiet efficitur. Praesent sed neque rhoncus lorem dignissim cursus varius at justo.
    <br /><br />

  Integer sed dictum nunc, sit amet cursus neque. Vivamus elementum dui nec molestie tempor. Vivamus id tempus magna. Mauris sagittis quam lobortis ante lacinia rhoncus. Nam convallis feugiat diam sit amet accumsan. Mauris porttitor scelerisque accumsan. Ut mattis ullamcorper suscipit. Morbi eros risus, porta sed hendrerit id, vestibulum volutpat risus. Nam in magna finibus, mollis purus quis, bibendum purus. Fusce molestie, nisl non consectetur ullamcorper, nibh sem rhoncus tortor, quis congue ex erat ac mauris. Quisque tempus urna est, at ornare ligula aliquet a.</p>
  )
}

const Compo = Layout(<FakeHeader />, <FakeContent />)
class App extends Component {
  render(props) {
    return (
      <div className="App">
        <Compo />
      </div >
    );
  
}*/

export default App
