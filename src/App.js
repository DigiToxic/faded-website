import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import KingdomReward from './components/KingdomReward';
import Elixir from './components/Elixir';
import Foot from './components/Foot';
import Info from './components/Info';
import HeaderMint from './components/HeaderMint';
import MintButton from './components/MintButton';
import FootMint from './components/FootMint';
import FAQ from './components/FAQ';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/mint">
            <HeaderMint />
            <MintButton />
            <FootMint />
          </Route>
          <Route path="/">
            <Header />
            <Body />
            <KingdomReward />
            <Info />
            <Elixir />
            <FAQ />
            <Foot />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;