import React from 'react';

import { MovieGrid } from './MovieGrid';

export default {
  title: 'Example/MovieGrid',
  component: MovieGrid,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <MovieGrid {...args} />;

export const MovieGridTest = Template.bind({});

