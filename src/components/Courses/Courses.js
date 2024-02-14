import React from 'react';
import './Courses.css'; // Import the CSS file for styling
import NavBar from '../NavBar/NavBar';
import Layout from '../Layout/Layout';
import research from "../../images/research.jpg"
import Footer from '../Footer/Footer';

function Courses() {
  return (
  <>  
     <h2>Top Featured Cources</h2>
    <div className="courses">

      <div className="course-card">
        <img src={research} alt="Course 1" />
        <h2>Course 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis urna et eros interdum dapibus. Sed ut orci eu libero ultricies interdum.</p>
      </div>
      <div className="course-card">
        <img src={research} alt="Course 2" />
        <h2>Course 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis urna et eros interdum dapibus. Sed ut orci eu libero ultricies interdum.</p>
      </div>
      <div className="course-card">
        <img src={research} alt="Course 3" />
        <h2>Course 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis urna et eros interdum dapibus. Sed ut orci eu libero ultricies interdum.</p>
      </div>
      <div className="course-card">
        <img src={research} alt="Course 4" />
        <h2>Course 4</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis urna et eros interdum dapibus. Sed ut orci eu libero ultricies interdum.</p>
      </div>
      <div className="course-card">
        <img src={research} alt="Course 5" />
        <h2>Course 5</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis urna et eros interdum dapibus. Sed ut orci eu libero ultricies interdum.</p>
      </div>
      <div className="course-card">
        <img src={research} alt="Course 6" />
        <h2>Course 6</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis urna et eros interdum dapibus. Sed ut orci eu libero ultricies interdum.</p>
      </div>
    </div>
    
   </>
  );
}

export default Courses;
