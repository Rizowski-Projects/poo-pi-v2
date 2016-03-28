
if(process.env.NODE_ENV === 'local'){
  process.env.DB_HOST = 'docker.dev';
  process.env.DB_DB = 'test';
  process.env.DB_PORT = 32772;
}
