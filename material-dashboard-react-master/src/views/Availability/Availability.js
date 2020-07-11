/*eslint-disable*/
import React, { useState } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";

const useStyles = makeStyles(styles);

export default function Availability() {
  const  [userId,setUserId] = useState()
  const  [availableFrom,setavailableFrom]=useState()
  const  [availableTo,setavailableTo]=useState()
  const [isLoaded,setIsLoaded]=useState(false)
  function buttonIsClicked(e){
    var url="http://localhost:3010/sellers/"+userId;
    axios.post(url,{
      availablefrom: availableFrom,
      availableto: availableTo
    },{
      headers: { 'Content-Type': 'application/json' 
    }
    })
    .then(res => {
      console.log(res)
      setIsLoaded(true)
    })
    .catch(err=>console.log(err));
  }
  const classes = useStyles();
  if(isLoaded===false) return(
    <GridContainer>
    <GridItem xs={12} sm={12} md={8}>
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Seller Details</h4>
        </CardHeader>
        <CardBody>
        <GridContainer>
            <GridItem xs={12} sm={6} md={8}>
              <p>Enter Seller id</p>
              <input
                labelText="Enter Seller id "
                id="sellerid"
                formControlProps={{
                  fullWidth: true
                }}
              onChange={event=>setUserId(event.target.value)}/>
            </GridItem>
            <GridItem xs={12} sm={6} md={8}>
              <p>Available From</p>
              <input
                labelText="Enter Date "
                id="sellerid"
                formControlProps={{
                  fullWidth: true
                }}
              onChange={event=>setavailableFrom(event.target.value)}/>
            </GridItem>
            <GridItem xs={12} sm={6} md={8}>
              <p>Available To</p>
              <input
                labelText="Enter Date "
                id="sellerid"
                formControlProps={{
                  fullWidth: true
                }}
              onChange={event=>setavailableTo(event.target.value)}/>
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
              <Button color="primary" onClick={buttonIsClicked}>Update Availability</Button>
        </CardFooter>
      </Card>
    </GridItem>
  </GridContainer>
  );
  return(
    <div>You have Successfully updated Availability</div>
  );
  
  
}
