import React, {PureComponent} from 'react';
import List from './components/List';
import Topic from './components/Topic';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import { actionCreators } from './store';

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt='' className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4592/3f2c19fc060675b7705f97e28d89b82dd32b926e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScollTop}><i className="iconfont top">&#xe62c;</i></BackTop> : null}
      </HomeWrapper>
    )
  }

  handleScollTop(){
    window.scrollTo(0,0);
  }

  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentsWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeHomeData(){
      dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow(){
      if(document.documentElement.scrollTop > 100){
        dispatch(actionCreators.taggleTopShow(true))
      } else {
        dispatch(actionCreators.taggleTopShow(false))
      }
    }
  }
}

export default connect(mapState,mapDispatch)(Home);