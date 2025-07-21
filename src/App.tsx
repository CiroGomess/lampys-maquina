
import Header from './components/Header';
import Hero from './components/Hero';
import ProductInfo from './components/ProductInfo';
import HowItWorks from './components/HowItWorks';
import Payment from './components/Payment';
import Notifications from './components/Notifications';
import Practice from './components/Practice';
import Plans from './components/Plans';
import PurchaseDevice from './components/PurchaseDevice';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductInfo />
        <HowItWorks />
        <Payment />
        <Notifications />
        <Practice />
        <Plans />
        <PurchaseDevice />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;