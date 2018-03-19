import React, { Component } from 'react';
import SearchSuggestions from './SearchSuggestions';

class Film extends Component {

	constructor(props) {
		super(props);
		this.state = {
			query: '',
			startTime: null,
			finishTimer: null,
			elapsed: null
		}
	}

 saveUserInput = () => {
	 let searchValue = encodeURIComponent(this.search.value);
	 if (searchValue !== '') {
	   this.setState({ query: searchValue });
		 this.searchFilm();
	 } else if (searchValue.length < 2 || searchValue === undefined) {
		 this.props.resetSearchResults();
		}
	}

 searchFilm = () => {
	 if (this.state.query.length > 2 && this.state.elapsed > 10) {
		 setTimeout (() => {
		 this.props.search(this.state.query);
	 }, 1000);

	 }
 }

 keyDownTimer = () => {
	const startTimer = new Date();
	this.setState({startTime: startTimer});
 }

 keyUpTimer = () => {
	const finishTimer = new Date();
	this.setState({startTime: finishTimer});
	const elapsed = finishTimer - this.state.startTime;
	this.setState({elapsed: elapsed});
	}

 searchResultsMap = () => {
		if (this.state.query !== '') {
		if (this.props.searchResults !== undefined || this.props.searchResults.length > 0) {
			let listItems = this.props.searchResults.map((item) => {
				if (item.poster_path !== null) {
					return (
					<SearchSuggestions
						item={item}
						key={item.id}
						currentFilm={() => this.props.currentFilm(item)}
					 />
					)
				}
				return listItems;
			})
			return (
				<ul>{listItems}</ul>
			)}
		} else if (this.state.query === '') {
			return (
				<ul></ul>
			)
		}
		 }

  render() {
    return (

				<div className="ug-col-12 search-input-container">
					<input
						type="search"
						placeholder="Search"
						ref={input => this.search = input}
         		onChange={this.saveUserInput}
						onKeyUp={this.keyUpTimer}
						onKeyDown={this.keyDownTimer}
					/>
					<div className="autocomplete">
							{this.searchResultsMap()}
					</div>
        </div>
    );
  }
}

export default Film;
