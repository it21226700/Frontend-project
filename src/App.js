import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Courses from './components/Courses/Courses';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Contact from './components/ContactUs/ContactUs';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
