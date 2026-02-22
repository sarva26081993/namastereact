import React from "react";
import ReactDOM from "react-dom/client";

const ele3 = <h1>Welcome to React Using JSX</h1>; //this is react element which is a object and not html element

console.log(ele3);

ReactDOM.createRoot(document.getElementById("root3")).render(ele3);

const MajorTitle = () => {
  return <h2> Major Component </h2>; //this is react functional component which is a function and returns react element
};

const Header = () => {
  return (
    <div>
      <h1>This is React Functional Component</h1>
      <MajorTitle />
    </div>
  ); //this is react functional component which is a function and returns react element
};

ReactDOM.createRoot(document.getElementById("root2")).render(<Header />);

const Ele4 = () => {
  const htmlWithAlert =
    "<img src='x' onerror='alert(\"🔥 UNSAFE EXECUTED 🔥\")' />";
  return (
    <div style={{ padding: "20px" }}>
      <h2>Normal JSX (Safe)</h2>
      <div>{htmlWithAlert}</div>

      <hr />

      <h2>dangerouslySetInnerHTML (Will Trigger Alert)</h2>
      <div dangerouslySetInnerHTML={{ __html: htmlWithAlert }} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Ele4 />);

/* Ele4 and code below it depict example of how cross site scripting can take place */
