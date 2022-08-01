import * as React from 'react';

export function Button(props) {
  console.log('QQQQ' + props.hidden);
  return (
    <button type={props.type} onClick={props.onClick} hidden={props.hidden}>
      {props.name}
    </button>
  );
}
