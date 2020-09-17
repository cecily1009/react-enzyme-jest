import React from 'react';
import Header from './component/Header/index';
import Headline from './component/Headline/index';

import './app.scss';

const tempArr = [
  {
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@email.com',
    age: 24,
    onlineStatus: false,
  },
];

function App() {
  return (
    <div className='App'>
      <Header />
      <section className='main'>
        <Headline
          header='Posts'
          desc='Click the button to render posts'
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
