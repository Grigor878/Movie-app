import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homePage/HomePage';
import Trending from './components/trending/Trending';
import Title1 from './components/trending/trendingPages/Title1';
import Title2 from './components/trending/trendingPages/Title2';
import Title3 from './components/trending/trendingPages/Title3';
import Title4 from './components/trending/trendingPages/Title4';
import Title5 from './components/trending/trendingPages/Title5';
import Title6 from './components/trending/trendingPages/Title6';
import Title7 from './components/trending/trendingPages/Title7';
import Title8 from './components/trending/trendingPages/Title8';
// import { Trendingnow } from './data';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* {Trendingnow.map(element => {
            return ( */}
            {/* )
          })} */}
          <Route exact path="/title1" component={Title1} />
          <Route exact path="/title2" component={Title2} />
          <Route exact path="/title3" component={Title3} />
          <Route exact path="/title4" component={Title4} />
          <Route exact path="/title5" component={Title5} />
          <Route exact path="/title6" component={Title6} />
          <Route exact path="/title7" component={Title7} />
          <Route exact path="/title8" component={Title8} />
        </Switch>
        <Trending />
      </Router>
    </>
  );
}

export default App;
