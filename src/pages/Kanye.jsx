import React, { useEffect, useState } from "react";
import KanyeImg from "../assets/img/kanye.jpeg";

const Kanye = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [array, setArray] = useState([]);

  useEffect(
    function () {
      async function getData(event) {
        const request = await fetch("https://api.kanye.rest/");
        const response = await request.json();

        setData(response);
      }
      getData();
    },
    [refresh]
  );

  const addTodoHandler = (event) => {
    event.preventDefault();
    const notIncludesQuote = !array.includes(data.quote);
    if (notIncludesQuote) {
      setArray([...array, data.quote]);
    }
  };

  return (
    <section style={{ textAlign: "center", marginBottom: "50px" }}>
      <img
        src={KanyeImg}
        alt="KanyeImg"
        style={{ width: "40%", marginBottom: "50px" }}
      />
      <h1
        style={{ fontSize: "26px", marginBottom: "30px", fontWeight: "bold" }}
      >
        Kanye-West Quote
      </h1>
      <p style={{ fontSize: "16px", marginBottom: "30px" }}>{data.quote}</p>
      <div>
        <button onClick={() => setRefresh(!refresh)}>Get Quote</button>
        <button onClick={addTodoHandler}>Add Favorite</button>
      </div>
      <ul>
        {array.map((d) => (
          <li
            key={Math.random(10000)}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            {d}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Kanye;
