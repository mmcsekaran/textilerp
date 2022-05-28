import React, {  Component } from 'react';
import { withRouter } from '../../Core/withRouter';


 class Document extends Component {

  constructor(props)
  {
    super(props)

   

  }

  docid = 0;

  isDirty = false;
  isCreate = true ;
  isNew = true;
  isLocked=false;

  childWithProps = React.Children.map(this.props.children,child => 
    {
      if(React.isValidElement(child))
        return React.cloneElement(child,{...this.props});

        return child;
    }
    
    )

  render() {

     return <div>
        {this.childWithProps}
      </div>
  } 
}

export default withRouter(Document);