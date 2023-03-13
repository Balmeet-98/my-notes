import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import "./Main.css";
const Main = () => {
  const [viewText, setviewText] = useState(false);
  const [data, setData] = useState({});
  const [dataList, setDataList] = useState([]);
  const handleChange = (e) => {
    let timestamp = relativeDays(new Date().getTime());
    setData({ ...data, [e.target.name]: e.target.value, timestamp });
  };
  const addNotes = () => {
    if (Object.keys(data).length > 2) {
      setviewText(false);
      setDataList([...dataList, data]);
      setData({});
    } else {
      alert("Enter some text to add");
    }
  };

  const deleteCard = (ind) => {
    let filtered = dataList.filter((items, index) => {
      return index !== ind;
    });
    setDataList(filtered);
  };

  const editList = (ind) => {
    setviewText(true);
    let filtered = dataList.filter((items, index) => {
      return index === ind;
    });
    setData(filtered[0]);
    deleteCard(ind);
  };
  const relativeDays = (timestamp) => {
    const rtf = new Intl.RelativeTimeFormat("en", {
      numeric: "auto",
    });
    const oneDayInMs = 1000 * 60 * 60 * 24;
    const daysDifference = Math.round(
      (timestamp - new Date().getTime()) / oneDayInMs
    );
    return rtf.format(daysDifference, "day");
  };

  return (
    <>
      {viewText ? (
        <>
          <div class="card m-3">
            <div class="card-body">
              <h5 class="card-title">
                <input
                  type="text"
                  name="title"
                  class="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder="Title..."
                  onChange={handleChange}
                  value={data.title}
                ></input>
              </h5>
              <p class="card-text">
                <textarea
                  class="form-control"
                  name="text"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter you text here...."
                  onChange={handleChange}
                  value={data.text}
                ></textarea>
              </p>
              <div className="d-flex justify-content-center">
                <Button onClick={addNotes}>
                  Add
                  <AddIcon />
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div class="d-grid gap-2">
            <button
              class="btn btn-light m-3"
              type="button"
              onClick={() => setviewText(true)}
            >
              Add Notes
            </button>
          </div>
        </>
      )}
      <div class="container-fluid mt-4">
        {dataList.map((items, index) => {
          return (
            <div class="card m-3" key={index}>
              <Button color="success" onClick={() => editList(index)}>
                <div class="card-body">
                  <h5 class="card-title text-dark">{items.title}</h5>
                  <p class="card-text text-dark">{items.text}</p>
                  <p class="card-text">
                    <small class="text-muted">{`Last updated ${items.timestamp}`}</small>
                  </p>
                </div>
              </Button>
              <Button onClick={() => deleteCard(index)}>
                <DeleteOutlineIcon />
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
