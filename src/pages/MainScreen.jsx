import { Link } from "react-router-dom";

const MainScreen = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-sec">
              <h1> Welcome To iTribe</h1>

              <p>
                iTribe is a community dedicated to connecting the lost tribes of
                Israel. We believe in fostering unity, understanding, and mutual
                respect among all tribes.
              </p>

              <p>
                Our platform offers a variety of features to enhance your
                journey of discovery and connection. These include our
                interactive map, in-depth community profiles, and interactive
                forums for members to share their experiences and learn from
                each other.
              </p>

              <div className="mainbtns">

              <Link to="/interactivemap" className="expolreee ">
            Expolre Interactive Map
          </Link>
          <Link  className="expolreee">
            join Us Today 
          </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainScreen;
