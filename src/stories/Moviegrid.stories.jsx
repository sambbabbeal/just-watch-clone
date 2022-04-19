import React from 'react';

import { Moviegrid } from './Moviegrid';
import { Card } from './Card';

export default {
    title: 'Example/MovieGrid',
    component: Header,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const TemplateCard = (args) => <Card {...args} />;
const TemplateMovieGrid = (args) => <MovieGrid {...args} />;

export const CardMovie = TemplateCard.bind({});
CardMovie.args = {

};

export const MovieGridExemple = TemplateMovieGrid.bind({});
MovieGridExemple.args = {};
