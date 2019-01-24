import React from 'react';

class SearchBar extends React.Component{
  state = {query: ''};
  onInputChange = (e) => {
    this.setState({
      query: e.target.value
    });
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.query);
    this.props.onFormSubmit(this.state.query);
  }
  render(){
    return(
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input type="text" onChange={this.onInputChange} value={this.state.query} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
