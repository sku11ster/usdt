import Nav from './componenets/Nav';
import Fade from 'react-reveal/Fade';
import {Tokenomics,Hero,Faq,Footer} from './sections';

const App = () => (
  <main className='relative'>
      <Nav/>
    <section >
      <Hero/>
    </section>


    <Fade>
      <section >
        <Tokenomics />
      </section>
    </Fade>
  
      <Fade>
        <section >
          <Faq />
        </section>
      </Fade>

      <Footer/>

  </main>

);

export default App
