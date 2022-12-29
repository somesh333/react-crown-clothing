import './App.css';
import { Homepage } from './components/pages/Homepage';
import { Switch ,Route } from 'react-router-dom';
import ShopPage from './components/pages/shop/ShopPage';
import HeaderComponent from './components/headerComponent/HeaderComponent';
import { SignInAndSignUp } from './components/pages/SignInAndSignUp/SignInAndSignUp';
import { auth } from './components/firebase/Firebase.utils';
import React,{Component} from 'react';



class  App extends Component{
constructor(){
  super();

  this.state={
    currentUser : null
  }

}

componentDidMount() {
  auth.onAuthStateChanged(user => {
    this.setState({
      currentUser:user
    });
    console.log(user);
  })
} 

  render(){
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
  
}

export default App;
