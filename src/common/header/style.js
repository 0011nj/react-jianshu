import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderNav = styled.div `
  width: 1440px;
  margin: 0 auto;
`;

export const HeaderWrapper = styled.nav `
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0
`;

export const Logo = styled.div`
  position: absolute;
  top:0;
  left:0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div `
  width: 960px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const NavItem = styled.div `
  height: 56px;
  line-height: 56px;
  padding: 0 15px;
  color: #333;
  font-size: 15px
  &.left {
    float: left;
  }
  &.right {
    float: right;
  color: #969696;
  }
  &.active {
    color: #ea6f5a
  }
  .iconfont {
    margin-right: 5px;
    font-weight: bold;
  }
`;

export const SearchWrapper = styled.div `
  position: relative;
  float: left;
  .zoon {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      color: #fff;
      background: #969696;
    }
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 0px;
  width: 240px
  padding: 20px 20px 10px;
  margin: 0 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  &:before {
    content: "";
    left: 24px;
    width: 15px;
    height: 15px;
    transform: rotate(45deg);
    top: -5px;
    z-index: -1;

    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
  }
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`;

export const SearchInfoTitle = styled.div`
  line-height: 20px;
  margin-bottom: 10px;
  &:after{
    content: '';
    clear: both;
    display: table;
  }
`;

export const SearchInfoValue = styled.span`
  float: left;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoChange = styled.a`
  float: right;
  font-size: 13px;
  color: #969696;
  cursor: pointer;
  &:hover{
    color:#2f2f2f;
  }
  .spin{
    font-size: 12px;
    margin-right: 3px;
    display: inline-block;
    transition: all .2s ease-in;
  }
`;

export const SearchInfoItem = styled.a`
  display: inline-block;
  padding: 2px 6px;
  margin: 5px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
  &:hover{
    color: #2f2f2f;
    border-color: #2f2f2f;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})` 
  margin: 9px 0 0 20px;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  width: 240px;
  height: 38px;
  border: none;
  outline: none;
  background: #eee;
  border-radius: 40px;
  font-size: 14px;
  color: #333;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 320px;
  }
  &.slide-enter {
    transition: all 0.5s ease-out;
  }
  &.slide-enter-action {
    width: 320px;
  }
  &.slide-exit {
    transition: all 0.5s ease-out;
  }
  &.slide-exit-action {
    width: 240px;
  }
`;

export const Addition = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div `
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 20px;
  font-size: 15px;
  border: 1px solid rgba(236,97,73,.7);
  &.reg {
    color: #ec6149;
  };
  &.writting {
    color: #fff;
    background: #ec6149;
  };
  .iconfont {
    margin-right: 5px;
  }
`;