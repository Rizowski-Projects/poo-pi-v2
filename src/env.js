
if(process.env.NODE_ENV === 'local'){
  process.env.DB_HOST = 'docker.dev';
  process.env.DB_DB = 'test';
  process.env.DB_PORT = 32770;

  process.env.CRUD_AUTH = '67fa8d52-0d46-489c-99cd-a50374748bd7';
  process.env.AUTHED = '["Bearer afa63f3b026fad416f020e321552143a42ec9aa9"]';
}
