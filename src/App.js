import './App.css';
import { Homepage } from './components/pages/Homepage';
import { Switch ,Route } from 'react-router-dom';
import ShopPage from './components/pages/shop/ShopPage';



function App() {
  return (
    <div >
       <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={ShopPage} />
       </Switch>
    </div>
  );
}

export default App;
