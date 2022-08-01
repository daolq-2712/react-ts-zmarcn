import * as React from 'react';

export function Button(props) {
  return (
    <button type={...props}>
      {props.name}
    </button>
  );
}
