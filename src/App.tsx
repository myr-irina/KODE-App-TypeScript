import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { StoreProvider } from "src/shared/store";
import { Home, Details } from "src/pages";

const App: React.FC = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact/:contactId" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
