import React from 'react';
import Navbar from './components/common/Navbar/Navbar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Blogs from './components/common/Blogs/Blogs';
import Homepage from './components/pages/Homepage';
import { AddBlog } from './components/forms/AddBlog';

const App = () => {
  return (<>
    <Router>
          <Navbar />
          <Switch>
        <Route path='/Blogs' component={()=><Blogs/>}/>
        <Route path='/add-blog' component={()=><AddBlog/>}/>
        <Route exact path='/' component={()=><Homepage/>}/>
        </Switch>

    </Router>

  </>);
}

export default App;
