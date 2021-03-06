import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';

const App = () => {
                                                                  //The below ONLY applies if we DONT use <Switch> to wrap the <Route>s instead of a <div>
  return(
    <div className="ui container">
      <Router history={history}>
        <div> {/*If using LINK inside any component like in <Header>, they must be a child of <BrowserRouter> or it will throw an error*/}
          <Header />                                                  {/* React Router works in the following fashion:  ( Using this URL as example: 'http://localhost:8000/' ) */}
          <Switch>                                                    {/* Keyword 'exact' present: Is extracted path from the URL above('/') === path('/') in the component <== TRUE, so this route is shown*/}
            <Route path="/" exact component={StreamList} />           {/* NO Keyword 'exact' present: Does extracted path from the URL above('/') contain path('/streams/new') in the component <== FALSE, so this route is skipped*/}
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />      {/* Different questions are asked depending on whether the 'exact' keyword is present or not in the component, in order to determine if the route is shown or not*/}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
