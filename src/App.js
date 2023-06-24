import {
  Navbar,
  Hero,
  About,
  Services,
  Feedback,
  Pricing,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Feedback />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
