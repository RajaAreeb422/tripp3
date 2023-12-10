import LeftSideBar from "../components/LeftSideBar";
import MapComponent from "../components/Map";
//import 'mapbox-gl/dist/mapbox-gl.css';

import RightSection from "../components/RightSection";
import { useState,useEffect} from "react";
const Interactivemap = () => {
  const [coordinates, setCoordinates] = useState({ latitude: 37.7749, longitude: -122.4194 });
  //const [state, setState] = useState()
  const  handleCallback = (childData) => {
        // Update the name in the component's state
        console.log("childDta",childData)
        setCoordinates({latitude:childData.lat , longitude:childData.lan});
    };

    useEffect(() => {
    
          setCoordinates({ latitude: 37.7749, longitude: -122.4194 })
        
    
      }, []);

  return (
    <section className="bgblackkkk"> 
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-map-box">
              
                  <LeftSideBar parentCallback={handleCallback}/>
                  {/* <div className="vmap">
                 
                   </div> */}
                      <MapComponent coordinates={coordinates}/>
                  
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Interactivemap;
