import * as React from 'react';
import { Item } from './ItemTodo';

export function List(pros) {
  console.log('QQQ' + pros.items);
  return (
    <ul>
      {pros.items.map((item, index) => (
        <Item key={index} item={item} onClick={pros.onItemClick(index)} />
      ))}
    </ul>
  );
}
