import React from 'react'
import PropTypes from 'prop-types'

/**
 * Primary UI component for user interaction
 */
export const MovieGrid = ({ size, ...props }) => {
  // we can init this movieGrid by children props or by listMovie props...
  // might change in futur redondance... not DRY (TODO)
  return (
    <div className="moviegrid">
      {!props.children
        ? props.listMovie.map((e) => <div>{e}</div>)
        : props.children}
    </div>
  )
}

MovieGrid.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.node).isRequired
}
