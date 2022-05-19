import { Outlet, Link } from 'react-router-dom'

const Layout = (ComponentHeader, ComponentContent) => {
  return () => {
    return (
      <div className="website">
        <div className="header-content">{ComponentHeader}</div>
        <Link to="/1">pageid</Link>
        <div></div>
        <Link to="/"> accueil</Link>

        <Outlet></Outlet>
      </div>
    )
  }
}

export default Layout
