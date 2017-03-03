import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  validMessage: Ember.computed.gte('message.length', 5),

  notYet: Ember.computed.not('isValid'),
  notNow: Ember.computed.not('validMessage'),


//Why does this work with "or" but not "and"
  isDisabled: Ember.computed.or('notYet', 'notNow'),

  actions: {
    sendMessage() {
      alert(`Sending your heart felt message: ${this.get('message')} from ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thanks for your thoughts! We'll check'em out.`);
      this.set('message', '');
      this.set('emailAddress', '');
    }
  }
});
