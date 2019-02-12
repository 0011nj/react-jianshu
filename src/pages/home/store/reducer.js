import { fromJS } from 'immutable';
import { constants } from '/';
// immutabla对象不可变，get(),set()
const defaultState =fromJS({
  topicList: [],
  acticleList: [],
  recomMendList: [],
  acticlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topList),
    acticleList: fromJS(action.acticleList),
    recomMendList: fromJS(action.recoMMendList)
  });
}
const addAricleList = (state, action) => {
  return state.merge({
    acticleList: state.get('acticleList').concat(action.list),
    acticlePage: action.page
  });
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CJAMGE_HOME_DATA:
      return changeHomeData(state, action)
    case constants.ADD_ARTICLE_LIST:
      return addAricleList(state, action)
    case constants.TOGGLE_TOP_SHOW:
      return state.set('showScroll', action.show)
    default:
      return state;
  }
}