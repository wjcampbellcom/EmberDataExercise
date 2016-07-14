import Ember from 'ember';

export default Ember.Route.extend({

  model (){

    return Ember.RSVP.hash({
      partners :  this.store.query('user', {"userType":"PARTNER"}),
      currencies: this.store.findAll('currency'),
    });


  }

});
