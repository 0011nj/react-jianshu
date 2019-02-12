import styled from 'styled-components';

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: #f1f1f1;
  img{
    position: absolute;
    top: 56px;
    left: 50px;
    width: 100px;
  }
`;

export const LogInBox = styled.div`
  width: 400px;
  margin: 100px auto 0;
  padding: 50px;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  background: #fff;
`;

export const LogInTitle = styled.div`
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto 50px;
  padding: 10px;
  font-weight: 400;
  color: #969696;
  b{
    font-weight: 700;
    padding: 10px;
  }
`;
export const LogInSignIn = styled.a`
  padding: 10px;
  font-weight: 700;
  color: #ea6f5a;
  border-bottom: 2px solid #ea6f5a;
`;
export const LogInSignUp = styled.a`
  padding: 10px;
  color: #969696;
  font-weight: 700;
  &:hover{
    border-bottom: 2px solid #ea6f5a;
  }
`;

export const Input = styled.input`
  display: block;
  width: 274px;
  height: 40px;
  line-height: 30px;
  padding: 0 10px;
  margin: 10px auto;
  color: #777;
  outline: none;
  background-color: hsla(0,0%,71%,.1);
  border: 1px solid #c8c8c8;
`;

export const Button = styled.button`
  width: 300px;
  height: 40px;
  line-height: 30px;
  font-size: 18px;
  color: #fff;
  background: #3194d0;
  border-radius: 25px;
  border: none;
  margin: 10px auto;
  text-align: center;
`;
