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
  const [showFirmTitle, setShowFirmTitle] = useState(true)

  useEffect(()=>{
  const loginToken = localStorage.getItem('loginToken')
  if(loginToken){
  setShowLogout(true)
  }
  },[])

  useEffect(()=>{
const firmName = localStorage.getItem('firmName')
if(firmName){
  setShowFirmTitle(false)
}
  },[])

  const logOutHandler = ()=>{
    confirm("Are you sure to Logout?")
    localStorage.removeItem("loginToken")
    localStorage.removeItem("firmId")
    localStorage.removeItem("firmName")
    setShowLogout(false)
    setShowFirmTitle(true)

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
    if(showLogout){
    setShowFirm(true)
    setShowLogin(false)
    setShowRegister(false)
    setShowProduct(false)
    setShowwelcome(false)
    setShowAllProducts(false)
    }else{
      alert("Please Login")
      setShowLogin(true)
    }
  }

  const showProductHandler = ()=>{
    if(showLogout){
    setShowProduct(true)
    setShowFirm(false)
    setShowLogin(false)
    setShowRegister(false)
    setShowwelcome(false)
    setShowAllProducts(false)
  }else{
    alert("Please Login")
    setShowLogin(true)
  }
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
    if(showLogout){
    setShowProduct(false)
    setShowFirm(false)
    setShowLogin(false)
    setShowRegister(false)
    setShowwelcome(false)
    setShowAllProducts(true)
  }else{
    alert("Please Login")
    setShowLogin(true)
  }
  }

  

  return (
   <>
    <section className='landingSection'>
     <Navbar showLoginHandler = {showLoginHandler} showRegisterHandler={showRegisterHandler}
      showLogout={showLogout} logOutHandler={logOutHandler} />
     <div className="collectionSection">
     <Sidebar showFirmHandler={showFirmHandler} showProductHandler={showProductHandler}
      showProductsHandler={showProductsHandler} showFirmTitle={showFirmTitle} />
     {showLogin &&  <Login showWelcomeHandler={showWelcomeHandler} />}
     {showRegister && <Register showLoginHandler={showLoginHandler} />}
     {showFirm && showLogout && <AddFirm />}
     {showProduct && showLogout && <AddProducts />}
     {showWelcome && <Welcome /> }
     {showAllProducts && showLogout && <AllProducts/>}
     </div>
    </section>
   </>
  )
}

export default LandingPage
