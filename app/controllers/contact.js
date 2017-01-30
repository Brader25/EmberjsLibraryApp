import Ember from 'ember';

export default Ember.Controller.extend({
    message: '',
    emailAddress: '',
    isDisabled: Ember.computed('emailAddress', 'message', function () {
        if (this.emailAddress.includes('@') && this.message.length > 5) {
            return false;
        } else {
            return true;
        }
    }),
    actions: {
        sendMessage() {
            alert(`Sending message to ${this.get('emailAddress')}`);
            this.set('responseMessage', `Email sent successfully to ${this.get('emailAddress')}`);
        }
    },
});