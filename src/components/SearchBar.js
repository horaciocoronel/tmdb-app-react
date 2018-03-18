import React, { Component } from 'react';

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
   this.setState({ query: searchValue });
	 console.log('saveUserInput', this.state.elapsed);
 }

 searchFilm = () => {
	 if (this.state.query.length > 2 && this.state.elapsed > 50) {
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
	this.searchFilm();
	}

 searchResultsMap = () => {
	const posterPathBase = ' http://image.tmdb.org/t/p/w300';
		if (this.props.searchResults !== undefined || this.props.searchResults.length > 0) {
		let listItems = this.props.searchResults.map((item) => {
			let releaseDate = new Date(item.release_date);
			return (
				<li key={item.id}>
					<img src={posterPathBase+item.poster_path} style={{height: '3em'}} />
					{item.title} ({releaseDate.getFullYear()})</li>
			)
	 })
	 return (
		 <ul>{listItems}</ul>
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
						{/* {console.log(this.searchResultsMap(this.props.searchResults))} */}
					</div>
        </div>
    );
  }
}

export default Film;
