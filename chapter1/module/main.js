/**
 * Created by shuiqin on 9/27/17.
 */
//import {PI, hello, person} from './hello';

import * as util from './hello';
console.log(util.PI);
module.exports = function () {
  console.log('This is a message from the demo package');
};