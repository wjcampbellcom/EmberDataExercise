import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('assignPrice');
  this.route('defineCurrency');
  this.route('assignCurrency');
  this.route('definePriceType');
});

export default Router;
