import joi from 'joi';

export default joi.string().regex(/male|female|other/).label('gender');
