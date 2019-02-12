import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends PureComponent {
  render() {
    const {handle,list} = this.props;
    return (
      <TopicWrapper>
      {
        list.map((item)=>(
          <TopicItem key={item.get('id')}>
            <img 
              alt = ''
              onClick={()=>handle(list)}
              className='top-pic'
              src={item.get('imgUrl')}
            />
            {item.get('title')}
          </TopicItem>
        ))
      }
      </TopicWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'topicList']),
  }
};

const mapDispatch = () => {
  return{
    handle(list){
      console.log(list)
    }
  }
}
export default connect(mapState, mapDispatch)(Topic);