import React from 'react'

const AddFirm = () => {
  return (
    <div className='formSection'>
    <form className='tabelForm'>
        <h2>Add Firm</h2>
        <label>Firm Name</label>
        <input type="text" /><br />
        <label>Area</label>
        <input type="text" /><br />
        {/* <label>Category</label>
        <input type="text" /><br /> */}
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

        <label>Offer</label>
        <input type="text" /><br />

        <div className="checkInp">
          <label>Region</label>
          <div className="inputsContainer">
            <div className="regBoxContainer">
              <label >South Indian</label>
              <input type="checkbox" value="Veg" />
            </div>
            <div className="regBoxContainer">
              <label >North Indian</label>
              <input type="checkbox" value="North Indian" />
            </div>
            <div className="regBoxContainer">
              <label >chinese</label>
              <input type="checkbox" value="chinese" />
            </div>
            <div className="regBoxContainer">
              <label >Bakery</label>
              <input type="checkbox" value="Bakery" />
            </div>
          </div>
        </div><br />
        {/* <label>Region</label>
        <input type="text" /><br /> */}
        
        <label>Firm Image</label>
        <input type="file" /><br />
        <div className="btnSubmit">
          <button>Submit</button>
        </div>
    </form>
    </div>
  )
}

export default AddFirm
