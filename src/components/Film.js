import React, { Component } from 'react';

class Film extends Component {

	handleDetailsClick = (e, film) => { this.props.currentFilm() }

  render() {
		const posterPathBase = ' http://image.tmdb.org/t/p/w300';
    return (

				<div
					className="ug-col-s-6 ug-col-m-4 ug-col-l-3 film-poster film-poster-img"
					key={this.props.film.id}
					onClick={(e) => this.handleDetailsClick(e, this.props.film)}
					style={{backgroundImage: `url(${posterPathBase+this.props.film.poster_path})`}}
					>
        </div>
    );
  }
}

export default Film;
