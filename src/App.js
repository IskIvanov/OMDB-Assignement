import Home from './components/Home'
import React, { useState } from 'react';
import './style/App.scss';

function App() {
  return (
    <div className="App">
		<Home/>
		<Sidebar />
    </div>
  );
}

export default App;
