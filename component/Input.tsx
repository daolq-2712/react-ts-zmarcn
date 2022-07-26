import * as React from 'react';

export function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeHolder}
      onChange={props.onChange}
    />
  );
}
