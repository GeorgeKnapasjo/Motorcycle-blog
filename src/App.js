import React from 'react';
import Navbar from './components/common/Navbar/Navbar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Blogs from './components/pages/Blogs/Blogs';
import Homepage from './components/pages/Homepage';

const App = () => {
  return (<>
    <Router>
          <Navbar />
          <Switch>
        <Route path='/Blogs' component={()=><Blogs/>}/>
        <Route exact path='/' component={()=><Homepage/>}/>
        </Switch>

    </Router>

  </>);
}

export default App;
