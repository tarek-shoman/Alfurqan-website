import React, { Suspense } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Hero = React.lazy(() => import('./components/Hero'));
const Features = React.lazy(() => import('./components/Features'));

const About = React.lazy(() => import('./components/About'));
const Programs = React.lazy(() => import('./components/Programs'));
const Teachers = React.lazy(() => import('./components/Teachers'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <BrowserRouter> 
      <div className="min-h-screen bg-white pt-16"> 
        
        <Navbar />

        <Suspense fallback={<LoadingSpinner />}> 
          <Routes>
            
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <Features />
                </>
              } 
            />
            
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="*" element={<h1 className="text-center p-20 text-3xl font-bold">404: الصفحة غير موجودة</h1>} />
          
          </Routes>
        </Suspense>
        
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-emerald-600"></div>
      <p className="mr-4 text-emerald-700 font-semibold">جاري التحميل...</p>
    </div>
  );
}