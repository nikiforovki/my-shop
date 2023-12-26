import React, { Component } from 'react'
import { Navbar, Container, Nav, Form } from 'react-bootstrap'
import logo from './logo123.png'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from '../Pages/Home.tsx'
import Profile from '../Pages/Profile/Profile.tsx'
import Catalog from '../Pages/Catalog'
import Login from '../Pages/loginPage/Login.tsx'
import Product from '../Pages/Product/Product.tsx'



export default class Header extends Component {
 render() {
   return (
    <div>
 <nav style={{ paddingLeft: '20px' }} class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">E-shop</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <a class="nav-item nav-link" href="/home">Home</a>      
      <a class="nav-item nav-link" href="/catalog">Catalog</a>
      <a class="nav-item nav-link" href="/profile">Profile</a>
      <a class="nav-item nav-link" href="/login">Login</a>
      <a class="nav-item nav-link" href="/Product">Product</a>
      
    </div>
  </div>
</nav>
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/catalog" element={<Catalog/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/Product" element={<Product/>}/>
      </Routes>
    </Router>
    {/* <Footer /> */}
    </div>
   )
 }
}