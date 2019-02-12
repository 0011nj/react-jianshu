import axios from 'axios';
import { constants } from '/';

const changeDetail = (title, content) =>({
  type: constants.CHANGE_DETAIL,
  title,
  content
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const data = res.data.data;
      dispatch(changeDetail(data.title, data.content))
    })
  }
}