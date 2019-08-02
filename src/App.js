import React from 'react';
import './App.css';

import SideBar from './widgets/side-bar/side-bar.js';

function App() {
  // https://reactjs.org/docs/fragments.html
  return (
    <React.Fragment>
      <div>Hello World</div>
      <SideBar />
    </React.Fragment>
  );
}

export default App;
