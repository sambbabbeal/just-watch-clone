import React from 'react';
import PropTypes from 'prop-types';

export function MovieGrid(props) {
    return (<div>
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

