import './App.css';
import CategoryFilter from './components/CategoryFilter';
import Hero from './components/Hero';
import Login from './components/Login';
import PropertyList from './components/PropertyList';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CategoryFilter/>
        <PropertyList />
      </div>
    </>
  );
}

export default App;
