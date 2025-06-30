import logo from './logo.svg';
import './App.css';
import { Btn } from './Task1';
import { Qoute } from './Task4';
function App() {
  const AllInfo = {
  
    Fio: "Ілон Маск",
    birthDate: "28 червня 1971",
    info: "Американський підприємець, інженер і мільярдер. Засновник SpaceX, Tesla, Neuralink."
  
};
  return (
    <>
      {/* <Btn></Btn>
      <Btn></Btn>
      <Btn></Btn> */}


      {/* <Qoute></Qoute> */}

      <div>
        <p>{AllInfo.Fio}</p>
        <p>{AllInfo.birthDate}</p>
        <p>{AllInfo.info}</p>
      </div>

    </>
  );
}

export default App;
