import React from 'react'

const Sidebar = ({showFirmHandler, showProductHandler, showProductsHandler}) => {
  return (
    <div className='sideBarSection'>
    <ul>
        <li onClick={showFirmHandler}>Add Firm</li>
        <li onClick={showProductHandler}>Add Product</li>
        <li onClick={showProductsHandler}>All Products</li>
        <li>User Details</li>
    </ul>
    </div>
  )
}

export default Sidebar
