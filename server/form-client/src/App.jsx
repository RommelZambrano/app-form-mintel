import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import FormA from "./components/Form-A";
import { Navbar } from "./components/Navbar";
import { GlobalStyles } from "./components/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/form" />} />
          <Route path="/form" element={<FormA />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
