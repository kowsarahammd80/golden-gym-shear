import { useEffect, useState } from "react";
import Break from "../Break/Break";

import Cart from "../Cart/Cart";
import Nave from "../Nave/Nave";
import Question from "../Question/Question";

const Grid = () => {
  let [gyms, setGyms] = useState([]);
  let [cart, setCart] = useState([]);
  const [trackWorkout, setTrackWorkout] = useState([]);

  useEffect(() => {
    fetch('activity.json')
      .then(res => res.json())
      .then(data => setGyms(data))
  }, [])
  
  

  let setTimeForWorkOut = (event, gym) => {
    event.target.innerHTML = "Added";
    if (trackWorkout.indexOf(gym.id) === -1) {
      // console.log(gym.time)
      let newCart = [...cart, gym.time];
      setCart(newCart);
      trackWorkout.push(gym.id);

    }
    
  }

  return (
     
    <div>
       <Nave></Nave>
      <div className="container mt-3 mb-3">
      <div className="row">

        <div className="col-12 col-sm-8 col-lg-9 col-md-9 ">
          <h3>Welcome Goled-Gym-Activity</h3>
          <h5>Select To Day Your Activitic</h5>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-3">

            {
              gyms.map(gym => <Cart gym={gym} key={gym.id} setTimeForWorkOut={setTimeForWorkOut}></Cart>)
            }
         
          </div>
          

          
          
        </div>
          
        <div className="col-12 col-sm-4 col-md-3 cal-lg-3 ">
          <Break cart={cart}></Break>
        </div>
         

      </div>
      
      
      <Question></Question>
      
      
    </div>
    </div>

  );
};

export default Grid;