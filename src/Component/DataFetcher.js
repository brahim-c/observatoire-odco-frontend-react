import React, { Component } from "react";

export default class FetchData extends Component {
  state = {
    loading: true,
    array: [],
    secteurs: [],
    pourcentages: [],
  };

  async componentDidMount() {
    const url = "https://frozen-savannah-57040.herokuapp.com/secteurs";
    const response = await fetch(url);
    const data = await response.json();
    const sect = [];
    const pourcent = [];
    data.forEach((element) => sect.push(element.secteur));
    data.forEach((element) => pourcent.push(element.pourcentage));
    this.setState({
      loading: false,
      array: data,
      secteurs: sect,
      pourcentages: pourcent,
    });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.array.length) {
      return <div>the list is empty sorry :(</div>;
    }

    return (
      <div>
        {this.state.array.map((secteur) => (
          <div>
            <div>
              {secteur.secteur} : {secteur.pourcentage} %
            </div>
          </div>
        ))}
      </div>
    );
  }
}
