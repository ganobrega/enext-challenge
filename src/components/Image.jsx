import React, { useState } from 'react';
import * as Feather from 'react-feather';

import Breed from './Breed';
import Input from './Input';

const Image = props => {
  const [breed, setBreed] = props.breed;
  const [image, setImage] = props.image;
  const [name, setName, styledName, setStyledName] = props.name;
  const [isLoaded, setLoad] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const fetchData = () => {
    console.log(breed);
    setLoad(false);
    if (breed !== '') {
      fetch(
        `https://dog.ceo/api/breed/${breed.replace('-', '/')}/images/random`
      )
        .then(res => res.json())
        .then(res => setImage(res.message));
    } else {
      fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res => res.json())
        .then(res => setImage(res.message));
    }
    setLoad(true);
  };

  if (!isLoaded) {
    fetchData();
  }

  return (
    <div
      className="image"
      onMouseMove={e => setOverlayVisible(true)}
      onMouseLeave={e => setOverlayVisible(false)}
    >
      <div
        className={`overlay ${overlayVisible ? 'show' : 'invisible'}`}
        aria-label="Image of the dog"
        title="Image of the dog"
      >
        <div className="top">
          <Breed breed={[breed, setBreed]} />
          <button
            aria-label="Generate a new random image of the selected breed"
            title="Random image"
            onClick={e => fetchData()}
          >
            <Feather.RefreshCw color="white" />
          </button>
        </div>
        <Input
          className="name"
          // placeholder="Name"
          value={[name, setName]}
          theme={[styledName, setStyledName]}
          colors={[
            '#FFFFFF',
            '#000000',
            '#C93A2B',
            '#F08833',
            '#F5B63F',
            '#4FAD4E',
            '#44A1DB',
          ]}
        />
      </div>

      <img src={image} alt="Dog" />
    </div>
  );
};

export default Image;
