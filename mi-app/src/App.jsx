import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import './components/Header.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import CoursesSection from './components/CoursesSection.jsx'
import Counter from './components/Counter.jsx'
import Footer from './components/Footer.jsx'
function App() {
return (
<div>
  <Header/>
  <Hero/>
  <CoursesSection/>
  <Counter/>
  <Footer/>
</div>
);
}

export default App
