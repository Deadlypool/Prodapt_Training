import logo from './logo.svg';
import './App.css';
import BasicElement from './components/basic';
import ConditionalRendering from './components/condition';
import ListRendering from './components/ListRendering';
import {Increment} from './components/increment';
import {PageLoad} from './components/pageLoad';
import Focus from './components/focus';
import Spread from './components/spread';

function App() {
  return (
    <div>
    <h1>Welcome to React Js</h1>
    <BasicElement />
    <ConditionalRendering isLoggedIn = {true} />
    <ListRendering items={['Naga 🐍', 'Panda 🐼', '👶']} />
    <Increment />
    {/* <PageLoad /> */}
    <Focus />
    <Spread name="John" age={30} city="New York" />
    </div>
    
  );
}

export default App;
