import React from 'react'
import PropTypes from 'prop-types'

export const Card = (props) => {
  return (
    <div className="ContainerCard">
      <div className="cardTitle">{props.title}</div>
      <div className="componentInCardContainer">{props.children}</div>
    </div>
  )
}

Card.propTypes = { title: PropTypes.string.isRequired }
