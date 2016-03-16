import good from 'good';
import goodConsole from 'good-console';

export default {
  register: good,
  options: {
    opsInterval: 5000,
    requestHeaders: true,
    reporters: [{
      reporter: goodConsole,
      events: {
        response: '*',
        log: '*',
        error: '*'
      }
    }]
  }
};
