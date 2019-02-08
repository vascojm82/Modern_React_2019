import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component{
  render(){
    let { user } = this.props;

    if(!user){
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

let mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => {
    return user.id === ownProps.userId;
  }) };
};

export default connect(mapStateToProps)(UserHeader);