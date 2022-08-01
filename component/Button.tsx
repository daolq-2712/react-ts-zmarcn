import * as React from 'react';

export function Button(props) {
  return <button {...props}>{props.name}</button>;
}
