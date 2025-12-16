import React from "react";
import { MovieList } from "./components/MovieList";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <h1>Popular Movies</h1>
      <MovieList />
    </BrowserRouter>
  )
}
