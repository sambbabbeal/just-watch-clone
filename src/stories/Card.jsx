const Card = (componentContained, title) => {
    return () => {
        return (
            <div className="ContainerCard">
                <div className="cardTitle">{title}</div>
                <div className="componentInCardContainer">{componentContained}</div>
            </div>
        )
    }

}