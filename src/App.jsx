// import React, { useEffect } from "react";
// import HomePage from "./assets/HomePage";
// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import Todo from "./assets/pages/Todo";
// // import AboutPage from "./assets/pages/AboutPage";
// import MainLayout from "./assets/Layout/MainLayout";
// import { initFlowbite } from 'flowbite'
// import ApiPhotos from "./Components/ApiPhotos";
// import ContactPage from "./assets/pages/ContactPage";

import React, { useEffect } from "react";
import { Route, BrowserRouter as  Router, Routes } from "react-router-dom";
import { initFlowbite } from "flowbite";
import ContactPage from "./Pages/ContactPage";
import Homepage from "./Pages/HomePage";
import MainLayout from "./Layout/MainLayout";
import Todo from "./Pages/Todo";
import ShopifyPage from "./Pages/ShopifyPage";



const App = () => {
   useEffect(() => {
      initFlowbite();
    }, [])
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route index element={<Homepage/>} />
          <Route path="/todo" element={<Todo/>} />
          <Route path="/contactpage" element={<ContactPage/>} />
          <Route path="/shopifypage" element={<ShopifyPage/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
