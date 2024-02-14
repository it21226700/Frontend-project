import Banner from '../../components/Banner/Banner';
import Courses from '../../components/Courses/Courses';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Information from '../../components/Infomation/Information';
import NavBar from '../../components/NavBar/NavBar';
import Layout from '../../components/Layout/Layout';
import ContactUs from '../../components/ContactUs/ContactUs'
import './Home.css';


function Home() {
  return (

    <div className="Home">
        <Header/>
        <Banner/>
        <Courses/>
        <ContactUs/>
    </div>
   
  );
}

export default Home;
