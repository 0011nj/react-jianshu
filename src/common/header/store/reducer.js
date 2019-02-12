import { constants } from '/';
import { fromJS } from 'immutable';

// immutabla对象不可变，get(),set()
const defaultState =fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.SEARCH_FOCUS:
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.CHANGE_PAGE:
      return state.set('page', action.page);
    default: 
      return state;
  }
}