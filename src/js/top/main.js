import 'regenerator-runtime/runtime';
import 'whatwg-fetch';
import { utils } from '../modules/utils';

utils();

async function start() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  // eslint-disable-next-line no-unused-vars
  const data = await response.json();
  // console.log(response.headers.get('Content-Type'));
  // console.log(response.headers.get('Date'));
  // console.log(response.status);
  // console.log(response.statusText);
}

start();
