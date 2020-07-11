import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { useState } from "react";
import axios from "axios";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import CardFooter from "components/Card/CardFooter.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const  [userId,setUserId] = useState()
  const  [buyersIdList,setBuyersIdList] = useState([])
  const [isLoaded,setIsLoaded]=useState(false)
  function buttonIsClicked(e){
    
    axios.get("http://localhost:3010/sellers/listofbookedbuyers/"+userId)
    .then(res => {
      setBuyersIdList(res.data)
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
              <p>Enter Seller id to fetch details</p>
              <input
                labelText="Enter Seller id "
                id="sellerid"
                formControlProps={{
                  fullWidth: true
                }}
              onChange={event=>setUserId(event.target.value)}/>
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
              <Button color="primary" onClick={buttonIsClicked}>Get Details</Button>
        </CardFooter>
      </Card>
    </GridItem>
  </GridContainer>
  );
  if(isLoaded===true && buyersIdList.length<=0 ) return("You have No Booked Buyers")
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          {buyersIdList.map(buyer=>(
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Booked Buyer</h4>
            </CardHeader>
            <CardBody>
            <h5>Buyer ID </h5>
          <p>{buyer}</p>
            </CardBody>
          </Card>
          ))}
        </GridItem>
      </GridContainer>
    </div>
  );
}
