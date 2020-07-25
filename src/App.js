import React from 'react';
import Layout from './Layout';
import Card from './Card';
import MyButton from './MyButton';
import YourButton from './YourButton';

import lesson from './lesson-react.json';

function App() {

  return (
    <div>
      <Layout />
      <Card data={lesson} />
      <hr />
      <MyButton>Hello</MyButton>
      <YourButton>World</YourButton>
    </div>
  );
}

export default App;
