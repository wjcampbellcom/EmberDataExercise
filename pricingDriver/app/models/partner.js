import User from './user';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
 //import { belongsTo, hasMany } from 'ember-data/relationships';

export default User.extend({
  supportedCurrencies : DS.hasMany('currency')
});
