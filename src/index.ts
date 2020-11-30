// Importing all the styles from index.scss
//
// You don't need this now
import './index.scss';

let i: number;

setInterval(() => {
  i++;

  document.getElementById('headerID').innerHTML = `Seconds since load ${i}`;

  throw new Error("Some error");
}, 1000);
