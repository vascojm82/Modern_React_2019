import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../Redux/actions/index';
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(typeof this.props.stream === 'undefined')
      this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  }

  render(){
    if(typeof this.props.stream === 'undefined')
      return <div>Loading...</div>;

    return(
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} initialValues={ _.pick(this.props.stream, 'title', 'description' ) } />
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)
