import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Feautured from './components/feautured/Feautured';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Feautured} />
      
        </Switch>
        {/* <Trending /> */}
      </Router>
    </>
  );
}

export default App;
