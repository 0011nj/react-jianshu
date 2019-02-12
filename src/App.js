import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import { GlobalStyle } from './style.js';
import { IconFont } from './statics/iconfont/iconfont.js';
import Header from './common/header/';
import store from './store';
import Detail from './pages/detail/loadable.js';
import Home from './pages/home';
import LogIn from './pages/login';
import Write from './pages/write';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Fragment>
          <IconFont />
          <GlobalStyle /> 
            <BrowserRouter>
              <div>
                <Header /> 
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>
                <Route path='/login' exact component={LogIn}></Route>
                <Route path='/write' exact component={Write}></Route>
              </div>
            </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;