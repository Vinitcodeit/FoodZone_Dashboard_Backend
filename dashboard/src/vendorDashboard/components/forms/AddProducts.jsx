import React from 'react'

const AddProducts = () => {
  return (
    <div className='formSection'>
    <form className='tabelForm'>
        <h2>Add Products</h2>
        <label>Product Name</label>
        <input type="text" /><br />
        <label>Price</label>
        <input type="text" /><br />
        <div className="checkInp">
          <label>Cateogry</label>
          <div className="inputsContainer">
            <div className="checkboxContainer">
              <label >Veg</label>
              <input type="checkbox" value="Veg" />
            </div>
            <div className="checkboxContainer">
              <label >Non-Veg</label>
              <input type="checkbox" value="Non-Veg" />
            </div>
          </div>
        </div><br />
        <div className="checkInp">
          <label>Best Seller</label>
          <div className="inputsContainer">
            <div className="checkboxContainer">
              <label >Yes</label>
              <input type="checkbox" value="Yes" />
            </div>
            <div className="checkboxContainer">
              <label >No</label>
              <input type="checkbox" value="No" />
            </div>
          </div>
        </div><br />
        <label>Description</label>
        <input type="text" /><br />
        <label>Product Image</label>
        <input type="file" /><br />
        <div className="btnSubmit">
          <button>Submit</button>
        </div>
    </form>
    </div>
  )
}

export default AddProducts
