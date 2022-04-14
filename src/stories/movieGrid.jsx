import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const MovieGrid = ({ size, ...props }) => {
    return (
        <div>movieGrid {size}</div>
    )
};

MovieGrid.propTypes = {
    size: PropTypes.string,
};

MovieGrid.defaultProps = {
    size: "100",
};
