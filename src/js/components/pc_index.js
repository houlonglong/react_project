import React from 'react';
import PCHerader from './pc_header.js';
import PCFooter from './pc_footer.js'
import PcNewsContainer from './pc_newscontainer'
console.log(PcNewsContainer)
export default class PCIndex extends React.Component{
  render(){
    return (
      <div>
            <PCHerader />
            <PcNewsContainer />
            <PCFooter />
      </div>

    );
  };
}
