import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import ContactUs from './components/ContactUs';
import Help from './components/Help';
import Fifthcomponent from './components/Fifthcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import Seventhcomponent from './components/Seventhcomponent';
import Eighthcomponent from './components/Eighthcomponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Notfound from './components/Notfound';


function App() {
  return (
    <Router>
      <div className="App">

        <nav>
          <Link to="/first" className='navlinks'>First</Link>
          <Link to="/second" className='navlinks'>Second</Link>
          <Link to="/contactus" className='navlinks'>ContactUs</Link>
          <Link to="/help" className='navlinks'>Help</Link>
          <Link to="/fifth" className='navlinks'>Fifth</Link>
          <Link to="/sixth" className='navlinks'>Sixth</Link>
          <Link to="/seventh" className='navlinks'>Seventh</Link>
          <Link to="/eighth" className='navlinks'>Eighth</Link>





        </nav>
      <header className="App-header">
       <h1>Welcome to learning React</h1>
       <h2>React is Fun</h2>

      </header>
      {/* Below we render/display/show our components */}
      <Routes>
        <Route path="/first" element={<Firstcomponent />} />
        <Route path="/second" element={<Secondcomponent />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/help" element={<Help/>} />
        <Route path="/fifth" element={<Fifthcomponent />} />
        <Route path="/sixth" element={<Sixthcomponent />} />
        <Route path="/seventh" element={<Seventhcomponent />} />
        <Route path="/eighth" element={<Eighthcomponent />} />
        <Route path='*' element={<Notfound />} />

      </Routes>
       
    </div>
    </Router>
  );
}

export default App;

// jsx

// Create two other components i.e Contact Us and Help components and style them with your own content.Render them on App.js component.
// npm start => node package module
// npx => node package execute