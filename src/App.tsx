import { Route } from 'wouter';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {

  return (
    <>

      <Header />

      <Route path="/"><Home /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/projects"><Projects /></Route>



    </>
  )
}

export default App
