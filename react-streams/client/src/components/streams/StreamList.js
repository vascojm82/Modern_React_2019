import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../Redux/actions';

class StreamList extends React.Component{
  componentDidMount(){
    this.props.fetchStreams();
  }

  renderAdmin(stream){
    if(stream.userId === this.props.currentUserId){
      return(
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
        </div>
      );
    };
  };

  renderList(){
    return this.props.streams.map(stream => {
      return(
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate(){
    if(this.props.isSignedIn){
      return(
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">Create Stream</Link>
        </div>
      );
    }
  }

  render(){
    console.log(this.props.streams);
    return(
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
};

let mapStateToProps = (state) => {
  return{    //Turns all values inside an object into an array of objects
    streams: Object.values(state.streams),   //Otherwise, this would just be an object of objects inside
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps ,{ fetchStreams })(StreamList);
