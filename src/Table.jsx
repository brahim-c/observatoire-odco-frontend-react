import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <div className="Table">
        <div class="container">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <h2>
                  Liste des<b> Régions</b>
                </h2>
              </div>
            </div>
            <table class="table table-striped table-hover">
              <tbody>
                <tr>
                  <td>
                    <a href="#">
                      <h5>
                        <b>1- Tanger-Tétouan-Al Hoceïma</b>
                      </h5>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>
                    <a href="#">
                      <h5>
                        <b>2- L'Oriental</b>
                      </h5>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">
                      <h5>
                        <b>3- Fès- Meknès</b>
                      </h5>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">
                      <h5>
                        <b>4- Rabat-Salé-Kénitra</b>
                      </h5>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">
                      <h5>
                        <b>5- Béni-Mellal-Khénifra</b>
                      </h5>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">
                      <h5>
                        <b>6- Casablanca-Settat</b>
                      </h5>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">
                      <h5>
                        <b>7- Marrakech-Safi</b>
                      </h5>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">
                      <h5>
                        <b>8- Drâa-Tafilalet</b>
                      </h5>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">
                      <h5>
                        <b>9- Souss-Massa</b>
                      </h5>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">
                      <h5>
                        <b>10- Guelmim-Oued Noun</b>
                      </h5>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">
                      <h5>
                        <b>11 -Laâyoune-Sakia El Hamra</b>
                      </h5>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">
                      <h5>
                        <b>12 -Dakhla-Oued Ed-Dahab</b>
                      </h5>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Table;
