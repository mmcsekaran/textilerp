import logo from './logo.svg';
import './App.css';
import Test from './test';
import Test2 from './Test2';
import AppLayout from './component/Layout';
import { BrowserRouter } from 'react-router-dom';
import { UserContext, ApiProvider } from './component/Security/AuthoticationContext';
import { Component } from 'react';

export class App extends Component {

  constructor(props)
  {
    super(props);

   
  }

  

  componentDidMount()
  {

  }

  render() {
    return (
      <div>
         <BrowserRouter>
        <ApiProvider>
         
            <AppLayout>

            </AppLayout>
        
        </ApiProvider>
  </BrowserRouter>
      </div>
    );
  }
}

export default App;
