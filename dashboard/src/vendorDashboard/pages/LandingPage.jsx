import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProducts from '../components/forms/AddProducts'
import Welcome from '../components/Welcome'

const LandingPage = () => {

  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showFirm, setShowFirm] = useState(false)
  const [showProduct, setShowProduct] = useState(false)
  const [showWelcome, setShowwelcome] = useState(false)

  const showLoginHandler = ()=>{
    setShowLogin(true)
    setShowRegister(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowwelcome(false)
  }

  const showRegisterHandler = ()=>{
    setShowRegister(true)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowwelcome(false)
  }

  const showFirmHandler = ()=>{
    setShowFirm(true)
    setShowLogin(false)
    setShowRegister(false)
    setShowProduct(false)
    setShowwelcome(false)
  }

  const showProductHandler = ()=>{
    setShowProduct(true)
    setShowFirm(false)
    setShowLogin(false)
    setShowRegister(false)
    setShowwelcome(false)
  }

  const showWelcomeHandler = ()=>{
    setShowProduct(false)
    setShowFirm(false)
    setShowLogin(false)
    setShowRegister(false)
    setShowwelcome(true)
  }

  

  return (
   <>
    <section className='landingSection'>
     <Navbar showLoginHandler = {showLoginHandler} showRegisterHandler={showRegisterHandler} />
     <div className="collectionSection">
     <Sidebar showFirmHandler={showFirmHandler} showProductHandler={showProductHandler}/>
     {showLogin && <Login showWelcomeHandler={showWelcomeHandler} />}
    {showRegister && <Register showLoginHandler={showLoginHandler} />}
     {showFirm && <AddFirm />}
     {showProduct && <AddProducts />}
     {showWelcome && <Welcome /> }
     </div>
    </section>
   </>
  )
}

export default LandingPage
