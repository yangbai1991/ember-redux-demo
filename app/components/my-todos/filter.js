import Ember from 'ember';
import { connect } from 'ember-redux';
import { query } from '../../actions/todos';

const dispatchToActions = { query };

const App = Ember.Component.extend({
  classNames: ['filter']
});

export default connect(null, dispatchToActions)(App);
