import React from 'react';

// Describe functional Component 
const TodoList=({todos, deleteTodo})=> {

  


  // Return JSX that represents the rendered output of the component
  return (
   <div className='ul_div'>
     <ul>
      {/* Map through the "todos" array and render a list item for each todo */}
      {todos.map((todo, index) => (
        <li className='' key={index}>{todo}
        <button onClick={() => deleteTodo(index)}> Delete</button>
        </li>
      ))}
    </ul>
   </div>
  );
};

// / return or export todo modules
export default TodoList;
