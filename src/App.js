import './App.css';
import { Homepage } from './components/pages/Homepage';
import { Switch ,Route } from 'react-router-dom';

const HatsPage = () => {
  return(
    <div>
    <h1>Hats pages</h1>
  </div>
  )
  
}

function App() {
  return (
    <div >
       <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/hats' component={HatsPage} />
       </Switch>
    </div>
  );
}

export default App;
