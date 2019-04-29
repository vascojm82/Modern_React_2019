import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import history from '../../history';
import { fetchStream, deleteStream } from '../../Redux/actions';

class StreamDelete extends React.Component{
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions(){
    return(
      <React.Fragment>
        <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui button negative">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent(){
    if(!this.props.stream){
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
  }

  render(){
    return <Modal title="Delete Stream" content={this.renderContent()} actions={this.renderActions()} onDismiss={() => history.push('/')} />
  }
};

let mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
=======
import Modal from '../Modal';

let StreamDelete = () => {
  return(
    <div>
      StreamDelete
      <Modal />
    </div>
  )
>>>>>>> d56a1d4a3b9223d2976399557d2fb89d5f1be8f3
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
