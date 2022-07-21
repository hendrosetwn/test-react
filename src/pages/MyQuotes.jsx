import { useState } from "react";

const MyQuotes = () => {
  const [myQuote, setMyQuote] = useState([]);
  const [listQuote, setListQuote] = useState("");

  const addTodoHandler = (event) => {
    event.preventDefault();
    const notIncludesQuote = !myQuote.includes(listQuote);
    if (notIncludesQuote) {
      setMyQuote([...myQuote, listQuote]);
    }
    setListQuote("");
  };

  return (
    <section style={{ textAlign: "center" }}>
      <h1
        style={{
          fontSize: "26px",
          marginBottom: "30px",
          fontWeight: "bold",
          borderTop: "1px solid black",
          paddingTop: "30px",
        }}
      >
        My Quotes
      </h1>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Quotes"
          value={listQuote}
          onChange={(event) => {
            setListQuote(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {myQuote.map((item) => {
          return (
            <li key={item} style={{ marginTop: "10px", marginBottom: "10px" }}>
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MyQuotes;
