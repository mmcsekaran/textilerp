import React, { Children, Component, PureComponent } from 'react'

export default class Document extends Component {

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
        return React.cloneElement(child,{title:"sfiou"});

        return child;
    }
    
    )

  render() {
     return <div>
        {this.childWithProps}
      </div>
  } 
}
