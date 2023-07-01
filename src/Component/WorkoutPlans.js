import React, { useState } from "react";
import '../Component/css/plans.css';
import Form from "./PlanComponents/Form";
import { TextField, MenuItem } from "@material-ui/core";
import DFrom from './PlanComponents/DFrom';
const WorkoutPlans=()=>{
    const [day, setDay] = useState("");
    const [dday, setDday] = useState("");
    const changeDay = (e) => setDay(e.target.value);
    const changeDday = (e) => setDday(e.target.value);
  
    return(
        <div>
             <div className="App">
      <h1 style={{color:'#4f53b9'}}>Workout Planner</h1>
      <p >If you are looking to lose unwanted body fat and start your journey towards your dream physique,
we have got you covered with our Beginner Fat Loss Workout Plan. This plan has been designed to
maximise fat loss while helping you maintain lean muscle to ensure you create that "toned" look. So if
you want to look better, feel healthier and have more energy during the day, let us guide you
through the process of fat loss!</p>

      <div >
      <TextField
        select
        onChange={changeDay}
        value={day}
        helperText="What day is it?"
      >
        <MenuItem onChange={changeDay} value="Lower Body">
          Lower Body
        </MenuItem>
        <MenuItem onChange={changeDay} value="Upper Body">
          Upper Body
        </MenuItem>
        <MenuItem onChange={changeDay} value="Back Biceps">
        Back and Biceps
        </MenuItem>
        <MenuItem onChange={changeDay} value="Hamstring Calves">
        Hamstring and Calves
        </MenuItem>
        <MenuItem onChange={changeDay} value="Full Body">
        Full and Body
        </MenuItem>
        <MenuItem onChange={changeDay} value="Glutes Core Body">
        Glutes and Core
        </MenuItem>
      </TextField>
      </div>

      

      {/* Render form and table. Pass day as props. */}
      <Form day={day} />
    </div>

<div className="App">
    <hr/>
<h1 style={{color:'#4f53b9'}}>Diet Plan</h1>
<p >
Indian breakfast for weight loss should be the heaviest meal of the day such
as idli-sambhar. Lunch for weight loss (Indian) should be lighter and dinner for weight loss (Indian) should be the lightest. Fruits, vegetables, roots, and tubers
should make up half of the plate, cereals should make up a quarter, and protein-rich foods like pulses, eggs, meat, etc. should make up
the other quarter. Moreover, the diet should be followed by a glass of milk, buttermilk, curd or paneer along with moderate amounts of various oils and fats.



</p>

<div >
<TextField
  select
  onChange={changeDday}
  value={dday}
  helperText="What day is it?"
>
  <MenuItem onChange={changeDday} value="Day 1">
    Day 1
  </MenuItem>
  <MenuItem onChange={changeDday} value="Day 2">
  Day 2
  </MenuItem>
  <MenuItem onChange={changeDday} value="Day 3">
  Day 3
  </MenuItem>
  <MenuItem onChange={changeDday} value="Day 4">
  Day 4
  </MenuItem>
  <MenuItem onChange={changeDday} value="Day 5">
  Day 5
  </MenuItem>
  <MenuItem onChange={changeDday} value="Day 6">
  Day 6
  </MenuItem>
</TextField>
</div>

<DFrom dday={dday} />
</div>
<br/>
<br/>
<br/>
<br/>
        </div>
    )
}
export default WorkoutPlans