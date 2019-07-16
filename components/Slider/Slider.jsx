import '../../scss/main.scss';


class Slider extends React.Component{
	state = {
		index:1,
		images: this.props.slides.images
	}

	 _plusSlides(){
			let {index, images} = this.state
			if(index === images.length -1){
					return this.setState({index:0});
				}else{
					return this.setState({index:index + 1});
				}		
	}
	 _currentSlides(){
		let {index, images} = this.state
		if(index === 0){
				return this.setState({index:images.length-1});
			}else{
				return this.setState({index:index - 1});
			}			
	}
		render() {
			let { images } = this.props.slides
			let { index }  = this.state

			return(
						<div className="slideshow-container">					
								<div className="fade">
									<div className="numbertext">{images.length}</div>
										<img src={images[index]} style={{ width: '100%' }} />
										<div className="text">
													{images[index]?images[index].toString():'Nan'}
										</div>
								</div>							

					<a className="prev" onClick={() => this._currentSlides()}>
						&#10094;
					</a>
					<a className="next" onClick={() => this._plusSlides()}>
						&#10095;
					</a>

				</div>)
	}
}

export default Slider;
