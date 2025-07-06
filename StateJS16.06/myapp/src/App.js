
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Text} from './Text.js';
import {Header} from  './Components/Header.js'
import {First, Second, Third} from './Components/Persons.js'
function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path='first' element={<First/>}/>
        <Route path='second' element={<Second/>}/>
        <Route path='third' element={<Third/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
