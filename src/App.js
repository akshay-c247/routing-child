import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Login from './components/Login';
import Auth from './components/Auth';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/" element={<Auth><Home/></Auth>}/>
        <Route exact path="/home" element={<Auth><Home/></Auth>}>
        <Route exact path="/home/about" element={<Auth><About/></Auth>}/>
        <Route exact path="/home/contact" element={<Auth><Contact/></Auth>}/>
       </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
