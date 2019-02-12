import React, {PureComponent} from 'react';
import {RecommendWrapper, RecommendItem} from '../style'
import { connect } from 'react-redux';

class Recommend extends PureComponent {
  render() {
    const { imgList } = this.props;
    return (
      <RecommendWrapper>
      {
        imgList.map((item) => (
          <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
        ))
      }
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    imgList: state.getIn(['home', 'recomMendList'])
  }
}

export default connect(mapState, null)(Recommend);