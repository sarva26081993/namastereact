# Lec 1

React - ele = createElement
ReactDOM - createRoot ,root.render(ele)

Separation of concerns

async vs defer

- async download and run immediately
- defer - download and run after html parsing is completed

React element is nothing but JS objects

render understands the ele, which is an JS object and constructs html element from it

With React.createElement , its hard to handle nested element

# Lec 2

Vite / Parcel / Webpack - Bundlers

2 types of dependencies --> Core and Dev dependencies

Versioning Range -- Major.Minor.Patch

^ == Minor + Patch can be updated
~ == only patch can be updated

package.json --> information of Requested version of package/dependencies
package-lock.json --> exact version of installed package + info about request version

.gitignore --> add files/folders which are not intended to go on github / gitlab
.

parcel -- parceljs.org -- >
Parcel is a build tool

npm i -- > install a package

npm x parcel -- > Execute a package

tasks performed by Parcel --> HMR, Transpiling, bundling , tree shaking, differential bundling , minimizing, compression , create localhost , create distributable , code splitting , consistent hashing, HTTPS mode , cacheing

import React from "react";
import ReactDOM from "react-dom"

error browser scripts cannot have import and export -- > include attribute type="module" inside script tag

transpilation -- > convert syntax , single op(converted code) , compatibility
differential bundling --> creating multiple bundles as per versions
modern bundle and legacy bundle (compatibility + performance)

code --> Transpile --> Bundling --> Differential Bundling

command for creating production build --> npx parcel build index3.html

to support/provide compatible browsers , provide browserslist in package.json

cacheing works on /dist folder once the build is completed

"browserslist" : ["> 5% in IN" , "> 5% in US" , "last 2 chrome version"]

https://chatgpt.com/c/69948376-76d8-8323-8068-94b79efcc49e
https://chatgpt.com/c/6994a775-9360-8322-b5f3-c0ba80e037fe
https://chatgpt.com/c/6994a59d-b224-8321-b9e2-6230d9acde5b

# Lec 3

JSX --

React can be written even without JSX but becomes complicated

JSX is easier to write than to use React.createElement and ReactDOM.createRoot

JSX --> convention for merging html and js

JSX is NOT HTML inside javascript
JSX is HTML-like or XML-like syntax

---

const ele = <h1 id="header">Welcome to JSX</h1>
and
ele = React.createElement("h1" , { id:"header"} , "Welcome to JSX")

both above are same

Parcel (who uses Babel ) transpiles JSX into React.createElement syntax of core React

so JSX is just a syntactic sugar over React.createElement

JSX --------Transpiled (by Babel(Babel is transitive dependency of Parcel))-------> React.createElement syntax
Babel is JS package(npm)

---

Babel -->
babeljs.io

---

in JSX , we do not provide class, we provide className

In JSX , we use camelcase

const ele = <h1> Welcome to JSX <h1> //Valid JSX

const ele = (<h1>
Welcome to JSX

</h1>)     // valid jsx for multiline jsx

---

React Components : everything in react is a component

React has 2 types of components : 1. Class Based Components(Old) 2. Functional Components(New)

React Component must be create with name starting with Uppercase letter (always)

Syntax for React Functional Component :

const HeaderComponent = () => {
return <h1>Welcome to React Functional Component</h1>;
}

<h1>Welcome to React Functional Component</h1>  --> This is a JSX(react element)

so basically React Component is a JS function which returns JSX / React Element

const fn = () => true; //single line return doesnt require explicit return statement

const fn2 = () => {return true;} // same as fn

const fn3 = () => (<h1> Welcome to JSX </h1>);

const fn4 = () => return <h1> Welcome to JSX </h1>;

const fn5 = () => return <h1> Welcome to JSX </h1>; fn3 fn4 and fn5 are same

JSX can even be wrapped inside container like div
example :

const fn6 = () => (

    <div className="header"><h1>Welcome to JSX </h1></div>

## )

---

React element :

const heading = (<h1 className="header">This is react element</h1>)
above element can be rendered as root.render(heading);

React Functional Component :
const Heading = () => (<h1 className="header">This is react element</h1>)
above functional component can be rendered as root.render(<Heading />)

---

Nesting Components/ Component Composition :

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

---

Different syntax for creating functional component

const Title = function(){
return (<h1>Welcome to new functional component</h1>);
}

---

Running JS expression inside react element and react component

const name = "Sarvajeet"

const Title = function(){
return (<h1>Welcome to new functional component {name}</h1>);
}

const Title = function(){
return (<h1>Welcome to new functional component {100\*200}</h1>);
}

const Title = function(){
return (<h1>Welcome to new functional component {console.log("Welcome to jsx")}</h1>);
}

Even react element can be nested inside react element

    const name = (<p>Sarvajeet</p>);

    const title = (<h1>Welcome to course {name}</h1>)
    *Note - Ensure components are initialized properly before using them, as this is javascript const declarations

---

Cross Site Scripting

How JSX handles cross site scripting?
JSX sanitizes data being received from 3rd party APIs

Escaping means converting special characters into safe text so the browser does NOT treat them as HTML or JavaScript.

<script>alert("Hacked")</script>    // cross site scripting

const userInput = "<script>alert('Hacked')</script>";
const element = <div>{userInput}</div>;

so in above example, browser sees <script>alert('Hacked')</script> as plaintext

Exception :

Exception for above scenario is dangerously inserted HTML

for example :

if we write

Javascript

````javascript
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
```javascript```

Please note : JavaScript runs only when:
It’s inside a <script> tag parsed normally
It’s inside an HTML attribute that executes code
It’s triggered by an event

---

### Different syntaxes of components

1. <Title> </Title>  is same as   <Title />
2. {Title()}

all above are same
````
