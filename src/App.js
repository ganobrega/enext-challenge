import React, { Fragment, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import Card from './components/Card';
import Logo from './components/Logo';

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['picture']);
  const [data, setData] = useState({
    name: '',
    image: '',
    breed: '',
    location: '',

    inputs: {
      name: {},
      location: {},
    },
  });

  const [isLoaded, setLoaded] = useState(false);

  const save = e => {
    console.log(e.target.value);

    setCookie('picture', JSON.stringify(data), { path: '/' });
  };

  const load = () => {
    // console.log(cookies.picture);
    // setData(cookies.picture);
    // setLoaded(true);
  };

  useEffect(() => {
    // if (!isLoaded) {
    setData(cookies.picture);
    // }
  }, [cookies.picture, load]);

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
