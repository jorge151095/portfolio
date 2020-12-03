import { NavBar } from './components';
import { Home, Skills, Experience } from './pages';
import './app.scss';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Home />
        <Skills />
        <Experience />
      </div>
    </div>
  );
}

export default App;
