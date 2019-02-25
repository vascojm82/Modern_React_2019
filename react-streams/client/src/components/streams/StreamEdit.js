import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../Redux/actions/index';

class StreamEdit extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(typeof this.props.stream === 'undefined')
      this.props.fetchStream(this.props.match.params.id);
  }

  render(){
    if(typeof this.props.stream === 'undefined')
      return <div>Loading...</div>

    return(
      <div>{this.props.stream.title}</div>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit)
