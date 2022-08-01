import * as React from 'react';
import './style.css';
import { Input } from './component/Input';
import { Button } from './component/Button';
import { List } from './component/List';

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const value = React.useRef(null);

  const handleTexInputChange = (event) => {
    value.current = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodos = [...todos, value.current];
    setTodos(newTodos);

    value.current = '';
    event.target.reset();
  };

  const handleReset = () => {
    value.current = '';
  };

  const handleItemDelete = (index) => {
    const newTodos = todos.filter((_, itemIndex) => itemIndex !== index);

    setTodos(newTodos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          placeHolder="Type your todo"
          ref={value}
          onChange={handleTexInputChange}
        />
        <Button type="submit" name="Submit" onClick={handleSubmit} />
        <Button type="reset" name="Reset" onClick={handleReset} />
      </form>
      <div>
        <List items={todos} onItemClick={(index) => handleItemDelete(index)} />
      </div>
    </div>
  );
}
