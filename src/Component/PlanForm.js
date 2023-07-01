import React from "react"
import '../Component/css/plans.css';
import { useNavigate } from 'react-router-dom'
export const PlanFrom =()=>{
  const navigate = useNavigate();
  const navigatecharts = () => {
    navigate('/charts');
  };
    return(
    <div className="planbody">
      <br/>
      <br/>
      <br/>
      <br/>
      <div class="plancontainer">
        <div class="planform">
          <header class="planheader">Plans</header>
          <form class="plansform" >
            <div class="planfield planinput-planfield">
              <label>NAME</label><br />
              <input
                type="name"
                placeholder="Name"
                class="planname"
                id="name"
                autocomplete="off"
              />
            </div>
            <br /><br />

            <div class="planfield planinput-planfield">
              <label>HEIGHT</label><br />
              <input
                type="number"
                placeholder="Height in cm"
                class="Height"
                id="Height"
                autocomplete="off"
                pattern="[0-9]{3}"
              />
            </div>
            <br /><br />

            <div class="planfield planinput-planfield">
              <label>WEIGHT</label><br />
              <input
                type="number"
                placeholder="Weight in cm"
                class="Weight"
                id="Weight"
                autocomplete="off"
                pattern="[0-9]{3}"
              />
            </div>
            <br /><br />

            <hr />
            <br />
            <br />

            
          </form>
          <a  onClick={navigatecharts} >
            <div class="planfield planbutton-planfield">
              <button type="submit">
                Proceed to Checkout
              </button>
            </div>
          </a>

          <br />
          <br />
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>

    )
}