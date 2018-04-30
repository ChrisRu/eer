import createSubComponent from './createSubComponent';

export default createSubComponent((type, cb) =>
  window.addEventListener(type, cb)
);
