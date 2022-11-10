import axios from "axios";
import React, { useState } from "react";
import '../../styles/AddUser.css'

const AddUser = () => {
  const [formData, setForData] = useState({
    user: "",
    name: "",
    email: "",
    password: "",
    rol: "",
  });

  const handleFormSubmit = async (e) => {
    let response = await axios.post("http://localhost:4000/users", formData);

    if (response) {
      alert("Data submitted successfully");
    } else {
      alert("Something went wrong");
    }

    setForData({
      user: "",
      name: "",
      email: "",
      password: "",
      rol: "",
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
        <h1>TECH-STORE</h1>
          <h1>Add User Form</h1>
          <div>
            <div className="mb-3">
              <label for="formControlInputUser" className="form-label">
                USER
              </label>
              <input type="text" className="form-control" id="formControlInputUser" value={formData.user} onChange={(e) => setForData({...formData, user:e.target.value})} />
            </div>

            <div className="mb-3">
              <label for="formControlInputName" className="form-label">
                FULL NAME
              </label>
              <input type="text" className="form-control" id="formControlInputUser" value={formData.name} onChange={(e) => setForData({...formData, name:e.target.value})} />
            </div>

            <div className="mb-3">
              <label for="formControlInputEmail" className="form-label">
                EMAIL
              </label>
              <input type="email" className="form-control" id="formControlInputUser" value={formData.email} onChange={(e) => setForData({...formData, email:e.target.value})} />
            </div>

            <div className="mb-3">
              <label for="formControlInputPassword" className="form-label">
                PASSWORD
              </label>
              <input type="password" className="form-control" id="formControlInputUser" value={formData.password} onChange={(e) => setForData({...formData, password:e.target.value})} />
            </div>

            <div className="mb-3">
              <label for="formControlInputRol" className="form-label">
                ROL
              </label>
              <input type="text" className="form-control" id="formControlInputUser" value={formData.rol} onChange={(e) => setForData({...formData, rol:e.target.value})} />
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

export default AddUser;
