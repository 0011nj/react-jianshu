import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as logInActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom';
import {
  HeaderNav,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoValue,
  SearchInfoChange,
  SearchInfoItem,
  Addition,
  Button
} from './style';


class Header extends PureComponent {
  render() {
    const { focused, handleInputFocus, handInputBlur, list, login, logout } = this.props;
    return (
      <HeaderNav>
        <HeaderWrapper>
          <Link to='/'><Logo /></Link>
          <Nav>
            <NavItem className='left active'>
              <i className="iconfont">&#xe627;</i>
              首页
            </NavItem>
            <NavItem className='left'>下载App</NavItem>
            {
              login ? 
                <NavItem className='right' onClick={logout}>退出</NavItem> : 
                <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
            }
            
            <NavItem className='right'>
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={500}
                classNames="slide"
              >
                <NavSearch
                  className={focused ? 'focused' : ''}
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handInputBlur}
                ></NavSearch>
              </CSSTransition>
                <i
                  className={focused ? 'iconfont focused zoon' : 'iconfont zoon'}
                >&#xe623;</i>
                {this.getListArea()}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to='/write'>
              <Button className='writting'>
                <i className="iconfont">&#xe6a5;</i>
                写文章
              </Button>
            </Link>
            {
              login ? null : <Button className='reg'>注册</Button>
            }
          </Addition>
        </HeaderWrapper>
      </HeaderNav>
    )
  }

  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handleMuseEnter, handleMouseLeave, handleChangeList } = this.props;
    const newlist = list.toJS();
    const pageList = [];

    if(newlist.length){
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={i}>{newlist[i]}</SearchInfoItem>
        )
      }
    }
    if(focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMuseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            <SearchInfoValue>热门搜索</SearchInfoValue>
            <SearchInfoChange onClick={() => handleChangeList(page, totalPage, this.spin)}>
              <i ref={(icon) => {this.spin = icon}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoChange>
          </SearchInfoTitle>
          <div>
          {pageList}
          </div>
        </SearchInfo>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
     focused: state.getIn(['header', 'focused']),
     list: state.getIn(['header', 'list']),
     page: state.getIn(['header', 'page']),
     totalPage: state.getIn(['header', 'totalPage']),
     mouseIn: state.getIn(['header', 'mouseIn']),
     login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeList(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if(originAngle) {
        originAngle = parseInt(originAngle, 10)
      }else{
        originAngle = 0;
      };
      spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';
      if(page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleMuseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    logout() {
      dispatch(logInActionCreators.logout());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);