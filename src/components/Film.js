import React, { Component } from 'react';

class Film extends Component {
  render() {
		const posterPathBase = ' http://image.tmdb.org/t/p/w300';
    return (
				<div className="ug-col-s-6 ug-col-m-4 ug-col-l-2"  key={this.props.film.id}>
					<img className="poster-image" src={posterPathBase+this.props.film.poster_path} alt={this.props.film.title} />
					<h3>{this.props.film.title}</h3>
        </div>
    );
  }
}

export default Film;
