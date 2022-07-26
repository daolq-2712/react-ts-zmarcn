import * as React from 'react';

export function Button(props) {
  return (
    <button type={props.type} onClick={props.onClick}>
      {props.name}
    </button>
  );
}
