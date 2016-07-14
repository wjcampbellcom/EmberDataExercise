import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({

  userType: attr('string'),
  email: attr('string'),
  password: attr('string'),
  userSalt: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  active: attr('boolean'),
  direct: attr('boolean'),
  companyName: attr('string'),
  createdDate: attr('number'),
  lastModified: attr('number'),
  lastLogin: attr('number'),

});
