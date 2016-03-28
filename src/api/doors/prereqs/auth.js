import _ from 'lodash';
import boom from 'boom';

export default {
  assign: 'door-auth',
  method: (req, next) =>{
    let auth = req.headers.authorization;
    let savedAuth = process.env.CRUD_AUTH;
    if(!savedAuth){
      return next(boom.unauthorized());
    }
    if(savedAuth === auth){
      return next();
    }
    return next(boom.unauthorized());
  }
}
