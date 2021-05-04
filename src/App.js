/**For creating this redux app, I have  npx create-react-app disney-plus-clone --template redux
 * Redux what allows us is to save the state of a component
*/
import React from 'react';
import './App.css';

/**we do the importation of the different components */
import Header from './components/Header.jsx';

/**For the home page */
import Home from './components/Home.jsx';

// And for the detail page
import Detail from './components/Detail.jsx';

/**Need to install react-router-dom to switch between pages */
import {BrowserRouter as Router, 
        Switch,
        Route,
        Link 
      } from "react-router-dom"

/**WE define the routes of out page. By default, all of them are going to have the header
* Then i have the switch, where i gonna have different components depending on the route
*/
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
