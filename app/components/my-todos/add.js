import Ember from 'ember';
import { connect } from 'ember-redux';
import { add } from 'redux-demo/actions/todos';

const dispatchToActions = { add };

const App = Ember.Component.extend({
  text: '',

  actions: {
    clearText() {
      this.set('text', '');
    }
  }
});

export default connect(null, dispatchToActions)(App);
