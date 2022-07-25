import * as React from 'react';
import { Item } from './ItemTodo';

export function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => {
        <Item key={index} item={item} />;
      })}
    </ul>
  );
}
