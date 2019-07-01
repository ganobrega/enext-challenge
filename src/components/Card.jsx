import React, { useState, useEffect } from 'react';

import Image from './Image';
import Input from './Input';

const Card = props => {
  const [data, setData] = props.data;

  const [image, setState] = useState(data.image);
  const [breed, setBreed] = useState(data.breed);
  const [name, setName] = useState(data.name);
  const [message, setMessage] = useState(data.message);

  const [styledName, setStyledName] = useState(data.inputs.name);
  const [styledMessage, setStyledMessage] = useState(data.inputs.location);

  console.log(data);

  useEffect(() => {
    setData({
      name,
      image,
      message,
      breed,

      inputs: {
        name: styledName,
        message: styledMessage,
      },
    });
  }, [
    breed,
    image,
    message,
    name,
    props.name,
    setData,
    styledMessage,
    styledName,
  ]);

  return (
    <div className="card">
      <Image
        image={[image, setState]}
        breed={[breed, setBreed]}
        name={[name, setName, styledName, setStyledName]}
      />
      <Input
        className="message"
        // placeholder="Type a message"
        value={[message, setMessage]}
        theme={[styledMessage, setStyledMessage]}
        colors={[
          '#757575',
          '#C93A2B',
          '#F08833',
          '#F5B63F',
          '#4FAD4E',
          '#44A1DB',
        ]}
      />
    </div>
  );
};

export default Card;
