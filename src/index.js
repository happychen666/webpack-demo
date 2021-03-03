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