
import { DocumentProps } from "./Document"
import  React  from 'react';
import { render } from '@testing-library/react';

export function withDocument<t extends object>(WrapperComponent:React.ComponentType<t>,props:DocumentProps)
{
    
    return class Doc extends React.Component<t & DocumentProps>
    {
        render()
        {
           return  (<WrapperComponent {...this.props as t}></WrapperComponent>)
        }
    }
}