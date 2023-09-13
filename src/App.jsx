import { BrowserRouter } from "react-router-dom";

import { Contact, Footer, Hero, Navbar } from "./components/";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-secondary">
        <Navbar />
        <Hero />
      </div>
        <Contact />
        <Footer />
    </BrowserRouter>
  );
};

export default App;
