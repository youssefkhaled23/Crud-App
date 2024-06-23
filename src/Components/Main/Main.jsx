import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Main() {
  // Use State To Save Values
  const [data, setdata] = useState([]);
  // UseFormik
  let formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      count: "",
      descrption: "",
    },
    onSubmit: handelClick,
  });
  //   handelClick Function
  function handelClick(values) {
    // console.log("Hello");
    postData(values);
    formik.resetForm();
    // console.log(Data);
  }
  //   Function To Post Data
  async function postData(values) {
    await axios.post(
      "https://6605d76cd92166b2e3c2e211.mockapi.io/Validtion",
      values
    );
    getData();
  }
  //   Function to getData
  async function getData() {
    let { data } = await axios.get(
      "https://6605d76cd92166b2e3c2e211.mockapi.io/Validtion"
    );
    console.log(data);
    setdata(data);
  }
  // Function To DeletData
  async function deleted(id) {
    await axios.delete(
      `https://6605d76cd92166b2e3c2e211.mockapi.io/Validtion/${id}`
    );
    getData();
  }
  useEffect((e) => {
    getData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-3  ">
        <div className="row">
          <div className="col-12">
            <div className="card p-3">
              <h4>CrudApp</h4>
              <form onSubmit={formik.handleSubmit}>
                <div className="name my-2">
                  <label htmlFor="name">ProductName</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Product Name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                </div>
                <div className="price my-2">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    placeholder="Enter Product price"
                    name="price"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                  />
                </div>
                <div className="category my-2">
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    placeholder="Category"
                    name="category"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.category}
                  />
                </div>
                <div className="count my-2">
                  <label htmlFor="count">Count</label>
                  <input
                    type="text"
                    className="form-control"
                    id="count"
                    placeholder="Count"
                    name="count"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.count}
                  />
                </div>
                <div className="descrption my-2">
                  <label htmlFor="descrption">Descrption</label>
                  <input
                    type="text"
                    className="form-control"
                    id="descrption"
                    placeholder="Descrption"
                    name="descrption"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.descrption}
                  />
                </div>
                <button type="submit" className="btn btn-info mt-3">
                  Submit
                </button>
              </form>
              <div className="overflow-auto card mt-3 p-2">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">ProductName</th>
                      <th scope="col">ProductPrice</th>
                      <th scope="col">Category</th>
                      <th scope="col">Count</th>
                      <th scope="col">Descrption</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((e) => (
                      <tr key={e.id}>
                        <th scope="row">{e.id}</th>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                        <td>{e.category}</td>
                        <td>{e.count}</td>
                        <td>{e.descrption}</td>
                        <td>
                          <button
                            className="btn btn-danger mb-2 mb-lg-0"
                            onClick={() => deleted(e.id)}
                          >
                            Delete
                          </button>
                          <Link
                            className="btn btn-info ms-0 ms-lg-2"
                            to={`Update/${e.id}`}
                          >
                            Update
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
