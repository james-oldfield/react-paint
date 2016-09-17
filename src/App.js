import React from 'react';
import ReactPaint from 'react-paint';
import './App.css'

const props = {
  style: {
    background: 'tomato',
    /* Arbitrary css styles */
  },
  brushCol: '#ffffff',
  lineWidth: 10,
  className: 'react-paint',
  height: 500,
  width: 500,
  onDraw: () => { console.log('i have drawn!'); },
};

const App = () =>
  <div className="app">
    <ReactPaint {...props} />
    <div>
      <h1>click to draw</h1>
      <a href="https://github.com/James-Oldfield/react-paint">
        react-paint
      </a>
    </div>
  </div>;

export default App;
