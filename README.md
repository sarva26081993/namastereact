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
