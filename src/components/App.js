import React, {Component, useState} from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.cityList = [
      {name: "Goa", country: "India"},
      {name: "Amsterdam", country: "Netherlands"},
      {name: "New York", country: "USA"},
      {name: "Darjeeling", country: "India"},
      {name: "Tokyo", country: "Japan"},
      {name: "Lonavala", country: "India"},
      {name: "Brandenburg Gate", country: "Germany"},
      {name: "Reichstag Building", country: "Germany"},
      {name: "Museum Island", country: "Germany"},
      {name: "Munnar", country: "India"},
      {name: "Leh Ladakh", country: "India"},
      {name: "Goa", country: "India"},
      {name: "Agra", country: "India"},
      {name: "Dalhousie", country: "India"},
      {name: "Coorg", country: "India"},
      {name: "Rome", country: "Italy"},
      {name: "Milan", country: "Italy"},
      {name: "Venice", country: "Italy"},
      {name: "Varanasai", country: "India"},
      {name: "Jaipur", country: "India"},
      {name: "The Hofburg", country: "Austria"},
      {name: "Belvedere Palace", country: "Austria"},
      {name: "St. Stephen Cathedral", country: "Austria"},
      {name: "Kahna National Park", country: "India"},
      {name: "Amritsar", country: "India"},
      {name: "Mussoorie", country: "India"},
      {name: "Mount Abu", country: "India"},
      {name: "Tirupati", country: "India"},
    ];
  }
  componentDidUpdate() {}
  // Goa(India), Amsterdam(Netherlands), New York(USA), Darjeeling(India), Tokyo(Japan), Lonavala(India)
  render() {
    let i = 1;
    const filterArray = this.cityList
      .filter((item) => item.country === "India")
      .map((filterItem) => filterItem);
    console.log("data is ", filterArray);
    return (
      <div id="main">
        <ol id={`location${i}`}>
          {filterArray.map((item) => {
            console.log(`location${i}`);
            return (
              <li key={`location${i}`} id={`location${i++}`}>
                {item.name}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default App;
