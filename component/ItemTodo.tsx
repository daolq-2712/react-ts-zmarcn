import * as React from 'react';
import { Button } from './Button';

export function Item(pros) {
  console.log(pros.hidden);
  return (
    <div>
      <li>
        {pros.item}
        <Button hidden={pros.hidden} name="Delete" onClick={pros.onClick} />
      </li>
    </div>
  );
}
