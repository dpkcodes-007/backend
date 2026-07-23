import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Categories from "../pages/Categories";
import SavedNews from "../pages/SavedNews";
import About from "../pages/About";
import NewsDetails from "../pages/NewsDetails";

const AppRoutes = () => {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/saved" element={<SavedNews />} />
        <Route path="/about" element={<About />} />
        <Route path="/news/:id" element={<NewsDetails />} />
      </Routes>

    
        </>
  )
}

export default AppRoutes