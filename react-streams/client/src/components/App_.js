import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

let PageOne = () => {
  return(
    <div>
      PageOne<br /><br />
      <Link to="/pagetwo">Navigate to Page Two</Link>
    </div>
  );
}

let PageTwo = () => {
  return(
    <div>
      PageTwo<br />
      <button>Click Me!</button><br /><br />
      <Link to="/">Navigate to Page One</Link>
    </div>
  );
}

const App = () => {
                                                        //The below ONLY applies if we DONT use <Switch> to wrap the <Route>s instead of a <div>
  return(
    <BrowserRouter>
      <div>                                             {/* React Router works in the following fashion:  ( Using this URL as example: 'http://localhost:8000/' ) */}
        <Route path="/" exact component={PageOne} />    {/* Keyword 'exact' present: Is extracted path from the URL above('/') === path('/') in the component <== TRUE, so this route is shown*/}
        <Route path="/pagetwo" component={PageTwo} />   {/* NO Keyword 'exact' present: Does extracted path from the URL above('/') contain path('/pageTwo') in the component <== FALSE, so this route is skipped*/}
      </div>
    </BrowserRouter>
  );
                                                       /* Different questions are asked depending on whether the 'exact' keyword is present or not in the component, in order to determine if the route is shown or not */
}

export default App;
