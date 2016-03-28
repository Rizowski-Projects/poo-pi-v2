import ui from 'hapi-swaggered-ui';
import pkg from '../../package';
import _ from 'lodash';

const key = process.env.CRUD_AUTH;

export default {
  register: ui,
  options: {
    title: _.startCase(pkg.name),
    path: '/docs',
    swaggerOptions: {
      docExpansion: 'list'
    },
    authorization: {
      scope: 'header',
      field: 'api-key',
      defaultValue: key
    }
  }
};
