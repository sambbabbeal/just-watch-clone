import React from 'react';
import PropTypes from 'prop-types';
import "./moviegrid.css"
export function MovieGrid(props) {
    return (<div className="moviegrid">
        {props.listMovie.map(e => {
            return (<div>{e}</div>)
        })}
    </div>)

}

MovieGrid.propTypes = {
    listMovie: PropTypes.arrayOf(PropTypes.node)
};

MovieGrid.defaultProps = {

};

