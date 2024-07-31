import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProducts from '../components/forms/AddProducts'
import Welcome from '../components/Welcome'
import AllProducts from '../components/AllProducts'

const LandingPage = () => {

  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showFirm, setShowFirm] = useState(false)
  const [showProduct, setShowProduct] = useState(false)
  const [showWelcome, setShowwelcome] = useState(false)
  const [showAllProducts, setShowAllProducts] = useState(false)
  const [showLogout, setShowLogout] = useState(false)

  useEffect(()=>{
  const loginToken = localStorage.getItem('loginToken')
  if(loginToken){
  setShowLogout(true)
  }
  },[])

  const logOutHandler = ()=>{
    confirm("Are you sure to Logout?")
    localStorage.removeItem("loginToken")
    localStorage.removeItem("firmId")
    setShowLogout(false)

  }

  const showLoginHandler = ()=>{
    setShowLogin(true)
    setShowRegister(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowwelcome(false)
    setShowAllProducts(false)
  }

  const showRegisterHandler = ()=>{
    setShowRegister(true)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowwelcome(false)
    setShowAllProducts(false)
  }

  const showFirmHandler = ()=>{
    setShowFirm(true)
    setShowLogin(false)
    setShowRegister(false)
    setShowProduct(false)
    setShowwelcome(false)
    setShowAllProducts(false)
  }

  const showProductHandler = ()=>{
    setShowProduct(true)
    setShowFirm(false)
    setShowLogin(false)
    setShowRegister(false)
    setShowwelcome(false)
    setShowAllProducts(false)
  }

  const showWelcomeHandler = ()=>{
    setShowProduct(false)
    setShowFirm(false)
    setShowLogin(false)
    setShowRegister(false)
    setShowAllProducts(false)
    setShowwelcome(true)
  }

  const showProductsHandler = ()=>{
    setShowProduct(false)
    setShowFirm(false)
    setShowLogin(false)
    setShowRegister(false)
    setShowwelcome(false)
    setShowAllProducts(true)
  }

  

  return (
   <>
    <section className='landingSection'>
     <Navbar showLoginHandler = {showLoginHandler} showRegisterHandler={showRegisterHandler}
      showLogout={showLogout} logOutHandler={logOutHandler} />
     <div className="collectionSection">
     <Sidebar showFirmHandler={showFirmHandler} showProductHandler={showProductHandler} showProductsHandler={showProductsHandler} />
     {showLogin && <Login showWelcomeHandler={showWelcomeHandler} />}
    {showRegister && <Register showLoginHandler={showLoginHandler} />}
     {showFirm && <AddFirm />}
     {showProduct && <AddProducts />}
     {showWelcome && <Welcome /> }
     {showAllProducts && <AllProducts/>}
     </div>
    </section>
   </>
  )
}

export default LandingPage
