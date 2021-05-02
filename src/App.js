/**For creating this redux app, I have  npx create-react-app disney-plus-clone --template redux
 * Redux what allows us is to save the state of a component
*/
import React from 'react';
import './App.css';

/**we do the importation of the different components */
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
