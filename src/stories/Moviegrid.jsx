import React from 'react';
import PropTypes from 'prop-types';
import "./moviegrid.css"
export function MovieGrid(props) {
    console.log("in movie grid", props.listMovie)
    return (<div className="moviegrid">
        coucou
        {props.listMovie.map((e) => {
            return (<div>{e.title}</div>)
        })}
    </div>)

}

MovieGrid.propTypes = {
    listMovie: PropTypes.arrayOf(PropTypes.node)
};

MovieGrid.defaultProps = {

};

