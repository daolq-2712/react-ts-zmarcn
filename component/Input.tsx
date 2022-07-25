import * as React from 'react';

export function Input({ handleChange, type = 'text', placeHolder }) {
  return (
    <input type={type} placeholder={placeHolder} onChange={handleChange} />
  );
}
