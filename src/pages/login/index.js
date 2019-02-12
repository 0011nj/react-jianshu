import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LogInBox, Input, Button, LogInTitle, LogInSignUp, LogInSignIn } from './style';
import { Link, Redirect } from 'react-router-dom';
import { actionCreators } from './store';

class LogIn extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if(!loginStatus) {
      return (
        <LoginWrapper>
          <Link to='/'>
            <img alt='' src='//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png' />
          </Link>
          <LogInBox>
            <LogInTitle>
              <LogInSignIn>登陆</LogInSignIn>
              <b>·</b>
              <LogInSignUp>注册</LogInSignUp>
            </LogInTitle>
            <Input placeholder='账号' ref={(input) => {this.account=input}}/>
            <Input placeholder='密码' type='password' ref={(input) => {this.password=input}}/>
            <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
          </LogInBox>
        </LoginWrapper>
      )
    } else {
      return  <Redirect to='/'/>
    }
  }
}

const mapState = (state) => {
  return {
    loginStatus: state.getIn(['login','login'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    login(account, password) {
      dispatch(actionCreators.login(account.value, password.value))
    }
  }
}

export default connect(mapState, mapDispatch)(LogIn);