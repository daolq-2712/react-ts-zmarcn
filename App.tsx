import * as React from 'react';
import './style.css';
import { Input } from './component/Input';
import { Button } from './component/Button';
import { List } from './component/List';

export default function App() {
  // Add
  const [todos, setTodos] = React.useState([]);
  const value = React.useRef(null);

  // Search
  const valueSearch = React.useRef(null);
  const [todoResults, setTodoResults] = React.useState([]);

  const handleTexInputChange = (event) => {
    value.current = event.target.value;
  };

  const handleSubmitAdd = (event) => {
    event.preventDefault();

    if (value.current == '') {
      return;
    }

    const newTodos = [...todos, value.current];
    setTodos(newTodos);

    value.current = '';
    event.target.reset();
  };

  const handleReset = () => {
    value.current = '';
  };

  const handleSearchReset = () => {
    valueSearch.current = '';
    setTodoResults([]);
  };

  const handleTexInputSearchChange = (event) => {
    valueSearch.current = event.target.value;
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();

    if (valueSearch.current == '') {
      return;
    }

    console.log(todos);
    const newTodos = todos.filter((item) => item.includes(valueSearch.current));
    setTodoResults(newTodos);
  };

  // Item
  const handleItemDeleteItem = (index) => {
    const newTodos = todos.filter((_, itemIndex) => itemIndex !== index);

    setTodos(newTodos);
  };

  return (
    <div>
      <form onSubmit={handleSubmitAdd}>
        <Input
          placeHolder="Type your todo"
          ref={value}
          type="text"
          onChange={handleTexInputChange}
        />
        <Button type="submit" name="Submit" />
        <Button type="reset" name="Reset" onClick={handleReset} />
      </form>
      <div hidden={todos.length == 0}>
        <h3>List Todo</h3>

        <div>
          <List
            items={todos}
            onItemClick={(index) => handleItemDeleteItem(index)}
          />
        </div>

        <hr></hr>

        <form onSubmit={handleSubmitSearch}>
          <Input
            ref={valueSearch}
            type="search"
            onChange={handleTexInputSearchChange}
            placeholder={`Search`}
          />
          <Button type="submit" name="Search" />
          <Button type="reset" name="Reset" onClick={handleSearchReset} />
        </form>

        <h3 hidden={todoResults.length == 0}>List Result</h3>
        <div>
          <List items={todoResults} hidden={true} />
        </div>
      </div>
    </div>
  );
}
