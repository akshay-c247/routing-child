import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/home" element={<Home/>}>
        <Route exact path="/home/about" element={<About/>}/>
        <Route exact path="/home/contact" element={<Contact/>}/>
       </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
