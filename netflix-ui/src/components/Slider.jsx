import React from 'react'
import CardSlider from './CardSlider'
import styled from 'styled-components';

export default React.memo(function Slider({movies}) {
    const getMoviesFromRange = (from,to) => {
        return movies.slice(from,to);
    };
  return (
    <Container>
        <CardSlider title="Trending Now" data={getMoviesFromRange(0,10)} />
        <CardSlider title="New Releases" data={getMoviesFromRange(10,20)} />
        <CardSlider title="Top Searches" data={getMoviesFromRange(20,30)} />
        <CardSlider title="Romantic Comedies" data={getMoviesFromRange(30,40)} />
        <CardSlider title="TV Thrillers" data={getMoviesFromRange(40,50)} />
        <CardSlider title="Only On Netflix" data={getMoviesFromRange(50,60)} />
    </Container>
  );
})

const Container = styled.div``;
