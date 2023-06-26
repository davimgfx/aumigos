import {
  Navbar,
  Hero,
  About,
  Services,
  Feedback,
  Pricing,
  CheckIn,
  Footer,
  Plan
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
      <CheckIn/>
      <Plan />
      <Footer />
    </div>
  );
}

export default App;
