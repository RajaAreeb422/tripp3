import { FaFilter } from "react-icons/fa";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "axios";
import { useState,useEffect } from "react";

const Polls = () => {
  
  const [polls, setPolls] = useState([]);
  const [check, setCheck] = useState({
    all:true,
    active:false,
    closed:false
  });
  const [allPolls, setAllPolls] = useState([]);
  const [activePolls, setActivePolls] = useState([]);
  const [closedPolls, setClosedPolls] = useState([]);

  useEffect(() => {
    axios
    .get(`http://localhost:8080/tripp3_labs-api/polls`)
    .then((res) => {
      setPolls(res.data.data);
      setAllPolls(res.data.data);
    })
    .catch((err) => console.log(err));

    axios
    .get(`http://localhost:8080/tripp3_labs-api/polls/${1}`)
    .then((res) => {
      setActivePolls(res.data.data);
    })
    .catch((err) => console.log(err));

    axios
    .get(`http://localhost:8080/tripp3_labs-api/polls/${0}`)
    .then((res) => {
      setClosedPolls(res.data.data);
    })
    .catch((err) => console.log(err));

  }, []);

  const handleChange=(name)=>{
     
    if(name==='all'){
      setCheck({
        all:true,
        active:false,
        closed:false
  
      })
      setPolls(allPolls)
    }
  
    else if(name==='active'){
      setCheck({
        all:false,
        active:true,
        closed:false
  
      })
      setPolls(activePolls)
    }else{
      setCheck({
        all:false,
        active:false,
        closed:true
  
      })
      setPolls(closedPolls)
    }
    
  }

  return (
    <div>
      <section>
        <div className="container   outer-polss-boxes-main">
          <div className="row">
            <div className="col-lg-12">
              <div className="sameline-box">
                <button className="filterbtnss">
                  {" "}
                  <FaFilter /> Filter Options{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="space50"></div>
          <div className="row">
            <div className="col-lg-12">
              <div className="sametogglefilter-box">
                <div className="allpollstoggless">
                  <Toggle
                    className="alls"
                    id="all"
                    defaultChecked={true}
                    checked={check.all}
                    aria-labelledby="biscuit-label"
                    onChange={()=>handleChange('all')}
                  />

                  <span id="biscuit-label">All </span>
                </div>
                <div className="allpollstoggless">
                  <Toggle
                    id="active"
                    checked={check.active}
                    aria-labelledby="biscuit-label"
                    onChange={()=>handleChange('active')}
                  />

                  <span id="biscuit-label">Active </span>
                </div>
                <div className="allpollstoggless">

                  <Toggle style={{width: "200px"}}
                    id="closed"
                    checked={check.closed}
                    aria-labelledby="biscuit-label"
                    onChange={()=>handleChange('closed')}
                  />

                  <span id="biscuit-label">Closed </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space50"></div>
          <div className="row">
            {polls.map((poll)=>(
              <div className="col-lg-4  polls-boxs">
              <div className="sameline-box">
                <h5>{poll.title}</h5>
                <p className="status">
                  Status: {"  "}
                  <span className={poll.status==1?'statusactive':'statusclosed'}> 
                     {poll.status==1?'Active':'Closed'} 
                  </span>
                </p>
              </div>

              <p className="created">{poll.created_at}</p>

              <p>
                {poll.description}
              </p>
              {poll.status==1?
                <div className="twobtnss">
                <button className="yesbtns"> Yes</button>
                <button  className="yesbtns"> No</button>
              </div>:
              <div className="twobtnsback">
                <ProgressBar variant="success" animated now={60} />
                <br></br>
                <ProgressBar animated now={45} />
              </div>
              }
              
              

              <p className="votersnumber">
                {poll.voters} <span className="voters"> voters </span>{" "}
              </p>
              <p className="votersnumber">
                {" "}
                0.00% <span className="voters">of users voted </span>
              </p>
            </div>
            ))

            }
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Polls;
