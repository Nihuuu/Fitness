import React, { useState, useEffect } from "react";
import { Data } from "../DietData";
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

function DFrom({dday}) {
    const [ dietplans, setdietplans] = useState([]);
 
  useEffect(() => {
    if (dday === "Day 1") {
      setDay1();
    } 
    else if (dday === "Day 2") {
      setDay2();
    }
    else if (dday === "Day 3") {
      setDay3();
    }
    else if (dday === "Day 4") {
      setDay4();
    }
    else if (dday === "Day 5") {
      setDay5();
    }
    else if (dday === "Day 6") {
      setDay6();
    }
    }, [dday]);

    const setDay1 = () => {
   
        setdietplans(Data.Day1);
      };
      const setDay2 = () => {

        setdietplans(Data.Day2);
      };
      const setDay3 = () => {
   
        setdietplans(Data.Day3);
      };
      const setDay4 = () => {
      
        setdietplans(Data.Day4);
      };
      const setDay5 = () => {
      
        setdietplans(Data.Day5);
      };
      const setDay6 = () => {
        
        setdietplans(Data.Day6);
      };

    
    return(
        <Container>
     
        {dday ?(
          <>
            
            <TableContainer style={{width:'800px',marginLeft:'13.5em'}} component={Paper}>
              <Table >
                <TableHead>
                  <TableRow>
                    <TableCell variant="h4" style={{ fontWeight: "bold",textAlign: "center" }} >Diet Plan for weight loss chart</TableCell>
                  
                  </TableRow>
                </TableHead>
                <TableBody>
                
                  {dietplans.map((dietplan) => {
                    return (
                      <TableRow>
                        <TableCell>{dietplan.name}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <br/>
            <br/>
            <div style={{width:'800px',marginLeft:'13.5em'}}>
            <Typography variant="h3" style={{ marginTop: 80 , color:'#4f53b9'}}>
            7 Healthy Snacks For Smarter Weight Loss For Female
            </Typography>
            <br/>
            <br/>
            <Typography style={{textAlign: "left"}}>
            While most people feel that having 5-6 meals in a day is a lot, your body actually finds it easier to consume the calories in 5-6 small meals as compared to 3 huge meals.
             Hence it is always advisable to have snacks as mini-meals in between the larger meals of the day. 
             Following are some healthy snack options that can be added to your Indian diet chart for weight loss for females:<br/><br/>
            1. Fruits with buttermilk or green tea<br/>
            2. Protein shake with nuts and seeds<br/>
            3. Veg sandwich or milk and apple.<br/>
            4. Walnuts and dates<br/>
            5. Vegetable/ fruit salads<br/>
            6. Fresh fruit smoothies or whey protein shakes<br/>
            7. Multigrain flour khakras<br/><br/>
            Indian homemade food provides one of the best weight-loss diets. A healthy mixture of complex carbohydrates, fats and proteins with less oil or ghee is an excellent choice. These foods provide nutrition as well as cut down on simple carbs and fats that often lead to weight gain.
 
           </Typography>
           <br/>
           <br/>
           <Typography variant="h3" style={{ marginTop: 80,color:'#4f53b9' }}>
           ‍List Of Foods To Be Avoided When Following Diet Plan To Lose Weight
            </Typography>
            <br/>
            <br/>
            <Typography style={{textAlign: "left"}}>
            Foods or beverages that are processed, high in calories or high in sugar, do not form the best weight loss diet chart. Not only do they lead to weight gain, but they are also bad for your overall health and lead to chronic diseases like diabetes, heart disease and obesity. 
            It is highly advisable to minimise the consumption of these foods or to avoid them altogether.
             Here is the list of foods to avoid while you are on an Indian diet plan for weight loss.<br/><br/>
            1. Highly sweetened beverages such as soda, aerated drinks, sports drinks<br/>
            2. Sweeteners like sugar, honey, condensed milk<br/>
            3. Foods which have high sugar such as candy, ice cream, cakes, cookies, rice pudding, high sugar cereals etc.<br/>
            4. Foods which have high fats such as French fries, chips, fried foods etc.<br/>
            5. Trans fats like Vanaspati, margarine, and processed foods<br/>
            6. Refined oils such as canola oil, soybean oil, grapeseed oil etc.<br/>
            7.Refined grains like white bread, white pasta<br/><br/>
            Occasional treats are fine but consuming these regularly can have debilitating effects on your weight loss as well as your health.
           </Typography>
            </div>
          </>
        ): (
            <Typography variant="h6" style={{ marginTop: 80 }}>
             </Typography>
          ) }
      </Container>

    );
}
export default DFrom;
