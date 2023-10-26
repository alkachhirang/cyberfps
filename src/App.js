import React, { useEffect } from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import About from './components/about';
import Cyberfps from './components/Cyberfps';
import Cryptostraps from './components/Cryptostraps';
import Team from './components/Team';
import Faq from './components/Faq';
import Solana from './components/Solana';
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';



function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200
      }
    );
    Aos.refresh()
  });
  return (
    <div className='App'>
      <Routes>
        <Route path='/' exact element={<Header />}></Route>
        <Route path='/About' exact element={<About />}></Route>
        <Route path='/Faq' exact element={<Faq />}></Route>
        <Route path='/Cryptostraps' exact element={<Cryptostraps />}></Route>
        <Route path='/Team' exact element={<Team />}></Route>
      </Routes>

      <About />
      <Cyberfps />
      <Cryptostraps />
      <Team />
      <Faq />
      <Solana />
      <Footer />



    </div>
  );
}

export default App;
