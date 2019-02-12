import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  float: left;
  width: 280px;
  padding: 30px 0 0;
  margin-left: 4.16667%
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  margin-left: -18px;
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  line-height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px
  height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .top-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    padding-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
  }
`;

export const ListInfo = styled.div`
  float: left;
  width: 500px;
  box-sizing: border-box;
  padding-right: 10px
  .title {
    margin-bottom: 4px;
    line-height: 27px;
    font-size: 18px;
    font-weight: 700;
    color: #333;
  }
  .desc {
    margin-bottom: 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  width: 280px;

`;
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align: center;
  border-radius: 20px;
  box-sizing: border-box;
  background: #a5a5a5;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #dcdcdc
  background: #fff;
  .top{
    font-size: 22px;
    color: #333;
  }
  &:hover{
    background: #eee;
  }
`;