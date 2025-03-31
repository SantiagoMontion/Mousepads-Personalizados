import "../css/App.css";

import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from "./Navbar";
import MousepadContainer from "./MousepadContainer";
import Footer from "./footer";
import Form from "./Form.js";
import Calculador from "./Calculador.js";
import Info from "./Info.js";

function App() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  // Creamos un ref para el input de archivo.
  const [price, setPrice] = useState('')
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile); // Guardamos el archivo en el estado
  };

  const handleRemoveFile = () => {
    
    setFile(null);       // Elimina el archivo del estado
    setPreview("");      // Limpia la preview
    // Reinicia el valor del input file asignado a fileInputRef
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (!file) {
      setPreview("");
      return;
    }
    // Se genera la URL para la preview del archivo
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    // Cleanup: revocar la URL cuando file cambie o el componente se desmonte
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  return (
    <>
      <div className="App">
        <div className="scroll-back">
          <Navbar />
        </div>
      </div>
      <Router>
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
                setPrice={setPrice}// Se pasa el ref al componente hijo
              />
            }
          />
          <Route path="/formulario" element={<Form file={file} setFile={setFile} price={price} />} />
          <Route path="/informacion" element={<Info/>} />
          <Route path="/calculadora" element={<Calculador />} />
          {/* Ruta comodín para redirigir a la página principal */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <Footer />
    </>

  );
}

export default App;
