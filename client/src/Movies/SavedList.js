import React, {useEffect, useState} from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

export default function SavedList(props) {


  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie, index) => (
        <Link to={`/movies/${movie.id}`}>
          <span key={index} className="saved-movie">{movie.title}</span>
        </Link>
      ))}
      <Link to='/'>
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}
