import _ from 'lodash';
import Miao from './miao.jpg';
//import css
import './css/a.css'


import Data from './data.xml';
import Notes from './data.csv';

import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  //增加图片资源
  const myImage = new Image();
  myImage.src = Miao
  element.appendChild(myImage);

  console.log(Data);
  console.log(Notes);

  return element;

}

document.body.appendChild(component());

export let DEV_SERVER = 'DEV_SERVER test';