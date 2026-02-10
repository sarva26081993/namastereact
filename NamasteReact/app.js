const ele = React.createElement(
  "h2",
  { id: "heading" },
  "Welcome to React page3",
);
const root = ReactDOM.createRoot(document.getElementById("root")).render(ele);

console.log(ele);
