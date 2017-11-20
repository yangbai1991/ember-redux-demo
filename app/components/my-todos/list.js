import Ember from 'ember';
import { connect } from 'ember-redux';
import { query } from '../../actions/todos';

const stateToComputed = state => ({
  items: state.todo.items,
  noItems: state.todo.items.filter(item => item.name.indexOf(state.todo.filter) > -1).length <= 0,
  loading: state.todo.loading
});

const dispatchToActions = { query };

// const dispatchToActions = dispatch => {
//   return {
//     loading: () => {
//       dispatch({ type: 'LOADING' });
//       return new Ember.RSVP.Promise(resolve => {
//         Ember.run.later(() => {
//           dispatch({ type: 'QUERY' });
//           resolve();
//         }, 600);
//       });
//     }
//   };
// };

const App = Ember.Component.extend({
  tagName: 'ul',
  classNames: 'todo-list',

  didInsertElement() {
    this.actions.query()
  }
});

export default connect(stateToComputed, dispatchToActions)(App);
