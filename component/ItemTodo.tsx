import * as React from 'react';
import { Button } from './Button';

export function Item(pros) {
  return (
    <div>
      <li>{pros.item} <Button name = "Delete" onClick = {pros.onClick}/></li>
    </div>
  );
}
