import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import MyButton from './MyButton';
import YourButton from './YourButton';

import lesson from './lesson-react.json';

function App() {

  return (
    <div>
      <Navbar />
      <Card data={lesson} />
      <hr />
      <MyButton>Hello</MyButton>
      <YourButton>World</YourButton>
    </div>
  );
}

export default App;
