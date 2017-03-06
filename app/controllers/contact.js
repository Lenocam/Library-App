import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  message: '',
  responseMessage: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  validMessage: Ember.computed.gte('message.length', 5),

  unformattedAddress: Ember.computed.not('isValid'),
  shortMessage: Ember.computed.not('validMessage'),


//proerty disabling button must be true to disabled
  isDisabled: Ember.computed.or('unformattedAddress', 'shortMessage'),

  actions: {
    saveMessage() {
      const email = this.get('emailAddress');
      const message = this.get('message');

      const newMessage = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newMessage.save().then((response) => {
        this.set('responseMessage', `Thanks for your thoughts! We'll check'em out.`);
        this.set('message', '');
        this.set('emailAddress', '');
      });
    }
  }
});
