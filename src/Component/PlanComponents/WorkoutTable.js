import React, { useState, useEffect } from "react";
import { Data } from "../Data";
import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
} from "@material-ui/core";

function WorkoutTable({ day, velocityRange, velocityName }) {
  const [mainLift, setMainLift] = useState("");
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (day === "Upper Body") {
      setUpperBody();
    } 
    else if (day === "Lower Body") {
      setLowerBody();
    }
    else if (day === "Back Biceps") {
      setBackBiceps();
    }
    else if (day === "Hamstring Calves") {
      setHamstringCalves();
    }
    else if (day === "Full Body") {
      setFullBody();
    }
    else if (day === "Glutes Core Body") {
      setGlutesCore();
    }
    



  }, [day]);

  //Return respective exercises based on day
  const setUpperBody = () => {
    setMainLift("Bench Press");
    setExercises(Data.UpperBody);
  };

  const setLowerBody = () => {
    setMainLift("Squat");
    setExercises(Data.LowerBody);
  };
  const setBackBiceps = () => {
    setMainLift("Bench Press");
    setExercises(Data.BackBiceps);
  };

  const setHamstringCalves = () => {
    setMainLift("Squat");
    setExercises(Data.HamstringCalves);
  };
  const setFullBody = () => {
    setMainLift("Bench Press");
    setExercises(Data.FullBody);
  };

  const setGlutesCore = () => {
    setMainLift("Squat");
    setExercises(Data.GlutesCore);
  };

  //Create copy of velocities array for readability.
  const velocities = Data.Velocities;

  const getPhaseIndex = () => {
    //Get the current velocity object based on the velocityName prop
    const currentVelocityObj = velocities.filter((velocity) => {
      return velocity.name === velocityName;
    });

    //Returns integer of the index of current velocity object
    return velocities.indexOf(currentVelocityObj[0]);
  };

  const thisPhaseIndex = getPhaseIndex();

  const getPhaseName = () => {
    //If the selected velocity is at the end, cycle back to the beginning
    if (thisPhaseIndex === velocities.length - 1) return velocities[0].name;
    //else return the name of the next velocity in the array
    return velocities[thisPhaseIndex + 1].name;
  };

  const getPhaseRange = () => {
    //If the selected velocity is at the end, cycle back to the beginning
    if (thisPhaseIndex === velocities.length - 1) return velocities[0].range;
    //else return the range of the next velocity in the array
    return velocities[thisPhaseIndex + 1].range;
  };

  const thisPhaseName = getPhaseName();

  const thisPhaseRange = getPhaseRange();

  return (
    <Container>
      {/* Don't render table until day and velocity have been selected */}
      {day && velocityRange ? (
        <>
          
          <TableContainer  style={{width:'800px',marginLeft:'13.5em'}} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>Exercise</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Target Velocity (m/s)
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Sets X Reps
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  {/* Return main lift and velocity in first row */}
                  <TableCell>{mainLift}</TableCell>
                  <TableCell>{thisPhaseRange}</TableCell>
                  <TableCell>
                    3 X N/A
                    <br />
                    Stop set at 20% drop in velocity
                  </TableCell>
                </TableRow>
                {/* Return the remainder of the exercises with sets x reps */}
                {exercises.map((exercise) => {
                  return (
                    <TableRow>
                      <TableCell>{exercise.name}</TableCell>
                      <TableCell>N/A</TableCell>
                      <TableCell>{exercise.setsReps}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Typography variant="h6" style={{ marginTop: 80 }}>
         
        </Typography>
      )}
    </Container>
  );
}

export default WorkoutTable;
