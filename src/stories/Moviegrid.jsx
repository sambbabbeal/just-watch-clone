import React from 'react'
import './moviegrid.css'

export function MovieGrid(props) {
  return (
    <div className="moviegrid">
      {!props.children
        ? props.listMovie.map((e, index) => <div key={index}>{e}</div>)
        : props.children}
    </div>
  )
}
