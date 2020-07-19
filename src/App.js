import React from 'react';
import Card from './Card';
import lesson from './lesson-react.json';

function App() {
  return (
    <div>
      <Card data={lesson} />
    </div>
  );
}

export default App;
