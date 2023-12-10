import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch, BsFillArrowRightCircleFill } from "react-icons/bs";
import Select from "react-select";
import { useState, useEffect,useRef } from "react";
import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import { AiOutlineRollback } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";

const LeftSideBar = (props) => {
  const [filtermodal, setFilterModal] = React.useState(false);
  const filtertoggle = () => setFilterModal(!filtermodal);
  
  const [data,setData]=useState({
    
    country:[
      {
        id:1,
        name:"USA",
        state:[
          {
          id:1,
          name:"Florida",
          district:[
            {
              id:1,
              name:"fd1",
              village:[
                {
                  id:1,
                  name:"v1",
                  lan:32,
                  lat:81
                },
                {
                  id:2,
                  name:"v2",
                  lan:68,
                  lat:32
                },
              ]
            },
            {
              id:2,
              name:"fd2",
              village:[
                {
                  id:1,
                  name:"v3",
                  lan:26,
                 lat:13
                },
                {
                  id:2,
                  name:"v4",
                  lan:17,
                  lat:35
                },
              ]

            }
            
          ]
          },

          {
            id:2,
            name:"California",
            district:[
              {
                id:1,
                name:"cd1",
                village:[
                  {
                    id:1,
                    name:"v4",
                    lan:63,
                    lat:19
                  },
                  {
                    id:2,
                    name:"v5",
                    lan:56,
                    lat:59
                  },
                ]
              },
              {
                id:2,
                name:"cd2",
                village:[
                  {
                    id:1,
                    name:"v6",
                    lan:22,
                    lat:46
                  },
                  {
                    id:2,
                    name:"v7",
                    lan:12,
                    lat:18
                  },
                ]
              }
              
            ]
          },
          {
            id:1,
            name:"New York",
            district:[
              {
                id:1,
                name:"nd1",
                village:[
                  {
                    id:1,
                    name:"v8",
                    lan:41,
                    lat:49
                  },
                  {
                    id:2,
                    name:"v9",
                    lan:87,
                    lat:49
                  },
                ]
              },
              {
                id:2,
                name:"nd2",
                village:[
                  {
                    id:1,
                    name:"v10",
                    lan:17,
                    lat:19
                  },
                  {
                    id:2,
                    name:"v11",
                    lan:27,
                    lat:39
                  },
                ]
              }
              
            ]
          }
      ]

      },
      {
        id:2,
        name:"UK",
        state:[]
      }
    ]

  })

  const villages=[
    {
      id:1,
      label:"Abdulzaher",
      lan:65,
      lat:87
    },
    {
      id:2,
      label:"Bagh-i-Bustan",
      lan:85,
      lat:52
    },
    {
      id:3,
      label:"Charq",
      lan:15,
      lat:38
    },
    
    {
      id:4,
      label:"Chiri",
      lan:21,
      lat:41
    },
    {
      id:5,
      label:"Basha",
      lan:62,
      lat:74
    },
    {
      id:6,
      label:"Bar Kham",
      lan:39,
      lat:49
    },
    {
      id:7,
      label:"Bughri",
      lan:43,
      lat:73
    },
    {
      id:8,
      label:"Bukhtan",
      lan:17,
      lat:19
    },
    {
      id:9,
      label:"Chlmeni",
      lan:31,
      lat:89
    },
    {
      id:10,
      label:"Chnagi",
      lan:83,
      lat:83
    }
      
  ]

  const [values ,setValues]=useState({
     country:null,
     state:null,
     district:null,
     village:null,
  })



  const framerSidebarBackground = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.2 } },
    transition: { duration: 0.3 },
  };

  const framerSidebarPanel = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
    transition: { duration: 0.3 },
  };

  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const toggleSidebar = () => setOpen((prev) => !prev);

  const handleChange2 = (e) => {

    let state;
    if(e.target.name==='country'){
      data.country.map((val)=>{
        if(val.id==e.target.value)
         state=val
      })
    }else if(e.target.name==='state'){
        if(values.country.length!=0 && values.country.state.length!=0){
          values.country.state.map((val)=>{
            if(val.id==e.target.value)
             state=val
          })
        }
       
    }else if(e.target.name==='district'){
      if(values.country.length!=0 && values.state.length!=0 && values.state.district.length!=0){
        values.state.district.map((val)=>{
          if(val.id==e.target.value)
           state=val
        })
      }

    }else{
      if(values.country.length!=0 && values.state.length!=0 && values.district.length!=0
        && values.district.village.length!=0){
        values.district.village.map((val)=>{
          if(val.id==e.target.value)
           state=val
        })
      }
    }
   
    setValues({
      ...values,
      [e.target.name]: state
    });
    console.log("state",state)
  };

  const handleChange = (choice) => {
    setValues({
      ...values,
      ["village"]: choice,
    });
    
    //toggle();
  };

  const applyFilter=()=>{
    props.parentCallback(values.village)
    setValues({
      country:null,
      state:null,
      district:null,
      village:null
    })
    filtertoggle()
  }

  const clearFilter=()=>{
    setValues({
      country:null,
      state:null,
      district:null,
      village:null
    })
    filtertoggle()
  }

  return (

        <>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
              <button
        onClick={toggleSidebar}
        className="p-3 border-2 border-zinc-800 rounded-xl"
        aria-label="toggle sidebar"
      >
        <GiHamburgerMenu />
      </button>
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <>
            <motion.div
              {...framerSidebarBackground}
              aria-hidden="true"
              className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
            ></motion.div>
            <motion.div
              {...framerSidebarPanel}
              className="fixed top-0 bottom-0 left-0 z-50 w-full h-screen max-w-xs border-r-2 border-zinc-800 bg-zinc-900"
              ref={ref}
              aria-label="Sidebar"
            >

              
              <div className="togglersbtnss">
                <button
                  onClick={toggleSidebar}
                  className="removesss"
                  aria-label="close sidebar"
                >
                  <AiOutlineRollback />
                </button>

              
              </div>

              <button onClick={filtertoggle} className="filterbtnss">
                  {" "}
                  <FaFilter /> Filter Options{" "}
                </button>
                <p>

                </p>
              <ul>
                <div className="userstatus">
                  <h3>User Stats </h3>
                  <div className="userinerr">
                    <h5> Verified Users:</h5>
                    <h6 className="activeeeuser"> 70,125 </h6>
                  </div>

                  <div className="userinerr">
                    <h5>Non-Verified Users:</h5>
                    <h6 className="noactiveuser"> 10 </h6>
                  </div>
                </div>
                <div className="outercountery">
                  <div className="counterbox">
                    <h3> Country:</h3>

                    <div className="iner-countery">
                      <p> Villages:</p>

                      <p>
                        {" "}
                        Verified users: <span> 0</span>{" "}
                      </p>
                      <p>
                        {" "}
                        Non-verified users: <span> 0</span>{" "}
                      </p>
                    </div>
                  </div>

                  <div className="counterbox">
                    <h3> Province:</h3>

                    <div className="iner-countery">
                      <p> Villages:</p>

                      <p>
                        {" "}
                        Verified users: <span> 0</span>{" "}
                      </p>
                      <p>
                        {" "}
                        Non-verified users: <span> 0</span>{" "}
                      </p>
                    </div>
                  </div>


                  <div className="counterbox">
                    <h3> District:</h3>

                    <div className="iner-countery">
                      <p> Villages:</p>

                      <p>
                        {" "}
                        Verified users: <span> 0</span>{" "}
                      </p>
                      <p>
                        {" "}
                        Non-verified users: <span> 0</span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <Modal isOpen={filtermodal} toggle={filtertoggle}>
          <ModalHeader toggle={filtermodal}>
            
            
          
                  <InputGroup className="jobsearchfield mb-3">
                    <div className="serach-icons">
                      <BsSearch />
                    </div>

                    <Select
                      options={villages}
                      placeholder="Search Villages"
                      onChange={(choice) => handleChange(choice)}
                    />
                  </InputGroup>
                
              
                
          </ModalHeader>
          <ModalBody>
             
          <Form.Group controlId="filter1">
                      <Form.Label>Country</Form.Label>
                      <Form.Select
                        aria-readonly="true"
                        defaultValue="Pakistan"
                        className="shadow-none"
                        name="country"
                        required
                        value={values.country?values.country.id:null}
                         onChange={(e) => handleChange2(e)}
                      >
                        <option>Select</option>
                        {data.country.map((ct) => (
                          <option value={ct.id}>{ct.name}</option>
                        ))}
                      </Form.Select>
            </Form.Group>
            
            <Form.Group controlId="filter1">
                      <Form.Label>Province/ State</Form.Label>
                      <Form.Select
                        aria-readonly="true"
                        defaultValue="Pakistan"
                        className="shadow-none"
                        name="state"
                        required
                        value={values.state?values.state.id:null}
                        onChange={(e) => handleChange2(e)}
                      >
                        <option>Select</option>
                        {values.country && values.country.length!=0 &&
                           values.country.state 
                         && values.country.state.length!=0 ?
                        <>
                          {values.country.state.map((st) => (
                          <option value={st.id}>{st.name}</option>
                          ))
                          }
                        </>:''
                        }
                      </Form.Select>
                    </Form.Group>

                     <Form.Group controlId="filter1">
                      <Form.Label>District</Form.Label>
                      <Form.Select
                        aria-readonly="true"
                        defaultValue="Pakistan"
                        className="shadow-none"
                        name="district"
                        required
                        value={values.district?values.district.id:null}
                        onChange={(e) => handleChange2(e)}
                      >
                        <option>Select</option>
                        
                        {values.country && 
                        values.country.length!=0 && 
                        values.state &&
                        values.state.length!=0 &&
                        values.state.district &&
                         values.state.district.length!=0 ?
                        <>
                        
                          {values.state.district.map((dt) => (
                          <option value={dt.id}>{dt.name}</option>
                          ))
                          }
                        </>:''
                        }
                      </Form.Select>
                    </Form.Group>          
                  
                    <Form.Group controlId="filter1">
                      <Form.Label>Village</Form.Label>
                      <Form.Select
                        aria-readonly="true"
                        defaultValue="Pakistan"
                        className="shadow-none"
                        name="village"
                        required
                        value={values.village?values.village.id:null}
                        onChange={(e) => handleChange2(e)}
                      >
                        <option>Select</option>
                        
                        {values.country && 
                        values.country.length!=0 && 
                        values.state &&
                        values.state.length!=0 &&
                        values.district &&
                         values.district.length!=0 &&
                         values.district.village &&
                         values.district.village.length!=0 ?
                        <>
                        
                          {values.district.village.map((vl) => (
                          <option value={vl.id}>{vl.name}</option>
                          ))
                          }
                        </>:''
                        }
                      </Form.Select>
                    </Form.Group>
          </ModalBody>
          <ModalFooter>
      
            <Button color="primary" onClick={applyFilter}>
              Apply
            </Button>
            <Button color="danger" onClick={clearFilter}>
              Clear
            </Button>
       
          </ModalFooter>
        </Modal> 
            
    </>
        

  );
};

export default LeftSideBar;
