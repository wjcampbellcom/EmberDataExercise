import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeFindAllResponse (store, primaryModelClass, payload, id, requestType){
    payload = {"currencies" : payload};
    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  normalizeQueryResponse(store, clazz, payload) {
    payload = {"currencies" : payload};
    return this._super(store, clazz, payload);
  }

});
