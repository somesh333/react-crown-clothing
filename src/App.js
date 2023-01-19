import './App.css';
import { Homepage } from './components/pages/Homepage';
import { Switch ,Route } from 'react-router-dom';
import ShopPage from './components/pages/shop/ShopPage';
import HeaderComponent from './components/headerComponent/HeaderComponent';
import { SignInAndSignUp } from './components/pages/SignInAndSignUp/SignInAndSignUp';
import { auth, createUserProfileDocument } from './components/firebase/Firebase.utils';
import React,{Component} from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userAction';


class  App extends Component{

//------------------------------------- after the setup react-redux connect funtion we can replace the state funtion from class
// constructor(){         
//   super();

//   this.state={
//     currentUser : null
//   }

// }
 
unsubscribeFromAuth = null;

componentDidMount() {

  const {setCurrentUser} = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        // this.setState({  ------------------------------------remove after redux setup
        //   currentUser:
        // this.props.
        setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        
        console.log(this.state);
      })
    }
    // this.setState({currentUser: userAuth});------------------remove the setState after redux
    setCurrentUser(userAuth);
  })

} 
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    return (
      <div >
        <HeaderComponent />
         <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUp} />
         </Switch>
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => ({
setCurrentUser: user  =>  dispatch(setCurrentUser(user))
})

export default connect(null ,mapDispatchToProps )(App);
