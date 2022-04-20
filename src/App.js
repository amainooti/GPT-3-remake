import {CTA, Brand, Navbar} from "./components"
import {Footer, Blog, Possibility, Features, Whatgp3, Header} from "./containers"
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgp3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
