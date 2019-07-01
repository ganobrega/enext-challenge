import React, { useState, useEffect } from 'react';
import Tippy from '@tippy.js/react';

import * as Feather from 'react-feather';

const FONTS = [
  { name: 'Montserrat', value: 'Montserrat' },
  { name: 'Roboto', value: 'Roboto' },
  { name: 'Lato', value: 'Lato' },
  { name: 'Sans-serif', value: 'sans-serif' },
  { name: 'SignPainter', value: 'SignPainter' },
];

const COLORS = [
  '#757575',
  '#C93A2B',
  '#F08833',
  '#F5B63F',
  '#4FAD4E',
  '#44A1DB',
];

const Tooltip = props => {
  const [font, setFont] = props.font;
  const [color, setColor] = props.color;

  let colors = props.colors === null ? COLORS : props.colors;

  return (
    <div className="tooltip">
      <div className="action font">
        <Feather.Type color="white" size="18" />
        <label>{font}</label>

        <div className="panel">
          <select
            name="font"
            onChange={e => setFont(e.target.value)}
            value={font}
          >
            {FONTS.map(({ name, value }) => (
              <option value={value}>{name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="action colors">
        <div className="panel">
          {colors.map(value => (
            <fieldset className="color">
              <label style={{ backgroundColor: value }}>
                <input
                  type="radio"
                  name="color"
                  onChange={e => setColor(e.target.value)}
                  checked={color === value}
                  value={value}
                />
              </label>
            </fieldset>
          ))}
        </div>
      </div>
    </div>
  );
};

const Input = props => {
  const [font, setFont] = useState(FONTS[0].value);
  const [color, setColor] = useState(props.color);
  const [theme, setTheme] = useState({});

  const [value, setValue] = props.value;

  useEffect(() => {
    setTheme({
      font: font,
      color: color,
    });
  }, [font, color]);

  const style = {
    fontFamily: font[0].value,
    textAlign: 'center',
    fontSize: 30,
  };

  return (
    <Tippy
      interactive
      arrow={true}
      animation="scale"
      duration={0}
      delay={[100, 0]}
      trigger="click"
      content={
        <Tooltip font={[font, setFont]} color={[color, setColor]} {...props} />
      }
    >
      <input
        {...props}
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{ ...style, fonFamily: theme.font, color: theme.color }}
      />
    </Tippy>
  );
};

export default Input;
