import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProducts from '../components/forms/AddProducts'

const LandingPage = () => {

  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showFirm, setShowFirm] = useState(false)
  const [showProduct, setShowProduct] = useState(false)

  const showLoginHandler = ()=>{
    setShowLogin(true)
    setShowRegister(false)
    setShowFirm(false)
    setShowProduct(false)
  }

  const showRegisterHandler = ()=>{
    setShowRegister(true)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
  }

  const showFirmHandler = ()=>{
    setShowFirm(true)
    setShowLogin(false)
    setShowRegister(false)
    setShowProduct(false)
  }

  const showProductHandler = ()=>{
    setShowProduct(true)
    setShowFirm(false)
    setShowLogin(false)
    setShowRegister(false)
  }

  return (
   <>
    <section className='landingSection'>
     <Navbar showLoginHandler = {showLoginHandler} showRegisterHandler={showRegisterHandler} />
     <div className="collectionSection">
     <Sidebar showFirmHandler={showFirmHandler} showProductHandler={showProductHandler}/>
     {showLogin && <Login />}
    {showRegister && <Register />}
     {showFirm && <AddFirm />}
     {showProduct && <AddProducts />}
     </div>
    </section>
   </>
  )
}

export default LandingPage
