import React from "react";
import PropTypes from "prop-types";
import "./moviegrid.css";

export function MovieGrid(props) {
  return (
    <div className="moviegrid">
      {!props.children
        ? props.listMovie.map((e) => <div>{e}</div>)
        : props.children}
    </div>
  );
}

MovieGrid.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.node).isRequired,
};
