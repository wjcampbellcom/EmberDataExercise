import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({

  host: "https://local.fundycentral.com:8443",
  headers: Ember.computed(function() {
    return {
      "access_token": Ember.get(document.cookie.match(/access_token\=([^;]*)/), "1"),
    };
  }).volatile()

});
