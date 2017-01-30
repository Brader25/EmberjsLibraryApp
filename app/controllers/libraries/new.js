import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {

        saveLibrary(newLibrary) {
            newLibrary.save().then(() => this.transitionToRoute('libraries'));
        },

        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
        }
    }
});
