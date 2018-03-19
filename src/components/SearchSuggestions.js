import React, { Component } from 'react';
class SearchSuggestions extends Component {

handleDetailsClick = (e, film) => { this.props.currentFilm() }

	render() {
		const item = this.props.item;
		const posterPathBase = ' http://image.tmdb.org/t/p/w300';
		let releaseDate = new Date(item.release_date);
    return (
			<li onClick={(e) => this.handleDetailsClick(e, this.props.film)}>
				<img src={posterPathBase+item.poster_path} alt={item.title} style={{height: '3em'}} />
				<p>{item.title} ({releaseDate.getFullYear()})</p></li>
    );
  }
}

export default SearchSuggestions;
