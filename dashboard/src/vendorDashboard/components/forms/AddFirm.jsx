import React, { useState } from 'react'
import { API_URL } from '../../data/apiPath'

const AddFirm = () => {
  const [firmName, setFirmName]=useState("")
  const [area, setArea]=useState("")
  const [category, setCategory]=useState([])
  const [region, setRegion]=useState([])
  const [offer, setOffer]=useState("")
  const [file, setFile]=useState(null)

  const handleCategoryChange = (event)=>{
    const value = event.target.value // Extracts the value from the event target (likely an input field)
    // Checks if the current category state includes the selected value
  if(category.includes(value)){ 
    setCategory(category.filter((item)=>item !== value))// If the value is already in the category state, it removes it by filtering it out
    
  }else{
    setCategory([...category, value])  // If the value is not in the category state, it adds it by spreading the existing category state and appending the new value
  }
  }

  const handleRegionChange = (event)=>{
    const value = event.target.value
  if(region.includes(value)){
    setRegion(region.filter((item)=>item !== value))
    
  }else{
    setRegion([...region, value])
  }
  }

  const handleImageUpload = (event)=>{
    const selectedImage = event.target.files[0]
    setFile(selectedImage)
  }

  const handleFirmSubmit = async (e)=>{
      e.preventDefault()
      try {
        const loginToken = localStorage.getItem('loginToken') //getting the login token from the local storage
        //if loginToken is not found in local storage then
        if(!loginToken){
           console.error("User not Authenticated");
        }

        //to get value from checkbox lets create a instance
        const formData = new FormData()
        formData.append('firmName', firmName) //pushing the firmName value and adding to firmName
        formData.append('area', area) 
        formData.append('offer', offer)
        formData.append('image', file)

        //loop thorugh the each categories and push to the category
        category.forEach((val)=>{
           formData.append('category', val)
        })

        region.forEach((val)=>{
          formData.append('region', val)
        })

        const response = await fetch(`${API_URL}/firm/addfirm`, {
          method:'POST',
          headers:{
            'token': `${loginToken}`
          },
          body:formData
        })

        const data = await response.json()
        if(response.ok){
          console.log(data);
          alert('Firm Added Successfully')
          setFirmName("")
          setArea("")
          setCategory([])
          setRegion([])
          setOffer("")
          setFile(null)
        }

        console.log("this is firmId", data.firmId)
        const mango = data.firmId
        localStorage.setItem('firmId', mango)

      } catch (error) {
        console.error('Failed to add Firm');
      }
  }

  return (
    <div className='formSection'>
    <form className='tabelForm' onSubmit={handleFirmSubmit}>
        <h2>Add Firm</h2>
        <label>Firm Name</label>
        <input type="text" name='firmName' value={firmName} onChange={(e)=> setFirmName(e.target.value)} /><br />
        <label>Area</label>
        <input type="text" name='area' value={area} onChange={(e)=> setArea(e.target.value)}/><br />
        {/* <label>Category</label>
        <input type="text" /><br /> */}
        <div className="checkInp">
          <label>Cateogry</label>
          <div className="inputsContainer">
            <div className="checkboxContainer">
              <label >Veg</label>
              <input type="checkbox" value="veg" checked= {category.includes('veg')} onChange={handleCategoryChange} />
            </div>
            <div className="checkboxContainer">
              <label >Non-Veg</label>
              <input type="checkbox" value="non-veg" checked= {category.includes('non-veg')} onChange={handleCategoryChange} />
            </div>
          </div>
        </div><br />

        <label>Offer</label>
        <input type="text" name='offer' value={offer} onChange={(e)=> setOffer(e.target.value)}   /><br />

        <div className="checkInp">
          <label>Region</label>
          <div className="inputsContainer">
            <div className="regBoxContainer">
              <label >South Indian</label>
              <input type="checkbox"  checked= {region.includes('south-indian')} value="south-indian" onChange={handleRegionChange} />
            </div>
            <div className="regBoxContainer">
              <label >North Indian</label>
              <input type="checkbox" checked= {region.includes('north-indian')} value="north-indian" onChange={handleRegionChange}/>
            </div>
            <div className="regBoxContainer">
              <label >chinese</label>
              <input type="checkbox" checked= {region.includes('chinese')} value="chinese" onChange={handleRegionChange} />
            </div>
            <div className="regBoxContainer">
              <label >Bakery</label>
              <input type="checkbox" checked= {region.includes('bakery')} value="bakery" onChange={handleRegionChange} />
            </div>
          </div>
        </div><br />
        {/* <label>Region</label>
        <input type="text" /><br /> */}
        
        <label>Firm Image</label>
        <input type="file" onChange={handleImageUpload} /><br />
        <div className="btnSubmit">
          <button type='submit'>Submit</button>
        </div>
    </form>
    </div>
  )
}

export default AddFirm
