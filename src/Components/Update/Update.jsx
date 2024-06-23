import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
  const { id } = useParams();
  // Use State To Show Data
  const [data, setdata] = useState([]);
  let navGate = useNavigate();
  function handelClick(e) {
    e.preventDefault();
    axios
      .put(`https://6605d76cd92166b2e3c2e211.mockapi.io/Validtion/${id}`, data)
      .then((e) => {
        alert("Udpate Sucessfully");
        navGate("/");
      });
  }
  useEffect(() => {
    axios
      .get(`https://6605d76cd92166b2e3c2e211.mockapi.io/Validtion/${id}`)
      .then((e) => {
        setdata(e.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="container mt-5    ">
        <div className="row">
          <div className="col-12">
            <div className="card p-3">
              <form onSubmit={handelClick}>
                <div className="name my-2">
                  <label htmlFor="name">ProductName</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Product Name"
                    name="name"
                    value={data.name}
                    onChange={(e) => setdata({ ...data, name: e.target.value })}
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
                    value={data.price}
                    onChange={(e) =>
                      setdata({ ...data, price: e.target.value })
                    }
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
                    value={data.category}
                    onChange={(e) =>
                      setdata({ ...data, category: e.target.value })
                    }
                  />
                </div>
                <div className="count my-2">
                  <label htmlFor="category">Count</label>
                  <input
                    type="text"
                    className="form-control"
                    id="count"
                    placeholder="Count"
                    name="count"
                    value={data.count}
                    onChange={(e) =>
                      setdata({ ...data, count: e.target.value })
                    }
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
                    value={data.descrption}
                    onChange={(e) =>
                      setdata({ ...data, descrption: e.target.value })
                    }
                  />
                </div>
                <button type="submit" className="btn btn-info mt-3">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
