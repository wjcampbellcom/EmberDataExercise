import Model from 'ember-data/model';
 import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({

  vendorId: attr('string'),
  productType: attr('string'),
  name: attr('string'),
  description: attr('string'),
  lastModified: attr('number'),
  active: attr('boolean'),
  direct: attr('boolean'),
  basePrice: attr('number'),
  spreadPrice: attr('number'),
  calculatePerSpread: attr('boolean'),
  thumbUrl: attr('image-url'),
  thumbLastModified: attr('number'),
  fileUrl: attr('string'),
  fileLastModified: attr('number'),
  groupTag: attr('string'),
  vendorCode: attr('string'),
  notes: attr('string'),

  thumbImage: attr(),
  templateImage: attr(),

});
