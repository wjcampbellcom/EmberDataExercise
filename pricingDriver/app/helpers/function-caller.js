import Ember from 'ember';

export function functionCaller([scope, fn]) {
  let args = arguments[0].slice(2);
  let res = fn.apply(scope, args);
  return res;
}

export default Ember.Helper.helper(functionCaller);
