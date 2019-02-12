import React, {PureComponent} from 'react';
import {DetaiWrapper, Header, Content} from './style';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';

class Detail extends PureComponent {
  render() {
    const { title, content} = this.props;
    return (
      <DetaiWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html:content}}/>
      </DetaiWrapper>
    )
  }
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id);
  }
}
const mapState = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetail(id));
    }
  }
}

export default connect(mapState, mapDispatch)(withRouter(Detail));