import React, { useState, useEffect } from 'react';

const Breed = props => {
  const [breed, setBreed] = props.breed;
  const [data, setData] = useState([]);
  const [isFetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetching(true);

        const api_call = await fetch(`https://dog.ceo/api/breeds/list/all`);

        const response = await api_call.json();

        const arr = await Object.entries(response.message).reduce(
          (p, item, i) => {
            let key = item[0];
            let value = item[1];

            if (Object.keys(value) !== undefined) {
              if (Object.keys(value).length > 0) {
                value.map(sub => {
                  p.push({
                    name: `${key} ${sub}`,
                    value: `${key}-${sub}`,
                  });
                });
              }
            }

            p.push({
              name: key,
              value: key,
            });

            return p;
          },
          []
        );
        setData(arr);
      } catch (e) {
        console.log(e);
        setData([]);
      }
    };

    if (!isFetching) {
      fetchData();
    }
  });

  return data !== null ? (
    <div className="breed">
      <label aria-label="Choose other breed" title="Choose a breed">
        {breed === ''
          ? 'Choose other breed'
          : data.find(x => x.value === breed).name}
      </label>
      <select
        name="breed"
        onChange={e => setBreed(e.target.value)}
        value={breed}
        aria-label="Choose other breed"
        title="Choose other breed"
      >
        <option>{`Choose other breed`}</option>
        {data.map(({ name, value }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  ) : null;
};

export default Breed;
