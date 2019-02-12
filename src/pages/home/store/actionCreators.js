import axios from 'axios';
import { constants } from '/';
import { fromJS } from 'immutable';

const changeHomeData = (data) => ({
  type: constants.CJAMGE_HOME_DATA,
  topList: data.topicList,
  acticleList: data.acticleList,
  recoMMendList: data.recomMendList
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const data = res.data.data;
      dispatch(changeHomeData(data));
    })
  }
}

const addHomeList = (list, page) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  page
})

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const data = res.data.data.acticleList;
      dispatch(addHomeList(data, page+1))
    })
  }
}

export const taggleTopShow = (show) => ({
  type: constants.TOGGLE_TOP_SHOW,
  show
})
