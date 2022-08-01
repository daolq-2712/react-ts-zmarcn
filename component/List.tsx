import * as React from 'react';
import { Item } from './ItemTodo';

export function List(pros) {
  return (
    <ul>
      {pros.items.map((item, index) => (
        <Item
          key={index}
          hidden={pros.hidden}
          item={item}
          onClick={() => pros.onItemClick(index)}
        />
      ))}
    </ul>
  );
}
