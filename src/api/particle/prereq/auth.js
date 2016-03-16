import _ from 'lodash';
import boom from 'boom';

export default {
  assign: 'authorization-check',
  method: (req, next) =>{
    let auth = req.headers.authorization;
    let savedAuth = process.env.AUTHED;
    if(!savedAuth){
      return next(boom.unauthorized());
    }
    let db = JSON.parse(savedAuth);
    let result = _.includes(db, auth);
    if(result){
      return next();
    }
    return next(boom.unauthorized());
  }
}
