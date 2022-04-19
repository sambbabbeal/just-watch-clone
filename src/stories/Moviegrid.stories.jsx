import React from 'react';

import { MovieGrid } from './Moviegrid';
import { Card } from './Card';

export default {
    title: 'Example/MovieGrid',
    component: MovieGrid,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const TemplateCard = (args) => { return <Card componentContained={<FakeCompo />} title="hello" />; }
const TemplateMovieGridTitle = (args) => { return <MovieGrid listMovie={["THE  MASK", "RETURN FROM FUTURE", "STAR WARS"]} /> };
const TemplateMovieGridCard = (args) => { return <MovieGrid listMovie={[<Card componentContained={<FakeCompo />} title="hello" />, <Card componentContained={<FakeCompo2 />} title="BYE" />]} /> };

const FakeCompo = () => {
    return (<div>HELLO WORLD</div>)
}
const FakeCompo2 = () => {
    return (<div>BYE WORLD</div>)
}

export const CardMovie = TemplateCard.bind({});
CardMovie.args = {
    title: 'title',
    componentContained: <FakeCompo />
};

export const MovieGridExempleTitle = TemplateMovieGridTitle.bind({});
MovieGridExempleTitle.args = { listMovie: ["ok", "ook"] };

export const MovieGridExempleCard = TemplateMovieGridCard.bind({});
MovieGridExempleCard.args = { listMovie: [<Card componentContained={<FakeCompo />} title="hello" />, <Card componentContained={<FakeCompo2 />} title="BYE" />] };