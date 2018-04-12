import generateSub from './sub';

export default generateSub((type, cb) => window.addEventListener(type, cb));
