// src/TodoApp.js
import React, { useState } from "react";
import TodoList from "./todolist";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };
  const handleKeyPress = (event) => {
    setInput(event.target.value);
    console.log("Onchnage");
    if (event.key === "Enter") {
      addTodo();
    }
  };

  const handleEnterPress = (event) => {
    event.key === "Enter" && addTodo();
    console.log(event.keyCode, "event keyCode");
    console.log(event.key, "event key");
  };

  const deleteTodo = (index) => {
    // Create a new array without the todo at the specified index
    console.log("index", index);
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="Todos">
      <h1>
        ToDo APP<br></br>
        THIS IS MY FIRST REACT PROJECT
        {/* <ImgComponent /> */}
      </h1>

      <input
        type="text"
        value={input}
        onChange={(event) => handleKeyPress(event)}
        onKeyDown={(event) => handleEnterPress(event)}
      />
      <button onClick={addTodo}>Add Todo </button>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;

// ReactDOM.render(<TodoApp />, document.getElementById('root'));
