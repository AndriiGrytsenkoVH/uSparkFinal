import { Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Uspark from './Components/Uspark';
import Home from './Components/Home';
import YourDevelopers from './Components/YourDevelopers';

function App() {
 
  //no user, show sign up button, have user, show logout button

  return (
    <>
    <Navbar />
    <Routes>
      <Route path = '/' element = {<Uspark />}/>
      <Route path = '/home' element = {<Home />}/>
      <Route path = '/developers' element = {<YourDevelopers />} />
    </Routes>
    </>
  );
}

export default App;
