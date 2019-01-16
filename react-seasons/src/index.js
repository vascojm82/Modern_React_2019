import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
  state = { lat: null, errorMessage: '' };

  componentDidMount(){
    this.getLocation();
  }
  getLocation(){
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude
      });
    }, (err) => {
        this.setState({
          err: err.message
        });
      }
    );
  }

  renderContent(){
    if(this.state.err && !this.state.lat)
      return <div>Error: {this.state.err}</div>
    else if(!this.state.err && this.state.lat)
      return <SeasonDisplay lat={this.state.lat} />
    else
      return <Spinner message="Now Loading..." />
  }

  render(){
    return(
      <div className="border-black">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("main"));
