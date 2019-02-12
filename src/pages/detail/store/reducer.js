import { fromJS } from 'immutable';
import { constants } from '/';
// immutabla对象不可变，get(),set()
const defaultState =fromJS({
  title: '',
  content: ''
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state;
  }
}