import { NavBar } from './components/navbar';
import { Home, Skills } from './pages';
import './app.scss';

function App() {
  return (
    <div>
      <NavBar />
      <div className='main'>
        <Home />
        <Skills />
      </div>
    </div>
  );
}

export default App;
