import React from 'react';
import Application from "./components/Application"
import{Link,BrowserRouter,Route} from "react-router-dom"
import DashBoard from './components/DashBoard';
import FrontEndDeveloper from './components/Front-End Developer';
import Admin from './components/Admin'


function App() {
  return (
    <BrowserRouter>
     <div>
      <Link to='/application'>applicatiomForm</Link>
      <Link to='/dashboard'>dashboard</Link>
      


      <Route path='/application' component={Application} exact={true}/>
      <Route path='/dashboard' component={DashBoard}/>
     {// <Route path='/frontenddeveloper' component={FrontEndDeveloper}/>}
      <Route path='/admin' component={Admin}/>
  }
    </div>

    </BrowserRouter>
    );
}

export default App;
