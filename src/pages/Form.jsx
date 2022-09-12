import React, { useEffect, useState } from "react";
import Head from "../components/Head";

export default function Form() {
  const [data, setData] = useState();
  const [finalData, setFinalData] = useState([]);
  const [newName, setNewName] = useState();
  const postData = async (e) => {
    e.preventDefault();

    const { fname, lname, email, password } = data;

    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fname,
        lname,
        email,
        password,
      }),
    });

    const fetchData = res.json();
  };

  function fetchData() {
    const res = fetch("http://localhost:5000/register", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => {
        return data.json();
      })
      .then((resData) => setFinalData(resData));
  }

  function changeText(event) {
    const { name, value } = event.target;

    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function clickButton() {
    fetchData();
  }

  function changeName(e) {
    setNewName(e.target.value);
  }

  function updateData(id) {
    const res = fetch("http://localhost:5000/register", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, newName }),
    })
      .then((data) => {
        return data.json;
      })
      .catch((err) => console.log(err));

    setNewName("");
  }

  return (
    <>
      <Head />

      <form method="POST">
        <input
          type={"text"}
          placeholder="enter first name"
          name="fname"
          onChange={changeText}
        />
        <input
          type={"text"}
          placeholder="enter last name"
          name="lname"
          onChange={changeText}
        />
        <input
          type={"text"}
          placeholder="enter email"
          name="email"
          onChange={changeText}
        />
        <input
          type={"text"}
          placeholder="enter password"
          name="password"
          onChange={changeText}
        />
        <button onClick={postData} type={"submit"}>
          Submit
        </button>
      </form>

      <div>
        <button onClick={clickButton}>get Data</button>
        {finalData &&
          finalData.map((data, index) => {
            return (
              <>
                <h4>{data.Email}</h4>
                <h6>{data.First}</h6>

                <input
                  type={"text"}
                  name="updateText"
                  onChange={changeName}
                ></input>
                <button onClick={() => updateData(data._id)}>update</button>
              </>
            );
          })}
      </div>
    </>
  );
}
