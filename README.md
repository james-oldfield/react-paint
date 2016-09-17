react-paint :art:
===========================
## what
A simple Microsoft Paint-esque canvas drawing tool in a component for ReactJS.

**[demo](http://james-oldfield.github.io/react-paint)**

Works with both touch and click for both desktop and devices. There's a couple small drawing components out there but this takes a different approach to the drawing to canvas, producing smoother lines / curves.

## how

To use in a react project, first, install via npm:

`npm i react-paint --save`

```js
import React from 'react';
import ReactPaint from 'react-paint';

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

const App = () => <ReactPaint {...props} />;
```

