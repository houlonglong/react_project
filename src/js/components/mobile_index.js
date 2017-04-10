import React from 'react';
import MobileHerader from './mobile_header.js';
import MobileFooter from './mobile_footer.js';
export default class MobileIndex extends React.Component{
  render(){
    return (
      <div>
            <MobileHerader />
            <MobileFooter />
      </div>

    );
  };
}
