import logo from './logo.svg';
import './App.css';

import {Cards_grid} from './Components/Cards_grid';
import {Container} from './Pointers/Container';
import {Carousel} from './Components/Сarousel'
function App() {
  return (
    
    <main>
      <section className='section_carousel'>
        <Container>
          <h1>Товари</h1>
          <Carousel></Carousel>
        </Container>
      </section>
      <section className='section_cards'>
        <Container>
          <h1>Каталог</h1>
            <Cards_grid></Cards_grid>
        </Container>
      </section>
    </main>
    
  );
}

export default App;
