# Lec 1

React - ele = createElement
ReactDOM - createRoot ,root.render(ele)

Separation of concerns

async vs defer - async download and run immediately
defer - download and run after html parsing is completed

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

error browser scripts cannot have import and exprt -- > include attribute type="module" inside script tag

transpilation -- > convert syntax , single op(converted code) , compativbility
differential bundling --> creating multiple bundles as per versions
modern bundle and legacy bundle (compatibility + performance)

code --> Transpile --> Bundling --> Differential Bundling

command for creating production build --> npx parcel build index3.html

to support/provide compatible browsers , provide browserslist in package.json

cacheing works on /dist folder once the build is completed

"browserslist" : ["> 5% in IN" , "> 5% in US" , "last 2 chrome version"]
