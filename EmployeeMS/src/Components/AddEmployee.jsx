import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginPage.css";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    category_id: "",
    image: "",
  });
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", employee.name);
    formData.append("email", employee.email);
    formData.append("password", employee.password);
    formData.append("address", employee.address);
    formData.append("salary", employee.salary);
    formData.append("image", employee.image);
    formData.append("category_id", employee.category_id);

    axios
      .post("http://localhost:3000/auth/add_employee", formData)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/employee/");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="cover">
      <div className="containers">
        <h3 className="text-center">Add Employee</h3>
        <form onSubmit={handleSubmit}>
          <div className="sign">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              id="inputName"
              autoComplete="off"
              placeholder="Enter Name"
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="sign">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="text"
              id="inputEmail4"
              autoComplete="off"
              placeholder="Enter Email"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className="sign">
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              id="inputPassword4"
              autoComplete="off"
              placeholder="Enter Password"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
            <div className="sign">
              <label htmlFor="inputSalary">Salary</label>
              <input
                type="text"
                id="inputSalary"
                autoComplete="off"
                placeholder="Enter Salary"
                onChange={(e) =>
                  setEmployee({ ...employee, salary: e.target.value })
                }
              />
            </div>
            <div className="sign">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                id="inputAddress"
                autoComplete="off"
                placeholder="Enter Address"
                onChange={(e) =>
                  setEmployee({ ...employee, address: e.target.value })
                }
              />
            </div>
            <div className="sign">
              <label htmlFor="category">Department</label>
              <select
                className="select"
                type="text"
                id="category"
                autoComplete="off"
                placeholder="Enter Department"
                onChange={(e) =>
                  setEmployee({ ...employee, category_id: e.target.value })
                }
              >
                {category.map((c) => {
                  return <option value={c.id}>{c.name}</option>;
                })}
              </select>
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="inputGroupFile01">Select Image</label>
              <input
                type="file"
                id="inputGroupFile01"
                autoComplete="off"
                name="image"
                onChange={(e) =>
                  setEmployee({ ...employee, image: e.target.files[0] })
                }
              />
            </div>
          </div>
          <button type="submit" className="green">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

{
  /*
    <div className="cover">
      <div className="containers">
        <h3 className="text-center">Add Employee</h3>
        <form  onSubmit={handleSubmit}>
          <div className="sign">
            <label for="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="sign">
            <label for="inputEmail4" className="form-label label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className="sign">
            <label for="inputPassword4" className="form-label label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputPassword4"
              placeholder="Enter Password"
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
            />
          </div>
          <div className="sign">
            <label for="inputSalary" className="form-label label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className="sign">
            <label for="inputAddress" className="form-label label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="1234 Main St"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </div>
          <div className="sign">
            <label for="category" className="form-label label">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="form-select"
              onChange={(e) =>
                setEmployee({ ...employee, category_id: e.target.value })
              }
            >
              {category.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          <div className="col-12 mb-3">
            <label className="form-label label" for="inputGroupFile01">
              Select Image
            </label>
            <input
              type="file"
              className="form-control rounded-0"
              id="inputGroupFile01"
              name="image"
              onChange={(e) =>
                setEmployee({ ...employee, image: e.target.files[0] })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

*/
}
export default AddEmployee;
