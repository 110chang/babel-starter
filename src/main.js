
'use strict';

//main.js

import Clazz from './clazz.js';

class Main {
  constructor() {
    this.clazz = new Clazz();
    const msg = this.clazz.works();

    if (document) {
      const p = document.createElement('p')
      p.innerHTML = msg;
      document.getElementsByTagName('body')[0].appendChild(p);
    } else {
      console.log(msg);
    }
  }
}

new Main();