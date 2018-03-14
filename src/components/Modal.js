import React, { Component } from 'react';

class Modal extends Component {

	constructor(props){
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }

	escFunction(event){
    if(event.keyCode === 27 && this.props.show) {
			this.props.onClose();
    }
  }
	
  componentDidMount(){
		console.log(this.props.show);
    document.addEventListener("keydown", this.escFunction, false);
  }


  render() {
		if(!this.props.show) {
			return null;
		}
		const posterPathBase = ' http://image.tmdb.org/t/p/w300';
    return (
			<div className="modal" key={this.props.film.id} >
				<div className="modal-content"
				style={{background: `url(http://image.tmdb.org/t/p/w1280${this.props.film.backdrop_path}) top`, backgroundSize: 'cover'}}
				onClick={this.props.onClose}
				onKeyDown={this.props.onClose}
				>
					<div className="ug-row">
						<div className="ug-col-12">
							<div className="ug-row">
								{console.log(this.props.film.id)}
							</div>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default Modal;
