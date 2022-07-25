import * as React from 'react';
import './style.css';
import { Input } from './component/Input';
import { Button } from './component/Button';
import { List } from './component/List';

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const value = React.useRef('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodos = [...todos, value.current];
    setTodos(newTodos);

    // clear all input values in the form
    event.target.reset();
  };

  const handleOnChange = (event) => {
    value.current = event.target.value;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input placeHolder="Type your todo" handleChange={handleOnChange} />
        <Button type="submit">Submit</Button>
      </form>
      <div>
        <List items={todos} />
      </div>
    </div>
  );
}
