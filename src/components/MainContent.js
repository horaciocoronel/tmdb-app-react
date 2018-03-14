import React, { Component } from 'react';
import Film from './Film';
class MainContent extends Component {

	processFilms = (films) => {
			let film = films.map((film) => {
				if(film.poster_path != null) {
				return(
					<Film
						key={film.id}
						film={film}
						>
					</Film>
				)
				}
			})
			return film;
		}

  render() {
    return (
			<div className="ug-row">
				<div className="ug-col-12">
					<div className="ug-row">
						{this.processFilms(this.props.films)}
					</div>
				</div>
			</div>
    );
  }
}

export default MainContent;
