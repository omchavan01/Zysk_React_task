import Blogs from "./components/Blogs";
import Dashboard from "./components/Dashboard";
import FAQs from "./components/FAQs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FreeTrial from "./components/FreeTrial";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Features />
      <Testimonials />
      <hr className="w-11/12 mx-auto" />
      <FAQs />
      <hr className="w-11/12 mx-auto" />
      <Blogs />
      <FreeTrial />
      <Footer />
    </>
  );
}

export default App;
