import React from "react";

import { MovieGrid } from "./Moviegrid";
import { Card } from "./Card";

export default {
  title: "Example/MovieGrid",
  component: MovieGrid,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const TemplateCardSimple = (args) => {
  return <Card componentContained={<FakeCompo />} title="hello" />;
};
const TemplateCardMovie = (args) => {
  return (
    <Card
      componentContained={
        <FakeCompo3 imgUrl="https://www.filmspourenfants.net/wp-content/uploads/2018/07/retour-vers-le-futur-a-371x500.jpg" />
      }
      title="Retour vers le futur"
    />
  );
};

const TemplateMovieGridTitle = (args) => {
  return (
    <MovieGrid listMovie={["THE  MASK", "RETURN FROM FUTURE", "STAR WARS"]} />
  );
};
const TemplateMovieGridCard = (args) => {
  return (
    <MovieGrid
      listMovie={[
        <Card componentContained={<FakeCompo />} title="hello" />,
        <Card componentContained={<FakeCompo2 />} title="BYE" />,
      ]}
    />
  );
};
const TemplateMovieGridMovie = (args) => {
  let nb = 10;
  return (
    <MovieGrid
      listMovie={[...Array(nb)].map(() => (
        <Card
          componentContained={
            <FakeCompo3 imgUrl="https://www.filmspourenfants.net/wp-content/uploads/2018/07/retour-vers-le-futur-a-371x500.jpg" />
          }
          title="hello"
        />
      ))}
    />
  );
};

const TemplateMovieGridMoviePropsChild = (args) => {
  let nb = 10;
  return (
    <MovieGrid>
      {[...Array(nb)].map(() => (
        <Card
          componentContained={
            <FakeCompo3 imgUrl="https://www.filmspourenfants.net/wp-content/uploads/2018/07/retour-vers-le-futur-a-371x500.jpg" />
          }
          title="hello"
        />
      ))}
    </MovieGrid>
  );
};

const FakeCompo = () => {
  return <div>HELLO WORLD</div>;
};
const FakeCompo2 = () => {
  return <div>BYE WORLD</div>;
};

const FakeCompo3 = ({ imgUrl }) => {
  return (
    <div className="imageContainer">
      <img src={imgUrl} />
    </div>
  );
};

export const CardSimple = TemplateCardSimple.bind({});
CardSimple.args = {
  title: "title",
  componentContained: <FakeCompo />,
};

export const CardMovie = TemplateCardMovie.bind({});
CardMovie.args = {
  title: "title",
  componentContained: <FakeCompo />,
};

export const MovieGridExempleTitle = TemplateMovieGridTitle.bind({});
MovieGridExempleTitle.args = { listMovie: ["ok", "ook"] };

export const MovieGridExempleCard = TemplateMovieGridCard.bind({});
MovieGridExempleCard.args = {
  listMovie: [
    <Card componentContained={<FakeCompo />} title="hello" />,
    <Card componentContained={<FakeCompo2 />} title="BYE" />,
  ],
};

export const MovieGridExempleCardCinema = TemplateMovieGridMovie.bind({});
MovieGridExempleCardCinema.args = {
  listMovie: [
    <Card
      componentContained={
        <FakeCompo3 imgUrl="https://static.fnac-static.com/multimedia/Images/FR/NR/11/c5/be/12502289/1507-1/tsp20210929142606/Retour-vers-le-futur-Toute-l-histoire-d-une-saga-culte.jpg" />
      }
      title="Retour vers le futur"
    />,
    <Card componentContained={<FakeCompo2 />} title="BYE" />,
  ],
};

export const MovieGridExempleCardCinemaCP =
  TemplateMovieGridMoviePropsChild.bind({});

MovieGridExempleCard.args = {
  listMovie: [],
};
