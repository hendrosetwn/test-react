import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import KanyeImg from "../assets/img/kanye.jpeg";
import "../assets/scss/kanye.scss";

const Kanye = () => {
  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [refreshData, setRefreshData] = useState(false);

  const getData = async () => {
    const response = await axios.get("https://api.kanye.rest/");
    setData(response.data);
    setLoadingData(false);
  };

  useEffect(() => {
    getData();
  }, [refreshData]);

  return (
    <section className="kanye">
      <img src={KanyeImg} alt="Kanye" className="kanye__img" />
      <h1 className="kanye__title">Kanye-West Quote</h1>
      <h3 className="kanye__quote">{data.quote}</h3>
      <div style={{ display: "inline" }}>
        <button type="button" onClick={() => setRefreshData(!refreshData)}>
          Get Quote
        </button>
      </div>

      <QuoteData />
    </section>
  );
};

class QuoteData extends Component {
  constructor(props) {
    super(props);
    this.displayData = [];

    this.state = {
      showdata: this.displayData,
      id: 1,
    };
    this.appendData = this.appendData.bind(this);
  }

  appendData(e) {
    let quote =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .innerText;

    this.displayData.push(quote);

    this.setState({
      showdata: this.displayData,
      id: this.state.id + 1,
    });

    this.displayData.push(
      <li style={{ marginBottom: "10px" }} key={this.state.id}>
        {this.state.displayData}
      </li>
    );
  }

  render() {
    return (
      <div style={{ display: "inline" }}>
        <button type="button" onClick={this.appendData}>
          Add Favorite
        </button>
        <ol style={{ marginTop: "25px" }}>{this.displayData}</ol>
      </div>
    );
  }
}

export default Kanye;
