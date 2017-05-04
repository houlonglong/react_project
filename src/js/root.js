import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery  from  'react-responsive'
import {Router,Route,hashHistory} from 'react-router';
import PCIndex from './components/pc_index.js';
import PCNewsDetails from './components/pc_new_details.js';
import MobileNewsDetails from './components/mobile_new_details';
import MobileIndex  from './components/mobile_index.js';
export default class Root extends React.Component{
  render(){
    return (
    <div>
      <MediaQuery query='(min-device-width: 1224px)'>
        <Router history={hashHistory}>
          <Route path="/"  component={PCIndex}></Route>
          <Route path="/details/:uniquekey"  component={PCNewsDetails}></Route>
        </Router>
      </MediaQuery>
      <MediaQuery query='(max-device-width: 1224px)'>
      <Router history={hashHistory}>
        <Route path="/"  component={MobileIndex}></Route>
        <Route path="/details/:uniquekey"  component={MobileNewsDetails}></Route>
      </Router>
      </MediaQuery>
    </div>
    );
  };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
