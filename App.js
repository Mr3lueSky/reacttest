import React from 'react';
import ImageDisplay from './ImageDisplay';

function App() {
  return (
    <div className="App">
      <ImageDisplay imagePath="igs://esp32demo-83882.appspot.com/data/photo.jpg" />
    </div>
  );
}

export default App;
