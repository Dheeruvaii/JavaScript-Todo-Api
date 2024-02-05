// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import logo from "././assets/logo192.png";
import React from "react";
import TodoApp from "./components/todoapp";
import "./App.css";
import ImgComponent from "./components/ImgComponent";

function App() {
  const styles = { height: "150px", width: "100px", backgroundColor: "black" , marginLeft:"900px"};
  return (
    <div className="App" style={{ backgroundColor: "violet " }}>
      <ImgComponent img={logo} times={10} css={styles} />
      <TodoApp />
    </div>
  );
}
export default App;
