import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import FormA from "./components/Form-A";
import FormB from "./components/Form-B";
import FormC from "./components/Form-C";
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
          <Route path="/form-b" element={<FormB />} />
          <Route path="/form-c" element={<FormC />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
