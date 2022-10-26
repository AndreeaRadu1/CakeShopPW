import React from "react";

import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/Products";
import AboutUsPage from "./pages/AboutUs";
import OrderCakePage from "./pages/OrderCake";
import GalleryPage from "./pages/Gallery";
import FavoritesPage from "./pages/Favorites";
import CartPage from "./pages/Cart";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import AddProductAdminPage from "./pages/AddProductAdmin";
import DeleteProductAdminPage from "./pages/DeleteProductAdmin";
import UpdateProductAdminPage from "./pages/UpdateProductAdmin";
import AddCategoryAdminPage from "./pages/AddCategoryAdmin";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/description" element={<AboutUsPage />} />
            <Route path="/order-cake" element={<OrderCakePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/addProductAdmin" element={<AddProductAdminPage />} />
            <Route path="/addCategoryAdmin" element={<AddCategoryAdminPage />} />
            <Route path="/deleteProductAdmin" element={<DeleteProductAdminPage />} />
            <Route path="/updateProductAdmin" element={<UpdateProductAdminPage />} />
          </Routes>
        </Layout>
    </div>
  );
}

export default App;