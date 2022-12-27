import './App.css';
import { Homepage } from './components/pages/Homepage';
import { Switch ,Route } from 'react-router-dom';
import ShopPage from './components/pages/shop/ShopPage';
import HeaderComponent from './components/headerComponent/HeaderComponent';
import { SignInAndSignUp } from './components/pages/SignInAndSignUp/SignInAndSignUp';



function App() {
  return (
    <div >
      <HeaderComponent/>
       <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/signin' component={SignInAndSignUp} />
       </Switch>
    </div>
  );
}

export default App;
