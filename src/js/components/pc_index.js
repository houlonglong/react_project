import React from 'react';
import PCHerader from './pc_header.js';
import PCFooter from './pc_footer.js'
export default class PCIndex extends React.Component{
  render(){
    return (
      <div>
            <PCHerader />
            <PCFooter />
      </div>

    );
  };
}
