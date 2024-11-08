import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";

// function App() {
//   let date = new Date(); //декларативный
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
//         {date.getFullYear()}
//       </header>
//     </div>
//   ); //декларативный
// }

function App() {
  let date = new Date();
  return createElement(
    "div",
    { className: "App" },
    createElement(
      "header",
      { className: "App-header" },
      createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
      createElement(
        "p",
        null,
        "Edit ",
        createElement("code", null, "src/App.js"),
        " and save to reload."
      ),
      createElement(
        "a",
        {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        "Learn React"
      ),
      date.getFullYear()
    )
  );
}

export default App;
