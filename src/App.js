import React from "react";

import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="page-content">
      <Sidebar />
      <div className="content-wrapper">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
