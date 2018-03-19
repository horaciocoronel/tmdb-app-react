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
					<span className="close"  onClick={this.props.onClose}>&times;</span>
					<div className="ug-row film-details">
	                <div className="ug-col-s-12 ug-col-m-10 ug-col-l-10 bottom-position">
	                    <div className="box box-primary">
												<h3 className="">{this.props.film.title}</h3>
												<p>{this.props.film.overview}</p>
											</div>
	                </div>
	                <div className="ug-col-s-2 ug-col-m-2 ug-col-l-2 bottom-position">
	                    <div className="box modal-film-poster">
												<img src={`${posterPathBase}${this.props.film.poster_path}`} alt={this.props.film.title} style={{width: '100%'}} />
											</div>
	                </div>


							{/* </div>
						</div> */}
					</div>
				</div>
			</div>
    );
  }
}

export default Modal;
