import _ from 'lodash';
// import { APP} from './app.js'
import { adminApp } from './adminApp.js'

//import css
import './css/a.css'
// import Styles from 'style-loader!css-loader?modules!./css/a.css';
import { hello } from './ts/a.ts'
function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
console.log(hello, adminApp);

export let DEV_SERVER = 'DEV_SERVER test';