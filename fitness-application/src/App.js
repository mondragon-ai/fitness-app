import './App.css';
import NavBar from './components/nav/NavBar';
import ToolBar from './components/nav/ToolBar';
import Dashboard from './screens/Dashboard'
import Body from './screens/Body';
import Workout from './screens/Workout';
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
          </Switch>
        </div>
        <ToolBar />
      </div>
    </Router>
  );

}

export default App;
