import React, { Component } from "react";

class MyQuotes extends Component {
  constructor() {
    super();

    this.displayData = [];

    this.state = {
      showdata: this.displayData,
      postQuote: "",
      id: 1,
    };
    this.appendData = this.appendData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  appendData() {
    this.displayData.push(
      <li style={{ marginBottom: "10px" }} key={this.state.id}>
        {this.state.postQuote}
      </li>
    );
    this.setState({
      showdata: this.displayData,
      postQuote: "",
      id: this.state.id + 1,
    });
  }

  handleChange(e) {
    let getTextQuoteValue = e.target.value;
    this.setState({
      postQuote: getTextQuoteValue,
    });
  }

  render() {
    return (
      <section
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        <h1 style={{ marginBottom: "25px", fontSize: "26px" }}>My Quotes</h1>
        <input
          type="text"
          value={this.state.postQuote}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.appendData} value="Append">
          Submit
        </button>
        <ol style={{ marginTop: "25px" }}>{this.displayData}</ol>
      </section>
    );
  }
}

export default MyQuotes;
