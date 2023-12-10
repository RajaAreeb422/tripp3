import Container from "react-bootstrap/Container";
//import LogoutIcon from '@mui/icons-material/Logout';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo1.png";
import { MdDashboard, MdFeaturedPlayList} from "react-icons/md";
import { LiaPollSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Menu = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    setLogin(false);
    if (localStorage.getItem("token")) {

      setLogin(true);
    }

  }, []);

  const removeToken = () => {
    //setUserId(0)
    localStorage.removeItem("token");
    //localStorage.removeItem("userId");
    //setUser('')
    setLogin(false)
    navigate("/login");
    
  };

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="logo" alt="iTribe-logo" width={"100%"} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto my-2 my-lg-0" navbarScroll>
            {login == true && (
              <Link to="/dashboard" className=" DashBorad">
                <MdDashboard /> DashBorad
              </Link>
            )}
            {login == true && (
              <Link to="/peoples" className=" DashBorad">
                <MdFeaturedPlayList />
                User List
              </Link>
            )}
            {login == true && (
              <Link  to="/polls" className=" DashBorad">
                <LiaPollSolid /> Polls
              </Link>
            )}
          </Nav>
         {!login && 
         <>
           <Link to="/login" className="login-btn mx-3">
            Login{" "}
          </Link>
          <Link to="/register" className="signup-btn">
            SignUp{" "}
          </Link>
         </>
         }
          
          {login &&
          <button onClick={() => removeToken()} class="fa fa-sign-out" aria-hidden="true">
            Logout
          </button>
        
          }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
