import React, { Component } from 'react';

class Film extends Component {

	constructor(props) {
		super(props);
		this.state = {
			query: ''
		}
	}

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

	// constructor(props){
	// 	super(props);
	// 	this.userInput = this.userInput.bind(this);
	// }
	//
	// userInput(event){
	// 	if(event.keyCode === 27 && this.props.show) {
	// 		this.props.onClose();
	// 	}
	// }
	//
	// componentDidMount(){
	// 	document.addEventListener("keydown", this.userInput, false);
	// }

  render() {
		const posterPathBase = ' http://image.tmdb.org/t/p/w300';
    return (

				<div className="ug-col-12 search-input-container">
					<input
						type="search"
						placeholder="Search"
						ref={input => this.search = input}
         		onChange={this.handleInputChange}
					/>
					{console.log(this.state.query)}
        </div>
    );
  }
}

export default Film;
