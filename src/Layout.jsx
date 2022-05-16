const Layout = (ComponentHeader, ComponentContent) => {
  return () => {
    return (
      <div className="website">
        <div className="header-content">{ComponentHeader}</div>
        <div className="principale-content">{ComponentContent}</div>
      </div>
    )
  }
}

export default Layout
