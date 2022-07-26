import * as React from 'react';
import './style.css';
import { Input } from './component/Input';
import { Button } from './component/Button';
import { List } from './component/List';

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [value, setvalue] = React.useState('');

  const handleTexInputChange = (event) => {
    setvalue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodos = [...todos, value];
    setTodos(newTodos);

    setvalue('');
  };

  const handleReset = () => {
    setvalue('');
  };

  const handleItemDelete = (index) => {
    const newTodos = todos.filter((_, itemIndex) => itemIndex !== index);

    setTodos(newTodos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input placeHolder="Type your todo" onChange={handleTexInputChange} />
        <Button type="submit" name="Submit" onClick={handleSubmit} />
        <Button type="reset" name="Reset" onClick={handleReset} />
      </form>
      <div>
        <List items={todos} onItemClick={handleItemDelete} />
      </div>
    </div>
  );
}
