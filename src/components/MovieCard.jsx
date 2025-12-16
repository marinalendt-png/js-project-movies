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
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  width: 200px;
  margin: 10px;

  &:hover {
    transform: translateY(-5px)
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }
   
  h3 {
  color: #fff;
  font-size: 16px;
  text-align: center;
  padding: 10px 0;
  }
  `;  