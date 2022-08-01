import * as React from 'react';
import { Button } from './Button';

export function Item(pros) {
  return (
    <div>
      <li>
        {pros.item} <Button name="Update" onClick={pros.onClickUpdate} />
        <Button name="Delete" onClick={pros.onClickDelete} />
      </li>
    </div>
  );
}
