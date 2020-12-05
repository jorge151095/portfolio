import { NavBar } from './components';
import { Home, Skills, Experience, Contact, About } from './pages';
import './app.scss';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Home />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
