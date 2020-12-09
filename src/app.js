import { NavBar } from './components';
import { Home, Skills, Experience, Contact, About, Education, Portfolio } from './pages';
import './app.scss';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Home />
        <Skills />
        <Experience />
        <Portfolio />
        <Education />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
