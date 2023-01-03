import './App.css';
import { Homepage } from './components/pages/Homepage';
import { Switch ,Route } from 'react-router-dom';
import ShopPage from './components/pages/shop/ShopPage';
import HeaderComponent from './components/headerComponent/HeaderComponent';
import { SignInAndSignUp } from './components/pages/SignInAndSignUp/SignInAndSignUp';
import { auth, createUserProfileDocument } from './components/firebase/Firebase.utils';
import React,{Component} from 'react';



class  App extends Component{
constructor(){
  super();

  this.state={
    currentUser : null
  }

}
 
unsubscribeFromAuth = null;

componentDidMount() {
  // this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
   
  //   console.log(user);
  // })
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser:{
            id: snapShot.id,
            ...snapShot.data()
          }
        }
        );
        console.log(this.state);
      })
    }
    this.setState({currentUser: userAuth});
  })

} 
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    return (
      <div >
        <HeaderComponent currentUser={this.state.currentUser}/>
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
