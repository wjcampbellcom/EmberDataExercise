import Ember from 'ember';

export default Ember.Route.extend({

  model (id){
    return Ember.RSVP.hash({
      lab :  this.store.queryRecord('user', id),
      currencies: this.store.findAll('currency'),
    });
  }

});
