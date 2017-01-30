import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        deleteLibrary(library) {
            let confirmation = confirm('Are you sure?');
            if (confirmation) {
                library.destroyRecord();
            }
        }
    }
});
