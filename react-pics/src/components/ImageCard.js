import React from 'react';

class ImageCard extends React.Component{
  constructor(props){
    super(props);

    this.imageRef = React.createRef();

    this.state = {
      spans: 0
    }
  }
  componentDidMount(){    //Common JavaScript/HtmL event listener
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  setSpans = () => {
    let height = this.imageRef.current.clientHeight;
    let spans = Math.ceil((height / 10));

    this.setState({
      spans: spans
    });
  }
  render(){
    let { description, urls } = this.props.image;  //De-Structuring

    return(
      <div style={{gridRowEnd:`span ${this.state.spans}`}}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
