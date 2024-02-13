import React from 'react'
import Navbar from "./sections/Navbar/Navbar"
import Hero from './sections/Hero/Hero'
import Categories from './sections/Categories/Categories'
import Shop from './sections/Shop/Shop'
import Deal from './sections/Deal/Deal'
import Testimonial from './sections/Testimonial/Testimonial'
import Blog from './sections/Blog/Blog'
import Footer from './sections/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Question1 from "./sections/Question1/Question1"; 
import Question2 from "./sections/Question2/Question2"; 
import Question3 from "./sections/Question3/Question3"; 
import Question4 from "./sections/Question4/Question4"; 
import Question5 from "./sections/Question5/Question5"; 
import Contact from "./sections/Contact/Contact"

const App = () => {
  
  return (
    
    <Router>
      <main className='app'>      
        <Navbar/>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/question1" element={<Question1 />} /> {/* Yeni sayfayı yönlendirin */}
          <Route path="/question2" element={<Question2 />} /> 
          <Route path="/question3" element={<Question3 />} /> 
          <Route path="/question4" element={<Question4 />} /> 
          <Route path="/question5" element={<Question5 />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/deal" element={<Deal />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
        <Footer/>
      </main>
    </Router>
  );
}

export default App
