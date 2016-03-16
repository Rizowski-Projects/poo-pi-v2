import ui from 'hapi-swaggered-ui';
import pkg from '../../package';
import _ from 'lodash';

export default {
  register: ui,
  options: {
    title: _.startCase(pkg.name),
    path: '/docs',
    swaggerOptions: {
      docExpansion: 'list'
    }
  }
};
