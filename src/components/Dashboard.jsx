
import {useState,useEffect} from 'react'
import axios from 'axios';
const Dashboard = () => {
   
  const [data,setData]=useState([])

  useEffect(() => {
    axios
    .get(`http://localhost:8080/tripp3_labs-api/dashboard`)
    .then((res) => {
      setData(res.data.data);
     
    })
    .catch((err) => console.log(err));
  },[])

  return (
    <div>
      <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-lg-12"></div>
          </div>
          <div className="space50"></div>
          <div className="row">
            
            {data.map((da)=>(
  <div className="col-lg-4  outer-box">
  <div className="inner-boxes">
    <h3> {da.title}</h3>

    <div className="inner-two-box">
      <p>
        Total: <span> {da.total}</span>{" "}
      </p>
      <p>
        Growth: <span> {da.growth} {"  "}128%</span>
      </p>
    </div>
  </div>
</div>
            ))

            }
 

          <div className="space50"></div>
         
        </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
