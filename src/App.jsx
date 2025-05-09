// App.jsx
import React from 'react';
import './index.css';
import Home from './home/Home';
import Courses from './courses/Courses';
import {Route,Routes} from "react-router-dom";
import Signup from './components/Signup';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <div className="text-2xl font-bold text-blue-500">
    </div>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element = {<Home/>}></Route>
      <Route path = "/courses" element = {<Courses/>}></Route>
      <Route path = "/signup" element = {<Signup/>}></Route>
      <Route path = "/contact" element = {<Contact/>}></Route>
    </Routes>
    </div>

    </>
  );
}

export default App;
