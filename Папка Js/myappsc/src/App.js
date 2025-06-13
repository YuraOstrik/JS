import logo from './logo.svg';
import './App.css';
import { FirstCard } from './FirstCard';
import {SecondCard} from './SecondCard.js';
import {ThirdCard} from './ThirdCard.js';

function App() {
  return (
    <div class='main'>
      <FirstCard emblem='dynamo.png' name='«Динамо» Киев:' city='Киев' date='1961'></FirstCard>
      <SecondCard></SecondCard>
      <ThirdCard></ThirdCard>
    </div>
  );
}

export default App;
