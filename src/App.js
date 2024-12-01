import logo from './logo.svg';
import './App.css';
import CustomNavbar from './Component/Navbar/CustomNavbar';
import HeroSection from './Component/HeroSection/HeroSection';
import Category from './Component/Category/Category';
import FeaturedProducts from './Component/Featuredproducts/FeaturedProducts';
import Testimonials from './Component/testimonials/Testimonials';
import WhyChooseUs from './Component/WhyChooseUs/WhyChooseUs';
import NewsletterSignup from './Component/NewsletterSignup/NewsletterSignup';
import WhoWeAre from './Component/Whoweare/WhoWeAre';
import OurStrategy from './Component/OurStrategy/OurStrategy';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
     <CustomNavbar />
     <HeroSection />
     <WhoWeAre />
     <OurStrategy />
     <FeaturedProducts />
     <Testimonials />
     <WhyChooseUs />
     {/* <NewsletterSignup /> */}
     <Footer />
    </div>
  );
}

export default App;
