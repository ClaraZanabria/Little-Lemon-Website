// Styles.
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

// Components.
import Nav from "../components/Nav"
import Header from "../components/Header";
import FoodSpecials from '../components/FoodSpecials';
import Testimonials from '../components/Testimonials';
import Article from '../components/Article';
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Nav />
      <Header />
      <FoodSpecials />
      <Testimonials />
      <Article />
      <Footer />
    </>
)};

export default Home;

