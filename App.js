// const heading = React.createElement("h1", {
//     id: 'heading'
// }, "Hello World")

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id : "child"}, 
      [  React.createElement("h1", {}, "I am Vishu"),
        React.createElement("h1", {}, "I am Rishu")
    ])
  )
    

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Vishwajeet1707/namaste-react.git
git push -u origin main