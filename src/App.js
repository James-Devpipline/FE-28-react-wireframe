import React from "react";

import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";

function App() {
  return (
    <div className="page-content">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
