import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(res => {
          console.log(res.data)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(res.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    setSaved([...saved, id])
    // This is stretch. Prevent the same movie from being "saved" more than once
    const result = saved.find((el) => el =! id )

    console.log(result)
  };
  console.log(saved)

  return (
      <div>
          
        <SavedList list={saved} />

        <Route path ='/movies/:id'>
          <Movie saved={saved} setSaved={addToSavedList}/>
        </Route>

        <Route exact path='/'>
          <MovieList movies={movieList}/>
        </Route>
      </div>
  );
}