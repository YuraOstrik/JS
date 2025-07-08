import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Header} from './Components/Header';
import {Home} from './Pages/Home';
import {Footer} from './Components/Footer';



function App() {
  return (
    <div className="app-layout">
      <Router>

        <Header/>

        <main className="main-content">

          <Routes>
            <Route path="/" element={<Home />}/> 
              {/* <Route exact path="/network" element={}/>
              <Route path="/vacancies" element={}/>
              <Route path="/messages" element={}/>
              <Route path="/notification" element={}/> */}
          </Routes>

        </main>

        <Footer/>
        
      </Router>
    </div>
    
  );
}

export default App;
