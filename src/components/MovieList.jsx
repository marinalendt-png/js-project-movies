import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MovieCard } from './MovieCard';

export const MovieList = () => {
  const [movies, setMovies] = useState([]); //Lagrar filmer i state
  const [loading, setLoading] = useState(true); //Visar loading när tills api:et svarar
  const [error, setError] = useState(false); //används om fetchen misslyckas

  //Gets data from the movie database API
  useEffect(() => {
    const apiKey = "078d26b045391fd7de2a999106ddf939"
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=078d26b045391fd7de2a999106ddf939&language=en-US&page=1"

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      //Saves the movies data in state
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []); //Will only run once when component mounts. 

  if (loading)
    return <p>Loading movies...</p>

  if (error)
    return <p>Something went wrong when downloading movies.</p>

  return (
    <GridContainer>
      {movies.map((movie) => {
        const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
        return (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={imageUrl}
          />
        );
      })}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* 2 columns on mobile */
  grid-gap: 15px;
  padding: 10px;
  justify-items: center;

  @media(min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 3 columns on tablet */
  }

  @media(min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr); /* 4 columns on desktop */
  }
  `;