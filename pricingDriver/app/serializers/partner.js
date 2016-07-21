import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeQueryResponse(store, clazz, payload) {
    payload = this.normalizePartnersPayload(payload);
    var response = this._super(store, clazz, payload);
    return response;
  },

  normalizeQueryRecordResponse (store, primaryModelClass, payload, id, requestType){
    var response;
    if (payload.partner) {
      response = this._super(store, primaryModelClass, payload, id, requestType);
      return response;
    }
    payload = this.normalizePartnerPayload(payload);
    response =  this._super(store, primaryModelClass, payload, id, requestType);
    return response;
  },

  normalizeSingleResponse (store, primaryModelClass, payload, id, requestType){
    var response;
    if (payload.partner) {
      response = this._super(store, primaryModelClass, payload, id, requestType);
      return response;
    }

    payload = this.normalizePartnerPayload(payload);
    response = this._super(store, primaryModelClass, payload, id, requestType);
    return response;
  },

  normalizeFindAllResponse (store, primaryModelClass, payload, id, requestType){
    payload = this.normalizePartnersPayload(payload);
    var response = this._super(store, primaryModelClass, payload, id, requestType);
    return response;
  },

  normalizePartnersPayload (payload){
    for (var i=0; i < payload.length; i++){
      var currencies = payload[i].supportedCurrencies;
      var supportedCurrencies = [];
      for (var i2 =0; i2 < currencies.length; i2++){
        var currency = currencies[i2];
        currency.type = "currency";
        var currencyObj = {"currency" : currency}
        supportedCurrencies.push(currencyObj);
       // console.log(currency);
      }
      payload.supportedCurrencies = supportedCurrencies;
    }
    payload = {"partners" : payload};
    return payload;
  },

  normalizePartnerPayload (payload){
    if (payload.partner){
       return payload;
    }
    var currencies = payload.supportedCurrencies;
    var supportedCurrencies = [];
    for (var i2 =0; i2 < currencies.length; i2++){
        var currency = currencies[i2];
        currency.type = "currency";
       // var currencyObj = {"currency" : currency};
        supportedCurrencies.push(currency);
        // console.log(currency);
    }
    payload.supportedCurrencies = supportedCurrencies;
    payload = {"partner" : payload};
      return payload;
  },

  normalizeFindHasManyResponse (store, primaryModelClass, payload, id, requestType){
    this._super(store, primaryModelClass, payload, id, requestType);
  }


});
