import React from "react";

import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="page-content">
      <Sidebar />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
