
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainScreen from "./pages/MainScreen";
import ParentComponent from "./Home_comp";
import Menu from "./components/Menu";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Peopleofitribe from "./components/Peopleofitribe";
import Polls from "./components/Polls";
import Interactivemap from "./pages/Interactivemap";

function App() {
  return (
    <div>
    <section className="top-menu">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <Menu />
        </div>
      </div>
    </div>
  </section>


  <Routes>
    <Route path="/" element={<MainScreen />} />

    <Route path="/register" element={<Register />} />
    <Route path="/login"  element={<Login />}  />
    <Route path="/dashboard"  element={<Dashboard />} />
    <Route path="/peoples"  element={<Peopleofitribe />}  />

    <Route path="/polls" element={<Polls />} />

    <Route path="/interactivemap"  element={<Interactivemap /> } />
    <Route path="/mapTest"  element={<ParentComponent/> } />
  </Routes>
</div>
  );
}

export default App;
