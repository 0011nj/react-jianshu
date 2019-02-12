import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render() {
    const {list, handleGetList, page} = this.props
    return (
      <div>
      {
        list.map((item,index) => (
          <Link key={index} to={'/detail/' + item.get('id')}>
            <ListItem>
              <img alt='ghfghg' className='pic' src={item.get('imgUrl')}/>
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          </Link>
        ))
      }
      <LoadMore onClick={() => handleGetList(page)}>加载更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'acticleList']),
    page: state.getIn(['home', 'acticlePage'])
  }
};

const mapDispatch = (dispatch) => {
  return{
    handleGetList(page){
      dispatch(actionCreators.getMoreList(page));
    }
  }
}

export default connect(mapState, mapDispatch)(List);