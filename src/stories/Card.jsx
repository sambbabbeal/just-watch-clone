import React from 'react';
import PropTypes from 'prop-types';

export const Card = (props) => {
    const Componentin = props.componentContained

    return (<div className="ContainerCard">
        <div className="cardTitle">{props.title}</div>
        <div className="componentInCardContainer">{props.componentContained}</div>
    </div>)
}
Card.propTypes = {
    componentContained: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
}
