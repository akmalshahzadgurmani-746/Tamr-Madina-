import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { ToastProvider } from "./components/ToastProvider";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";
import QuickViewModal from "./components/QuickViewModal";

import Hero from "./sections/Hero";
import TrustBar from "./sections/TrustBar";
import DateVarieties from "./sections/DateVarieties";
import GiftFeature from "./sections/GiftFeature";
import BestSellers from "./sections/BestSellers";
import WellnessBanner from "./sections/WellnessBanner";
import Testimonials from "./sections/Testimonials";
import Gallery from "./sections/Gallery";
import Newsletter from "./sections/Newsletter";

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <AnnouncementBar />
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <DateVarieties />
          <GiftFeature />
          <BestSellers />
          <WellnessBanner />
          <Testimonials />
          <Gallery />
          <Newsletter />
        </main>
        <Footer />
        <WhatsAppButton />
        <CartDrawer />
        <QuickViewModal />
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
