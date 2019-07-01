import React, { Fragment, useState } from 'react';

import Card from './components/Card';
import Logo from './components/Logo';

const App = () => {
  const [data, setData] = useState({
    name: 'Type the name',
    image: '',
    breed: '',
    message: 'Type your message',

    inputs: {
      name: {
        color: '#FFF',
      },
      location: {},
    },
  });

  const save = e => {
    console.log(e.target.value);
  };

  return (
    <Fragment>
      <div className="app">
        <div className="container">
          <Logo />
          <Card data={[data, setData]} />
          <button onClick={e => save(e)} className="btn success">
            Salvar
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
