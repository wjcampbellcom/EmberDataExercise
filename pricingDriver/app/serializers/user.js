import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeQueryResponse(store, clazz, payload) {
    payload = {"users" : payload}
    return this._super(store, clazz, payload);
  }

});
