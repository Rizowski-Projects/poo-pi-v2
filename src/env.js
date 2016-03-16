
if(process.env.NODE_ENV === 'local'){
  process.env.DB_HOST = '';
  process.env.DB_DB = 'test';
}
