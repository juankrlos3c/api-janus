import * as Joi from '@hapi/joi';

export default Joi.object({
  MONGO_URI: Joi.string().required(),
});
