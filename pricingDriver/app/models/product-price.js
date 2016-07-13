/**
 * Created by Bill on 7/7/2016.
 */

import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({

  productId: attr('string'),
  currencyId: attr('string'),
  productType: attr('string'),
  priceTypeId: attr('string'),
  priceTypeName: attr('string'),
  name: attr('string'),
  description: attr('string'),
  lastModified: attr('number'),
  price: attr('number'),
  currencyCode: attr('string'),
  currencyName: attr('string')

});
