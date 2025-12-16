import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Sending props (id, title, image) from MovieList to MovieCard
export const MovieCard = ({ id, title, image }) => {
  return (
    <CardWrapper>
      <Link to={`/movies/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  background-color: #1e1e1e;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  width: 350px;
  height: 500px;
  margin: 10px;
  position: relative;

  &:hover {
    transform: translateY(-5px)
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: filter 0.3s;
  }

  &:hover img {
    filter: brightness(30%);
  }

  h3 {
  color: #fff;
  font-size: 40px;
  text-align: center;
  justify-content: center;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.2s;
  }

  &:hover h3 {
    opacity: 1;
  }

  @media (max-width: 400px) {
    width: 70vw;
    height: 85vw;
  }

    &:hover h3 {
    opacity: 1;
  }
  `;  