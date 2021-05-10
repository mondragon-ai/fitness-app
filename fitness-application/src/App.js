import './App.css';
import NavBar from './components/nav/NavBar';
import ToolBar from './components/nav/ToolBar';
import Dashboard from './screens/Dashboard'
import Body from './screens/Body';
import Workout from './screens/Workout';
import Profile from './screens/Profile'
import Feed from './screens/Feed'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (

    <Router>
      <div className="app">
        <NavBar />
        <div className="content-container">
          <Switch >
            <Route exact path="/"> <Dashboard /> </Route>
            <Route path="/body"> <Body /> </Route>
            <Route path="/workout"> <Workout /> </Route>
            <Route path="/profile"> <Profile /> </Route>
            <Route path="/wall"> <Feed /> </Route>
          </Switch>
        </div>
        <ToolBar />
      </div>
    </Router>
  );

}

export default App;
