import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Header from "./components/header";
import FloatingMessage from "./components/floatingMessage";
import Footer from "./components/footer";
import { GeneralProvider } from "./contexts/generalContext";

const App = () => (
  <div>
    <GeneralProvider>
      <Header />
      <FloatingMessage />
      <Footer />
    </GeneralProvider>
  </div>
)

export default App
