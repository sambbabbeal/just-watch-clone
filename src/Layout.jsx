import { Outlet } from 'react-router-dom'

const Layout = (ComponentHeader, ComponentContent) => {
  return () => {
    return (
      <div className="website">
        <div className="header-content">{ComponentHeader}</div>
        <div className="principale-content">{ComponentContent}</div>
        <Outlet></Outlet>
      </div>
    )
  }
}

export default Layout
