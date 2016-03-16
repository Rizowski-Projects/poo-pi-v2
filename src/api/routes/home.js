
export default {
  method: 'GET',
  path: '/',
  handler: (req, res) =>{
    res().redirect('/docs');
  }
};
