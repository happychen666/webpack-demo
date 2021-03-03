const { file, parse } = require('./globals.js')
console.log(file, parse)

function component() {
  const element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');

  // Assume we are in the context of `window`
  console.log("Hmmm, this probably isn't a great idea...");
  console.log(this);

  return element;
}

document.body.appendChild(component());

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => {
    console.log(
      "We retrieved some data! AND we're confident it will work on a variety of browser distributions."
    );
    console.log(json);
  })
  .catch((error) =>
    console.error('Something went wrong when fetching this data: ', error)
  );