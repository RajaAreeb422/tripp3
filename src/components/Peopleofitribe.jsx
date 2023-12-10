import { Button } from "bootstrap";
import { FaFilter } from "react-icons/fa";
const Peopleofitribe = () => {
  return (
    <div>
      <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <div className="space50"></div>
              <div className="sameline-box">
                <h3> People Of iTribe</h3>
                <button className="filterbtnss">  <FaFilter /> Filter Options </button>
              </div>
            </div>
          </div>
  <div className="space50"></div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tablesbox">
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>

                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Peopleofitribe;
