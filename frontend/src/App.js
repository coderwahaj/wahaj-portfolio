// import React from "react";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Portfolio from "./components/Portfolio";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Portfolio />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { mockData } from './data/mock';

function App() {
  return (
    <div className="App">
      <Header data={mockData} />
      <main>
        <Hero data={mockData} />
        <About data={mockData} />
        <Skills data={mockData} />
        <Projects data={mockData} />
        <Experience data={mockData} />
        <Contact data={mockData} />
      </main>
      <Footer data={mockData} />
    </div>
  );
}

export default App;