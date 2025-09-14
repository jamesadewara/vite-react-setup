import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <nav className="flex gap-6 p-4 bg-green-600 text-white shadow-md">
        <Link to="/" className="hover:underline">Home</Link>
        <br/>
        <Link to="/about" className="hover:underline">About</Link>
      </nav>
      
      <div className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App
