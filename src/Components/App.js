import "../css/App.css";
import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./footer";
import MousepadContainer from "./MousepadContainer";
import Form from "./Form.js";
import Calculador from "./Calculador.js";
import Info from "./Info.js";
import Home from "./Home.js";

function Layout({ children }) {
  const { pathname } = useLocation();
  // Define aquí las rutas en las que NO quieres ni navbar ni footer
  const hideNavAndFooter = pathname === "/calculadora";

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <main>{children}</main>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

function App() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [price, setPrice] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  useEffect(() => {
    if (!file) {
      setPreview("");
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <MousepadContainer
                onFileChange={handleFileChange}
                file={file}
                preview={preview}
                setFile={setFile}
                onFileRemove={handleRemoveFile}
                fileInputRef={fileInputRef}
                setPrice={setPrice}
              />
            }
          />
          <Route
            path="/formulario"
            element={<Form file={file} setFile={setFile} price={price} />}
          />
          <Route path="/informacion" element={<Info />} />
          <Route path="/calculadora" element={<Calculador />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

