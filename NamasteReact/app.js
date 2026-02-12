const ele = React.createElement(
  "h2",
  { id: "heading" },
  "Welcome to React page3",
);

ReactDOM.createRoot(document.getElementById("root")).render(ele);

console.log(ele);

const ele2 = React.createElement("h1", { id: "child1" }, [
  "I am h2 tag",
  "I am h2 tag",
]);

ReactDOM.createRoot(document.getElementById("root2")).render(ele2);
