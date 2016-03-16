import bunyan from 'bunyan';

const logLevels = process.env.NODE_ENV === 'local' ? 'trace' : 'warn';

const appLogger = bunyan.createLogger({ name: 'poopi-v2', levels: 'trace' });

export { appLogger };

export default name => {
  return appLogger.child({ widget_type: name });
};
