import React, { Component } from 'react';
import './App.css';

import MiniDrawer from './components/MiniDrawer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
         
           <MiniDrawer /> 
        </div>  
          
      </div>
    );
  }
}

export default App;
