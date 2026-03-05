import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import ContactUs from './components/ContactUs';
import Help from './components/Help';
import Fifthcomponent from './components/Fifthcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import Seventhcomponent from './components/Seventhcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome to learning React</h1>
       <h2>React is Fun</h2>

      </header>
      {/* Below we render/display/show our components */}
       <Firstcomponent />
       <Secondcomponent />
       <ContactUs />
       <Help />
       <Fifthcomponent />
       <Sixthcomponent />
       <Seventhcomponent />
    </div>
  );
}

export default App;

// jsx

// Create two other components i.e Contact Us and Help components and style them with your own content.Render them on App.js component.
// npm start => node package module
// npx => node package execute