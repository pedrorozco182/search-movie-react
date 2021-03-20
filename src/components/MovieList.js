import React, { Component } from "react";
import PropTypes from "prop-types";
import { CardMovie } from "./CardMovie";

export class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array,
  };

  render() {
    const { movies } = this.props;
    return (
      <div className="MovieList">
        {movies.map((movie) => {
          return (
            <div key={movie.imdbID} className="MovieList-item">
              <CardMovie
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
