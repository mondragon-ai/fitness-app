import './App.css';
import NavBar from './components/nav/NavBar';
import ToolBar from './components/nav/ToolBar';
import UserStats from './components/dash/UserStats'
import QuickAdd from './components/dash/QuickAdd'


function App() {

  return (
    <div className="app">
      <NavBar />
      <div className="component">
        <UserStats />
        <QuickAdd />
      </div>
      <ToolBar />
    </div>
  );

}

export default App;
