import axios from "axios";
import React, { useState } from "react";
import '../../styles/AddProduct.css'

const AddProduct = () => {
  const [formData, setForData] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleFormSubmit = async (e) => {
    let response = await axios.post("http://localhost:4000/products", formData);

    if (response) {
      alert("Data submitted successfully");
    } else {
      alert("Something went wrong");
    }

    setForData({
      name: "",
      price: "",
      image: "",
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h1>TECH-STORE</h1>
          <h1>Add Product Form</h1>
          <div>
            <div className="mb-3">
              <label for="formControlInputName" className="form-label">
                NAME PRODUCT
              </label>
              <input
                type="text"
                className="form-control"
                id="formControlInputName"
                value={formData.name}
                onChange={(e) =>
                  setForData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label for="formControlInputPrice" className="form-label">
                PRICE
              </label>
              <input
                type="number"
                className="form-control"
                id="formControlInputUser"
                value={formData.price}
                onChange={(e) =>
                  setForData({ ...formData, price: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label for="formControlInputImage" className="form-label">
                IMAGE
              </label>
              <input
                type="image"
                alt="image"
                className="form-control"
                id="formControlInputImage"
                value={formData.image}
                onChange={(e) =>
                  setForData({ ...formData, image: e.target.value })
                }
              />
            </div>

            

            <div className="mb-3">
              <button className="btn btn-success" onClick={handleFormSubmit}>
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
