import React, { useState } from "react";
import { API_URL } from "../../data/apiPath";

const AddProducts = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [bestseller, setBestSeller] = useState(false);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleCategoryChange = (event) => {
    const value = event.target.value; // Extracts the value from the event target (likely an input field)
    // Checks if the current category state includes the selected value
    if (category.includes(value)) {
      setCategory(category.filter((item) => item !== value)); // If the value is already in the category state, it removes it by filtering it out
    } else {
      setCategory([...category, value]); // If the value is not in the category state, it adds it by spreading the existing category state and appending the new value
    }
  };

  const handleBestSeller = (event) => {
    const value = event.target.value === "true";
    setBestSeller(value);
  };

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const loginToken = localStorage.getItem("loginToken"); //getting the login token from the local storage
      const firmId = localStorage.getItem('firmId');

      if (!loginToken || !firmId) {
        console.error("User not authenticated");
      }

      const formData = new FormData();
      formData.append("productName", productName); //pushing the productname value and adding to "productname" key
      formData.append("price", price);
      formData.append("description", description);
      formData.append("image", image);

      //loop thorugh the each categories and push to the category
      category.forEach((val) => {
        formData.append("category", val);
      });

      const response = await fetch(`${API_URL}/product/add-product/${firmId}`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert("Product Added Successfully");
        console.log(data);
        setProductName("")
        setPrice("")
        setCategory([])
        setBestSeller([])
        setDescription("")
        setImage(null)
      }
    } catch (error) {
      alert("Failed to add Product");
    }
  };

  return (
    <div className="formSection">
      <form className="tabelForm" onSubmit={handleAddProduct}>
        <h2>Add Products</h2>
        <label>Product Name</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <br />
        <label>Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <div className="checkInp">
          <label>Cateogry</label>
          <div className="inputsContainer">
            <div className="checkboxContainer">
              <label>Veg</label>
              <input
                type="checkbox"
                value="veg"
                checked={category.includes("veg")}
                onChange={handleCategoryChange}
              />
            </div>
            <div className="checkboxContainer">
              <label>Non-Veg</label>
              <input
                type="checkbox"
                value="non-veg"
                checked={category.includes("non-veg")}
                onChange={handleCategoryChange}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="checkInp">
          <label>Best Seller</label>
          <div className="inputsContainer">
            <div className="checkboxContainer">
              <label>Yes</label>
              <input
                type="radio"
                value="true"
                checked={bestseller === true}
                onChange={handleBestSeller}
              />
            </div>
            <div className="checkboxContainer">
              <label>No</label>
              <input
                type="radio"
                value="false"
                 checked={bestseller === false}
                onChange={handleBestSeller}
              />
            </div>
          </div>
        </div>
        <br />
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <label>Product Image</label>
        <input type="file" onChange={handleImageUpload} />
        <br />
        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
