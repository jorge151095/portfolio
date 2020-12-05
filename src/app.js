import { NavBar } from './components';
import { Home, Skills, Experience, Contact } from './pages';
import './app.scss';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Home />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
