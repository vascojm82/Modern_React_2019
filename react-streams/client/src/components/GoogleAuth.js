import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../Redux/actions';

//Scopes info: https://developers.google.com/identity/protocols/googlescopes, 'Google Sign-In'
class GoogleAuth extends React.Component{
  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '137957297790-k8qh2agld20njciih3gma91oahtcc2nb.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen((isSignedIn) => this.onAuthChange(isSignedIn));     //'.listen()' is invoked every time the user's authentication status changes
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if(isSignedIn)
      this.props.signIn(this.auth.currentUser.get().getId());
    else
      this.props.signOut();
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton(){
    if(this.props.isSignedIn === null){
      return null;
    }else if(this.props.isSignedIn){
      return(
        <button className="ui red google button" onClick={this.onSignOutClick}><i className="google icon" />Sign Out</button>
      );
    }else{
      return(
        <button className="ui red google button" onClick={this.onSignInClick}><i className="google icon" />Sign In with Google</button>
      );
    }
  }

  render(){
    return <div>{this.renderAuthButton()}</div>
  }
}

let mapStateToProps = (state) => {
  return{
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
