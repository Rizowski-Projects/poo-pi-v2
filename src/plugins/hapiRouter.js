import hapiRouter from 'hapi-router';

export default {
  register: hapiRouter,
  options: {
    routes: '../**/routes/*.js',
    cwd: __dirname
  }
};
